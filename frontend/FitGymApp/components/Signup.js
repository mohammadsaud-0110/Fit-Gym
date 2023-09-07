// Signup.js
import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet,ScrollView,Image} from 'react-native';
import { addUser, getUserByEmail } from '../data/userdata';
import { Picker } from '@react-native-picker/picker';

const Signup = ({ navigation }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contact, setContact] = useState('');
  const [error, setError] = useState('');

  const handleSignup = () => {
    setError(''); // Reset any previous errors

    if (!name || !age || !gender || !email || !password || !contact) {
      setError('Please fill in all fields.');
      return;
    }

    if (getUserByEmail(email)) {
      setError('Email already exists. Please use a different email.');
      return;
    }

    const newUser = {
      name,
      age,
      gender,
      email,
      password,
      contact,
    };

    addUser(newUser);

    // You can add navigation or other actions here
    alert('Signup successful!');

    // Clear input fields
    setName('');
    setAge('');
    setGender('');
    setEmail('');
    setPassword('');
    setContact('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../assets/logo2.png')} 
        style={styles.logo}
      />
      <Text style={styles.heading}>Signup</Text>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          placeholder="Name"
          onChangeText={(text) => setName(text)}
          value={name}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Age</Text>
        <TextInput
          placeholder="Age"
          onChangeText={(text) => setAge(text)}
          value={age}
          keyboardType="numeric"
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Gender</Text>
        <View style={styles.pickerContainer}><Picker
          selectedValue={gender}
          onValueChange={(itemValue) => setGender(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
          <Picker.Item label="Others" value="Others" />
        </Picker></View>
      </View>
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
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Contact</Text>
        <TextInput
          placeholder="Contact"
          onChangeText={(text) => setContact(text)}
          value={contact}
          keyboardType="phone-pad"
          style={styles.input}
        />
      </View>
      <Pressable
        style={({ pressed }) => [
          styles.signupButton,
          { opacity: pressed ? 0.6 : 1 },
        ]}
        onPress={handleSignup}
      >
        <Text style={styles.signupButtonText}>Signup</Text>
      </Pressable>
      <Text
        style={styles.loginText}
        onPress={() => navigation.navigate('Login')}
      >
        Already have an account? Login
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  logo: {
    width: 100, 
    height: 100, 
    borderRadius: 50, 
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
  pickerContainer: {
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  picker: {
    height: 40,
  },
  signupButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: '90%',
    marginTop: 10,
    alignItems: 'center',
  },
  signupButtonText: {
    color: 'white',
    fontSize: 18,
  },
  loginText: {
    marginTop: 10,
    fontSize: 16,
    color: 'green',
    textDecorationLine: 'underline',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default Signup;
