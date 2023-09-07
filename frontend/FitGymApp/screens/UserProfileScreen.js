import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import { styles } from "../components/styles";

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

  const handleSaveProfile = async () => {
    if (!name || !age || !gender || !height || !weight || !email || !password || !contactNumber) {
      alert("All fields are required");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Invalid email format");
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
      password
    };
    await fetch('https://fitgym-backend.onrender.com/user/signup/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userProfile),
    })
    .then((res) => res.json())
    .then(async (data) => {
      const { message } = data;
      alert(message);
      gotoLogin();
    })
    .catch((err) => alert(err));
  };

  const gotoLogin = () => {
    navigation.navigate("Login"); // Navigate to the section screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>User Registration</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
      />
      <Picker
        style={styles.picker}
        selectedValue={gender}
        onValueChange={(itemValue) => setGender(itemValue)}
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
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Pressable style={styles.button} onPress={handleSaveProfile}>
        <Text style={styles.buttontext}>Register</Text>
      </Pressable>
      <Pressable style={styles.skipButton} onPress={gotoLogin}>
        <Text style={styles.skipButtonText}>Go to Login</Text>
      </Pressable>
    </View>
  );
};

export default UserProfileScreen;
