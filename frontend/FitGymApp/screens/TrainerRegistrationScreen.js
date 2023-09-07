import React, { useState } from "react";
import { styles } from "../components/styles";
import { View, Text, TextInput, Pressable} from "react-native"; 
import { useNavigation } from "@react-navigation/native"; 
import { Picker } from "@react-native-picker/picker";

const TrainerRegistrationScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [specialization, setSpecialization] = useState(""); 
  const [experience, setExperience] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSaveProfile = async () => {
    // Perform validation
    if (!name || !specialization || !gender || !experience || !email || !password || !contactNumber) {
      alert("All fields are required");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Invalid email format");
      return;
    }

    const trainerProfile = {
      name,
      gender,
      specialization,
      experience,
      email,
      contact_number: contactNumber,
      password
    };
    await fetch('https://fitgym-backend.onrender.com/trainer/signup/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(trainerProfile),
        })
        .then((res) =>{
          return res.json();
        })
        .then(async (data) => {
          const {message} = data;
          alert(message);
          handleRedirect();
        })
        .catch((err) => alert(err));
  };

  const handleRedirect = () => {
    navigation.navigate("Login"); // Navigate to the login screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Trainer Registration</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
        required={true} // Add required attribute
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
        placeholder="Specialization"
        value={specialization}
        onChangeText={setSpecialization}
        required={true} // Add required attribute
      />
      <Picker
        style={styles.picker} // Style as needed
        selectedValue={gender}
        onValueChange={(itemValue) => setGender(itemValue)}
        required={true} // Add required attribute
      >
        <Picker.Item label="Select Gender" value="" />
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
        <Picker.Item label="Other" value="other" />
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Experience in years"
        value={experience}
        onChangeText={setExperience}
      />
      <TextInput
        style={styles.input}
        placeholder="Contact Number"
        value={contactNumber}
        onChangeText={setContactNumber}
        required={true} // Add required attribute
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        required={true} // Add required attribute
      />
      {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
      <Pressable style={styles.button} onPress={handleSaveProfile}>
        <Text style={styles.buttontext}>Register</Text>
      </Pressable>
      <Pressable style={styles.skipButton} onPress={handleRedirect}>
        <Text style={styles.skipButtonText}>Got to Login!</Text>
      </Pressable>
    </View>
  );
};

export default TrainerRegistrationScreen;