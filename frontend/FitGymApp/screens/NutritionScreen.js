import React, { useState, useEffect } from "react";
import { View, StyleSheet, Pressable, Image, Text, ScrollView, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";

const NutritionScreen = () => {
  const navigation = useNavigation();
  const [nutritionData, setNutritionData] = useState([]);

  useEffect(() => {
    // Make an Axios GET request to fetch nutrition data from your API or server
    axios.get("https://fitgym-backend.onrender.com/all/nutritionplans/")
      .then((response) => {
        // Assuming the response data is an array of nutrition objects
        setNutritionData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching nutrition data:", error);
      });
  }, []);

  const handleSectionPress = (exercise) => {
    // Pass the selected ID to the Single screen
    navigation.navigate("Single", { selectedId: exercise.id });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Ionicons
        onPress={() => navigation.goBack()}
        style={styles.backIcon}
        name="arrow-back-outline"
        size={28}
        color="black"
      />

      <ScrollView style={{ marginTop:35  }}>
        {nutritionData.map((exercise, index) => (
          <Pressable
            key={index}
            style={styles.exerciseContainer}
            onPress={() => handleSectionPress(exercise)}
          >
            <Image source={{ uri: exercise.image }} style={styles.exerciseImage} />
            <Text style={styles.exerciseName}>{exercise.name}</Text>
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
    marginTop: 50,
  },
  backIcon: {
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 1,
  },
  exerciseContainer: {
    marginTop: 5,
    marginBottom: 15,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOpacity: 0.3,
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
