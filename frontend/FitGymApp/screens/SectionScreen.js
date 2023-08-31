import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";

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
      <Text style={styles.title}>Choose an Option</Text>
      <View style={styles.cardContainer}>
        <Pressable onPress={() => handleSelectOption("exercise")} style={styles.card}>
          <Image source={require("../assets/exercisenew.jpg")} style={styles.image} />
          <Text style={styles.cardText}>Exercise</Text>
        </Pressable>
        <Pressable onPress={() => handleSelectOption("nutrition")} style={styles.card}>
          <Image source={require("../assets/nutrition.jpg")} style={styles.image} />
          <Text style={styles.cardText}>Nutrition</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: "row",
  },
  card: {
    margin: 10,
    padding: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    alignItems: "center",
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SectionScreen;
