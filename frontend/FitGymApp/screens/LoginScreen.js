import React, { useState } from "react";
import { View, Text, TextInput, Pressable} from "react-native"; 
import styles from "../components/stylesheet";
import axios from "axios"; 
import { useNavigation } from "@react-navigation/native"; 

const UserLoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      alert("All fields are required");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Invalid email format");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters long");
      return;
    }

    const userLoginData = {
      email,
      password
    };
    try {
        const response = await axios.post("YOUR_API_URL_HERE", userLoginData);
        console.log("User Login", response.data);
        Alert.alert("Success", "Login successfully");
    }
    catch (error) {
        console.error("Error saving user profile:", error);
        Alert.alert("Error", "An error occurred while saving user profile");
    }
    
    // console.log("User Profile:", userProfile);
  };

  const handleSkip = () => {
    navigation.navigate("Section"); // Navigate to the section screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        required={true} // Add required attribute
      />
      {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        required={true} // Add required attribute
      />
      {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
      {/* ... Other inputs ... */}

      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttontext}>Login</Text>
      </Pressable>


      <Pressable style={styles.skipButton} onPress={handleSkip}>
        <Text style={styles.skipButtonText}>Go to Plans!</Text>
      </Pressable>
    </View>
  );
};

export default UserLoginScreen;
