import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import WorkoutScreen from "./screens/WorkoutScreen";
import FitScreen from "./screens/FitScreen";
import RestScreen from "./screens/RestScreen";
import SectionScreen from "./screens/SectionScreen";
import NutritionScreen from "./screens/NutritionScreen";
import NutritionCard from "./components/NutritionCards";
import UserProfileScreen from "./screens/UserProfileScreen";
import Login from "./components/Login";
import Signup from "./components/Signup";
import DietScreen from "./screens/DietScreen";
import DietPlanDetailsScreen from "./screens/DietPlanDetailsScreen";
import GoalScreen from "./screens/GoalScreen";
import GoalsListScreen from "./screens/GoalsListScreen";
import ActivityLogScreen from "./screens/ActivityLogScreen";
import ExerciseForm from "./components/ExerciseForm";
import WorkoutForm from "./components/WorkoutForm";
import NutritionPlanForm from "./components/NutritionPlanForm";
import FoodItemsForm from "./components/FoodItemsForm";
import TrainerSectionScreen from "./screens/TrainerSectionScreen";
import TrainerRegistrationScreen from "./screens/TrainerRegistrationScreen";
import LogoutScreen from "./screens/LogoutScreen";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="User" component={UserProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="Section" component={SectionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Workout" component={WorkoutScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Fit" component={FitScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Rest" component={RestScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Nutrition" component={NutritionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Single" component={NutritionCard} options={{ headerShown: false }} />
        <Stack.Screen name="Diet" component={DietScreen} options={{ headerShown: false }} />
        <Stack.Screen name="DietDetails" component={DietPlanDetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Goal" component={GoalScreen} options={{ headerShown: false }} />
        <Stack.Screen name="GoalList" component={GoalsListScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Activity" component={ActivityLogScreen} options={{ headerShown: false }} />
        <Stack.Screen name="WorkoutForm" component={WorkoutForm} options={{ headerShown: false }} />
        <Stack.Screen name="ExerciseForm" component={ExerciseForm} options={{ headerShown: false }} />
        <Stack.Screen name="NutritionPlan" component={NutritionPlanForm} options={{ headerShown: false }} />
        <Stack.Screen name="FoodItems" component={FoodItemsForm} options={{ headerShown: false }} />
        <Stack.Screen name="Trainer" component={TrainerSectionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TrainerRegistration" component={TrainerRegistrationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Logout" component={LogoutScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
