import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NutritionPlanForm = ({ navigation }) => {
  const [nutritionPlan, setNutritionPlan] = useState({
    name: '',
    image: '',
    goal: '',
    duration: '',
    guideline: '',
    trainerId: '', // You can fetch this from AsyncStorage
    foodItems: [],
  });

  useEffect(() => {
    // Function to fetch trainerId from AsyncStorage
    const fetchTrainerId = async () => {
      try {
        const trainerId = await AsyncStorage.getItem('loggedUID'); // Replace 'trainerId' with your actual storage key
        if (trainerId !== null) {
          // Set the retrieved trainerId in the nutritionPlan state
          setNutritionPlan((prevNutritionPlan) => ({
            ...prevNutritionPlan,
            trainerId,
          }));
        }
      } catch (error) {
        console.error('Error fetching trainerId from AsyncStorage:', error);
      }
    };

    // Call the function to fetch trainerId when the component mounts
    fetchTrainerId();
  }, []);

  const handleAddFoodItem = (newFoodItem) => {
    // Update the nutritionPlan state with the new food item
    setNutritionPlan((prevNutritionPlan) => ({
      ...prevNutritionPlan,
      foodItems: [...prevNutritionPlan.foodItems, newFoodItem],
    }));
  };

  const handleSaveNutritionPlan = async () => {
    try {
      // Make a POST request to save the nutrition plan
      const response = await axios.post('https://fitgym-backend.onrender.com/create/nutrition/', nutritionPlan);

      // Handle the response (e.g., show a success message)
      console.log('Nutrition plan saved:', response.data);

      // Reset the form
      setNutritionPlan({
        name: '',
        image: '',
        goal: '',
        duration: '',
        guideline: '',
        trainerId: '', // Fetch from AsyncStorage
        foodItems: [],
      });

      // Navigate to another screen if needed
      navigation.navigate('Nutrition'); // Replace 'Home' with the target screen name
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error('Error saving nutrition plan:', error);
    }
    console.log(nutritionPlan);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Create a Nutrition Plan</Text>

        <Text style={styles.label}>Nutrition Plan Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Name"
          onChangeText={(text) => setNutritionPlan({ ...nutritionPlan, name: text })}
          value={nutritionPlan.name}
        />

        <Text style={styles.label}>Image URL</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Image URL"
          onChangeText={(text) => setNutritionPlan({ ...nutritionPlan, image: text })}
          value={nutritionPlan.image}
        />

        <Text style={styles.label}>Goal</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Goal"
          onChangeText={(text) => setNutritionPlan({ ...nutritionPlan, goal: text })}
          value={nutritionPlan.goal}
        />

        <Text style={styles.label}>Duration (in weeks)</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Duration"
          onChangeText={(text) => setNutritionPlan({ ...nutritionPlan, duration: text })}
          value={nutritionPlan.duration}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Guideline</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Enter Guideline"
          onChangeText={(text) => setNutritionPlan({ ...nutritionPlan, guideline: text })}
          value={nutritionPlan.guideline}
          multiline
          numberOfLines={4}
        />

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('FoodItems', { handleAddFoodItem })}
        >
          <Text style={styles.buttonText}>Add Food Item</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={handleSaveNutritionPlan}
        >
          <Text style={styles.buttonText}>Save Nutrition Plan</Text>
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

export default NutritionPlanForm;
