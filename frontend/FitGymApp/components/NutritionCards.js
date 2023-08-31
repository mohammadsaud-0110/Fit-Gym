import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const NutritionCard = ({ route }) => {
  const { exercise } = route.params;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Ionicons
        onPress={() => navigation.goBack()}
        style={styles.backIcon}
        name="arrow-back-outline"
        size={28}
        color="black"
      />

      <View style={styles.content}>
        <Text style={styles.heading}>{exercise.exerciseName}</Text>

        <ScrollView style={styles.scrollView}>
          {exercise.nutritionItems.map((nutritionInfo, index) => (
            <View key={index} style={styles.nutritionItemContainer}>
              <View style={styles.imageContainer}>
                <Image source={{ uri: nutritionInfo.image }} style={styles.nutritionImage} />
              </View>
              <View style={styles.detailsContainer}>
                <Text style={styles.nutritionName}>{nutritionInfo.name}</Text>
                <Text style={styles.nutritionDetail}>Calories: {nutritionInfo.calories} cal</Text>
                <Text style={styles.nutritionDetail}>Protein: {nutritionInfo.protein} g</Text>
                <Text style={styles.nutritionDetail}>Carbs: {nutritionInfo.carbs} g</Text>
                <Text style={styles.nutritionDetail}>Fats: {nutritionInfo.fats} g</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  backIcon: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  content: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: "#f5f5f5", // Background color for the content area
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  nutritionItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    overflow: "hidden", // Clip content within rounded corners
  },
  imageContainer: {
    width: "40%",
  },
  detailsContainer: {
    width: "60%",
    padding: 10,
  },
  nutritionImage: {
    width: "100%",
    height: 240,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 10,
  },
  nutritionName: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },
  nutritionDetail: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default NutritionCard;
