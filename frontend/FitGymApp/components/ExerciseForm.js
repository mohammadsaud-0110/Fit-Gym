import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const ExerciseForm = ({ route, navigation }) => {
  const { workoutPlan } = route.params;

  const [exerciseData, setExerciseData] = useState({
    name: '',
    image: '',
    sets: '',
    reps: '',
  });

  const handleAddExercise = () => {
    // Add the current exerciseData to the workout plan's exercises array
    const newExercise = { ...exerciseData };
    workoutPlan.excersises.push(newExercise);

    // Clear the form
    setExerciseData({
      name: '',
      image: '',
      sets: '',
      reps: '',
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Add Exercise</Text>

        <Text style={styles.label}>Exercise Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Name"
          onChangeText={(text) => setExerciseData({ ...exerciseData, name: text })}
          value={exerciseData.name}
        />

        <Text style={styles.label}>Image URL</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Image URL"
          onChangeText={(text) => setExerciseData({ ...exerciseData, image: text })}
          value={exerciseData.image}
        />

        <Text style={styles.label}>Sets</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Sets"
          onChangeText={(text) => setExerciseData({ ...exerciseData, sets: text })}
          value={exerciseData.sets}
        />

        <Text style={styles.label}>Reps</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Reps"
          onChangeText={(text) => setExerciseData({ ...exerciseData, reps: text })}
          value={exerciseData.reps}
        />

        <Pressable
          style={styles.button}
          onPress={handleAddExercise}
        >
          <Text style={styles.buttonText}>Add Exercise</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('WorkoutForm', { workoutPlan })}
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
    fontSize: 18,
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

export default ExerciseForm;
