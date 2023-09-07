import React from 'react';
import { View, Text, StyleSheet, ScrollView,SafeAreaView } from 'react-native';
import workoutAndDietPlans from '../data/diet';

const DietPlanDetailsScreen = ({ route }) => {
  const { dietPlanName } = route.params;

  const selectedWorkoutPlan = 0;
  const dietPlanDetails = workoutAndDietPlans[selectedWorkoutPlan].dietPlans[dietPlanName];

  return (
   
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>{dietPlanName} Details</Text>
      {Object.entries(dietPlanDetails).map(([meal, foods], index) => (
        <View key={index} style={styles.mealContainer}>
          <Text style={styles.mealHeading}>{meal}</Text>
          {foods.map((food, foodIndex) => (
            <Text key={foodIndex} style={styles.foodItem}>
              {`${foodIndex + 1}. ${food}`}
            </Text>
          ))}
        </View>
      ))}
    </ScrollView>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 28,
    marginTop:20,
    marginBottom: 20,
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center',
  },
  mealContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 16,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  mealHeading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  foodItem: {
    fontSize: 18,
    color: '#555',
    marginBottom: 8,
  },
});

export default DietPlanDetailsScreen;
