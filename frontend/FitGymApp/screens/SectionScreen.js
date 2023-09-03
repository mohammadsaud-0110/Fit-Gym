import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';

const SectionScreen = ({ navigation }) => {
  const handleSelectOption = (option) => {
    if (option === "exercise") {
      navigation.navigate("Home");
    } else if (option === "nutrition") {
      navigation.navigate("Nutrition");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          onPress={() => navigation.goBack()}
          name="arrow-back-outline"
          size={28}
          color="white"
        />
        <Text style={styles.title}>Choose an Option</Text>
        {/* <Text>{ AsyncStorage.getItem("loggedName")}</Text> */}
      </View>

      <View style={styles.middleContainer}>
        <Pressable
          onPress={() => handleSelectOption("exercise")}
          style={styles.card}
        >
          <Image
            source={require("../assets/exercisenew.jpg")}
            style={styles.image}
          />
          <Text style={styles.cardText}>Workout Plans</Text>
        </Pressable>
        <Pressable
          onPress={() => handleSelectOption("nutrition")}
          style={styles.card}
        >
          <Image
            source={require("../assets/nutrition.jpg")}
            style={styles.image}
          />
          <Text style={styles.cardText}>Nutrition Plans</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#007bff", // Header background color
    padding: 10,
  },
  title: {
    flex: 1, // Take up remaining space
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  middleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    margin: 10,
    padding: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    alignItems: "center",
  },
  image: {
    width: 140,
    height: 140,
    marginBottom: 10,
    borderRadius: 7,
  },
  cardText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SectionScreen;
