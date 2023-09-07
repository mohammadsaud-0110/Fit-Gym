import React, { useState } from 'react';
import { View, Image, Text, TextInput, Pressable, StyleSheet, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigation = useNavigation();

  const handleLogin = async () => {
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('https://fitgym-backend.onrender.com/user/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        const { message } = data;
        alert(message);

        await AsyncStorage.setItem("loggedUID", String(data.account.id));
        await AsyncStorage.setItem("loggedRole", data.role);
        await AsyncStorage.setItem("loggedEmail", data.account.email);
        await AsyncStorage.setItem("loggedName", data.account.name);

        setEmail('');
        setPassword('');

        if (data.role === 'trainer') {
          navigation.navigate('Trainer');
        } else if (data.role === 'user') {
          navigation.navigate('Section');
        }
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const toUserReg = () => {
    navigation.navigate("User");
  }

  const toTrainerReg = () => {
    navigation.navigate("TrainerRegistration");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/logo2.png')}
          style={styles.logo}
        />
      </View>
      <Text style={styles.heading}>Login</Text>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
          style={styles.input}
        />
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.loginButton,
          { backgroundColor: pressed ? '#14532D' : '#2D6A4F' },
        ]}
        onPress={handleLogin}
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </Pressable>

      <Text
        style={styles.signupText}
        onPress={toUserReg}
      >
        New User Registration!
      </Text>

      <Text
        style={styles.signupText}
        onPress={toTrainerReg}
      >
        New Trainer Registration!
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
  },
  inputContainer: {
    marginBottom: 10,
    width: '90%',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    backgroundColor: '#fff',
  },
  loginButton: {
    backgroundColor: '#2D6A4F',
    padding: 10,
    borderRadius: 5,
    width: '90%',
    marginTop: 10,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  signupText: {
    marginTop: 20,
    fontSize: 16,
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default Login;
