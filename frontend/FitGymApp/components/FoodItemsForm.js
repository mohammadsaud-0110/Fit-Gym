import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const FoodItemForm = ({ route, navigation }) => {
  const { handleAddFoodItem } = route.params;

  const [foodItemData, setFoodItemData] = useState({
    name: '',
    image: '',
    calories: '',
    protein: '',
    carbs: '',
    fats: '',
    description: '',
  });

  const handleAddFoodItemPress = () => {
    const newFoodItem = { ...foodItemData };
    handleAddFoodItem(newFoodItem);
    setFoodItemData({
      name: '',
      image: '',
      calories: '',
      protein: '',
      carbs: '',
      fats: '',
      description: '',
    });
  };

  const handleSaveAndFinish = () => {
    // You can perform any additional actions here before navigating back.
    // Example: You can save the last food item if there's any unsaved data.
    navigation.goBack(); // Navigate back to NutritionPlanForm
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Add Food Item</Text>

        <Text style={styles.label}>Food Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Name"
          onChangeText={(text) => setFoodItemData({ ...foodItemData, name: text })}
          value={foodItemData.name}
        />

        <Text style={styles.label}>Image URL</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Image URL"
          onChangeText={(text) => setFoodItemData({ ...foodItemData, image: text })}
          value={foodItemData.image}
        />

        <Text style={styles.label}>Calories</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Calories"
          onChangeText={(text) => setFoodItemData({ ...foodItemData, calories: text })}
          value={foodItemData.calories}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Protein</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Protein"
          onChangeText={(text) => setFoodItemData({ ...foodItemData, protein: text })}
          value={foodItemData.protein}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Carbs</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Carbs"
          onChangeText={(text) => setFoodItemData({ ...foodItemData, carbs: text })}
          value={foodItemData.carbs}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Fats</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Fats"
          onChangeText={(text) => setFoodItemData({ ...foodItemData, fats: text })}
          value={foodItemData.fats}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Enter Description"
          onChangeText={(text) => setFoodItemData({ ...foodItemData, description: text })}
          value={foodItemData.description}
          multiline
          numberOfLines={4}
        />

        <Pressable
          style={styles.button}
          onPress={handleAddFoodItemPress}
        >
          <Text style={styles.buttonText}>Add Food Item</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={handleSaveAndFinish}
        >
          <Text style={styles.buttonText}>Save and Finish</Text>
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

export default FoodItemForm;
