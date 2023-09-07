import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, Alert, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WorkoutForm = ({ navigation }) => {
  const [workoutPlan, setWorkoutPlan] = useState({
    name: '',
    image: '',
    duration: '',
    description: '',
    excersises: [],
    trainerId: '', // Store trainerId here
  });

  useEffect(() => {
    // Retrieve the trainerId from AsyncStorage and update the workoutPlan
    const fetchTrainerId = async () => {
      try {
        const trainerId = await AsyncStorage.getItem('loggedUID');
        if (trainerId) {
          setWorkoutPlan({ ...workoutPlan, trainerId });
        }
      } catch (error) {
        console.error('Error fetching trainerId:', error);
      }
    };

    fetchTrainerId();
  }, []);

  const handleSaveWorkout = async () => {
    try {
      // Make a POST request to save the workout plan
      const response = await axios.post('https://fitgym-backend.onrender.com/create/workout/', workoutPlan);

      // Handle the response (e.g., show a success message)
      console.log('Workout plan saved:', response.data);
      Alert.alert('Success', 'Workout plan saved successfully');

      // Reset the form
      setWorkoutPlan({
        name: '',
        image: '',
        duration: '',
        description: '',
        excersises: [],
        trainerId: '', // Clear the trainerId
      });

      // Navigate to another screen if needed
      navigation.navigate('Home'); // Replace 'Home' with the target screen name
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error('Error saving workout plan:', error);
      Alert.alert('Error', 'Failed to save workout plan. Please try again.');
    }
    console.log(workoutPlan)
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Create a Workout Plan</Text>

        <Text style={styles.label}>Workout Plan Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Name"
          onChangeText={(text) => setWorkoutPlan({ ...workoutPlan, name: text })}
          value={workoutPlan.name}
        />

        <Text style={styles.label}>Image URL</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Image URL"
          onChangeText={(text) => setWorkoutPlan({ ...workoutPlan, image: text })}
          value={workoutPlan.image}
        />

        <Text style={styles.label}>Duration (in weeks)</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Duration"
          onChangeText={(text) => setWorkoutPlan({ ...workoutPlan, duration: text })}
          value={workoutPlan.duration}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Enter Description"
          onChangeText={(text) => setWorkoutPlan({ ...workoutPlan, description: text })}
          value={workoutPlan.description}
          multiline
          numberOfLines={4}
        />

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('ExerciseForm', { workoutPlan })}
        >
          <Text style={styles.buttonText}>Add Exercise</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={handleSaveWorkout}
        >
          <Text style={styles.buttonText}>Save Workout Plan</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
  },
  scrollContainer: {
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    fontSize: 16,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default WorkoutForm;
