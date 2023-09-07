import React from "react";
import { View, Text, Image, Pressable, StyleSheet, ScrollView } from "react-native";

const TrainerSectionScreen = ({ navigation }) => {
  const handleSelectOption = (option) => {
    if (option === "woform") {
      navigation.navigate("WorkoutForm");
    } else if (option === "nutritionform") {
      navigation.navigate("NutritionPlan");
    } else if (option === "logout") {
      navigation.navigate("Logout");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/logo2.png')}
          style={styles.logo}
        />
        {/* <Text style={styles.title}>ProFit</Text> */}
      </View>
      <View style={styles.cardContainer}>
        <Pressable onPress={() => handleSelectOption("woform")} style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.cardText}>Add Workout</Text>
            <Image source={require("../assets/download.jpeg")} style={styles.image} />
          </View>
        </Pressable>
        <Pressable onPress={() => handleSelectOption("nutritionform")} style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.cardText}>Add Nutrition</Text>
            <Image source={require("../assets/download2.png")} style={styles.image} />
          </View>
        </Pressable>
        <Pressable onPress={() => handleSelectOption("logout")} style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.cardText}>Logout</Text>
            <Image source={require("../assets/logout.png")} style={styles.image} />
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  cardContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  card: {
    width: "100%",
    maxWidth: 300,
    margin: 10,
    padding: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 120,
    height: 120,
    marginRight: 10,
    borderRadius: 60, // Makes it a rounded image
  },
  cardText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  logoContainer: {
    alignItems: "center", // Center horizontally
    marginTop: 30,
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 50,
    marginBottom: 20,
  },
});

export default TrainerSectionScreen;
