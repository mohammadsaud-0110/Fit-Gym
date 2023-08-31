import React from "react";
import { View, StyleSheet, Pressable, Image, Text, ScrollView, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import nutritionData from "../data/nutrition"; 
import { Ionicons } from "@expo/vector-icons";

const NutritionScreen = () => {
  const navigation = useNavigation();

  const handleSectionPress = (exercise) => {
    navigation.navigate("Single", { exercise: exercise });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Ionicons
        onPress={() => navigation.goBack()}
        style={styles.backIcon}
        name="arrow-back-outline"
        size={28}
        color="white"
      />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {nutritionData.map((exercise, index) => (
          <Pressable
            key={index}
            style={styles.exerciseContainer}
            onPress={() => handleSectionPress(exercise)}
          >
            <Image source={{ uri: exercise.image }} style={styles.exerciseImage} />
            <Text style={styles.exerciseName}>{exercise.exerciseName}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    marginTop: 30,
  },
  backIcon: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  scrollContent: {
    padding: 20,
  },
  exerciseContainer: {
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  exerciseImage: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  exerciseName: {
    padding: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default NutritionScreen;
