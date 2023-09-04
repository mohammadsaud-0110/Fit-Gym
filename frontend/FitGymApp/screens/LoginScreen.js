import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  // Use useNavigation hook to get the navigation object
  const navigation = useNavigation();

  const handleLogin = async() => {
    setError('');
    
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    
    await fetch('http://127.0.0.1:8000/user/login/', {
      method: 'POST',
      headers: {
        // Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password
      }),
    })
    .then((res) =>{
      return res.json();
    })
    .then(async (data) => {
      const {message} = data;
      alert(message);
      await AsyncStorage.setItem("loggedUID", data.account.id)
      await AsyncStorage.setItem("loggedRole", data.role)
      await AsyncStorage.setItem("loggedEmail", data.account.email)
      await AsyncStorage.setItem("loggedName", data.account.name)
      
      if (data.role === 'trainer') {
        // navigation.navigate('TrainerDashboard'); // Replace with your actual trainer dashboard screen
      }
      else if (data.role === 'user') {
        handleSkip(); // navigate to sections page
      }
    })
    .catch((err) => alert(err));
  };

  const toUserReg = () => {
    navigation.navigate("User")
  }

  
  const toTrainerReg = () => {
    navigation.navigate("TrainerRegistration")
  }

  const handleSkip = () => {
    navigation.navigate("Section");
  };

  return (
    <SafeAreaView style={styles.container}>
       {/* <Image
        // source={require('../assets/logo2.png')} 
        style={styles.logo}
      /> */}
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
          { backgroundColor: pressed ? 'darkgreen' : 'green' },
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

      {/* <Pressable  onPress={handleSkip}>
        <Text style={styles.skipButtonText}>Continue as Guest</Text>
      </Pressable> */}
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100, 
    height: 100, 
    borderRadius: 50, 
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 10,
    width: '90%',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },
  loginButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    width: '90%',
    marginTop: 10,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
  },
  signupText: {
    marginTop: 10,
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  skipButtonText: {
    marginTop: 10,
    fontSize: 16,
    color: 'green',
    textDecorationLine: 'underline',
  },
});

export default Login;