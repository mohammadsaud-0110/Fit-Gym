import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView, Button, StyleSheet, SafeAreaView } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const GoalScreen = () => {
  const navigation = useNavigation();
  const [planName, setPlanName] = useState('');
  const [selectedGoal, setSelectedGoal] = useState('Weight Loss');
  const [duration, setDuration] = useState('');
  const [description, setDescription] = useState('');
  const [loggedUID, setLoggedUID] = useState('');

  // Retrieve the loggedUID from AsyncStorage when the component mounts
  useEffect(() => {
    const fetchLoggedUID = async () => {
      try {
        const storedUID = await AsyncStorage.getItem('loggedUID');
        if (storedUID !== null) {
          setLoggedUID(storedUID);
        }
      } catch (error) {
        console.error('Error fetching loggedUID from AsyncStorage:', error);
      }
    };

    fetchLoggedUID();
  }, []);

  const handleSaveGoal = async () => {
    // Prepare the goal data
    const goalData = {
      planName,
      selectedGoal,
      duration,
      description,
      loggedUID, // Include loggedUID in the goal data
    };
  
    try {
      // Send a POST request to your API
      const response = await fetch('https://fitgym-backend.onrender.com/goal/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(goalData),
      });
  
      if (response.ok) {
        // Goal data saved successfully
        // You can also handle the response from the API if needed
        const responseData = await response.json();
        console.log('Goal saved successfully:', responseData);
        
        // After saving the goal, you can navigate back to the SectionScreen or any other screen.
        navigation.navigate('GoalList')
      } else {
        // Handle API error here
        console.error('Failed to save goal:', response.status);
      }
    } catch (error) {
      console.error('Error saving goal:', error);
    }
    console.log(goalData);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          onPress={() => navigation.goBack()}
          style={styles.backIcon}
          name="arrow-back-outline"
          size={30}
          color="black"
        />
        <Text style={styles.title}>Create New Goal</Text>
      </View>

        <View style={styles.form}>
          <Text style={styles.label}>Plan Name:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPlanName}
            value={planName}
            placeholder="Enter plan name"
          />
  
          <Text style={styles.label}>Goal:</Text>
          <Picker
            selectedValue={selectedGoal}
            onValueChange={(itemValue) => setSelectedGoal(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Weight Loss" value="Weight Loss" />
            <Picker.Item label="Muscle Gain" value="Muscle Gain" />
            <Picker.Item label="Cardio Fitness" value="Cardio Fitness" />
            {/* Add more goal options here */}
          </Picker>
  
          <Text style={styles.label}>Duration (weeks):</Text>
          <TextInput
            style={styles.input}
            onChangeText={setDuration}
            value={duration}
            keyboardType="numeric"
            placeholder="Enter duration in weeks"
          />
  
          <Text style={styles.label}>Description:</Text>
          <TextInput
            style={styles.textarea}
            onChangeText={setDescription}
            value={description}
            multiline={true}
            placeholder="Enter description"
          />
  
          <Button title="Save Goal" onPress={handleSaveGoal} />
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 55,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    textAlign: 'center',
    // marginLeft: -20,
  },
  form: {
    margin: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  picker: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  textarea: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    minHeight: 100,
  },
});

export default GoalScreen;
