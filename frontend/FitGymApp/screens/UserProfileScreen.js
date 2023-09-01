import React, { useState } from "react";
import { View, Text, TextInput, Pressable} from "react-native"; 
import styles from "../components/stylesheet";
import axios from "axios"; 
import { useNavigation } from "@react-navigation/native"; 
import { Picker } from "@react-native-picker/picker";

const UserProfileScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState(""); 
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contactNumber, setContactNumber] = useState("+91");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSaveProfile = async () => {
    // Perform validation
    if (!name || !age || !gender || !height || !weight || !email || !password || !contactNumber) {
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

    const userProfile = {
      name,
      age,
      gender,
      height,
      weight,
      email,
      contact_number: contactNumber,
    };
    try {
        const response = await axios.post("YOUR_API_URL_HERE", userProfile);
        console.log("User profile saved:", response.data);
        Alert.alert("Success", "User profile saved successfully");
        gotoLogin();
    }
    catch (error) {
        console.error("Error saving user profile:", error);
        Alert.alert("Error", "An error occurred while saving user profile");
    }
    
    // console.log("User Profile:", userProfile);
  };

  const gotoLogin = () => {
    navigation.navigate("Login"); // Navigate to the section screen
  };

  const gotoTrainer = () => {
    navigation.navigate("TrainerRegistration")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>User Registration</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
        required={true} // Add required attribute
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        required={true} // Add required attribute
      />
      <Picker
        style={styles.input} // Style as needed
        selectedValue={gender}
        onValueChange={(itemValue) => setGender(itemValue)}
        required={true} // Add required attribute
      >
        <Picker.Item label="Select Gender" value="" />
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
        <Picker.Item label="Other" value="Other" />
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Height"
        value={height}
        onChangeText={setHeight}
      />
      <TextInput
        style={styles.input}
        placeholder="Weight"
        value={weight}
        onChangeText={setWeight}
      />
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
      <Pressable style={styles.button} onPress={handleSaveProfile}>
        <Text style={styles.buttontext}>Register</Text>
      </Pressable>

      <Pressable style={styles.skipButton} onPress={gotoLogin}>
        <Text style={styles.skipButtonText}>Got to Login!</Text>
      </Pressable>

      <Pressable style={styles.trainerButton} onPress={gotoTrainer}>
        <Text style={styles.trainerButtonText}>Trainer Registration</Text>
      </Pressable>
    </View>
  );
};

export default UserProfileScreen;
