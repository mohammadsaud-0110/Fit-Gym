import React from "react";
import { View, Text, Image, Pressable, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const SectionScreen = ({ navigation }) => {
  const handleSelectOption = (option) => {
    if (option === "exercise") {
      navigation.navigate("Home");
    } else if (option === "nutrition") {
      navigation.navigate("Nutrition");
    } else if (option === "diet") {
      navigation.navigate("Diet");
    } else if (option === "goal") {
      navigation.navigate("GoalList");
    } else if (option === "activity") {
      navigation.navigate("Activity");
    } else if (option === "logout") {
      navigation.navigate("Logout");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/logo2.png')}
          style={styles.logo}
        />
      </View>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.cardContainer}>
          <Pressable onPress={() => handleSelectOption("exercise")} style={styles.card}>
            <View style={styles.cardContent}>
              <Text style={styles.cardText}>Workout Plans</Text>
              <Image source={require("../assets/exercisenew.jpg")} style={styles.image} />
            </View>
          </Pressable>
          <Pressable onPress={() => handleSelectOption("nutrition")} style={styles.card}>
            <View style={styles.cardContent}>
              <Text style={styles.cardText}>Nutrition Plans</Text>
              <Image source={require("../assets/nutrition.jpg")} style={styles.image} />
            </View>
          </Pressable>
          <Pressable onPress={() => handleSelectOption("diet")} style={styles.card}>
            <View style={styles.cardContent}>
              <Text style={styles.cardText}>General Diet Plans</Text>
              <Image source={require("../assets/14-days-.jpg")} style={styles.image} />
            </View>
          </Pressable>
          <Pressable onPress={() => handleSelectOption("goal")} style={styles.card}>
            <View style={styles.cardContent}>
              <Text style={styles.cardText}>Set Goals</Text>
              <Image source={require("../assets/goals.jpg")} style={styles.image} />
            </View>
          </Pressable>
          <Pressable onPress={() => handleSelectOption("activity")} style={styles.card}>
            <View style={styles.cardContent}>
              <Text style={styles.cardText}>Activity Log</Text>
              <Image source={require("../assets/logo-200.png")}
                style={{ width: 110, height: 110, marginRight: 10, borderRadius: 60, }} />
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#007BFF",
    paddingTop: 30,
    paddingBottom: 10,
    marginTop:50,
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 50,
    marginBottom: 20,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  card: {
    width: "45%",
    maxWidth: 300,
    margin: 10,
    padding: 20,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    elevation: 3,
  },
  cardContent: {
    alignItems: "center",
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 10,
    borderRadius: 60,
  },
  cardText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});

export default SectionScreen;
