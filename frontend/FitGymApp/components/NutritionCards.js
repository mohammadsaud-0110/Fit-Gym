import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";

const NutritionCard = () => {
  const [foodItems, setFoodItems] = useState([]);
  const navigation = useNavigation();
  const route = useRoute();
  const selectedId = route.params.selectedId;

  useEffect(() => {
    // Make an Axios GET request to fetch food items data from your API or server
    axios.get("https://fitgym-backend.onrender.com/all/food/")
      .then((response) => {
        // Assuming the response data is an array of food items
        // Filter the data to include only items with matching nutritionId
        const filteredItems = response.data.filter((item) => item.nutritionId === selectedId);
        setFoodItems(filteredItems);
      })
      .catch((error) => {
        console.error("Error fetching food items data:", error);
      });
  }, [selectedId]); // Fetch data whenever the selectedId changes

  return (
    <View style={styles.container}>
      <Ionicons
        onPress={() => navigation.goBack()}
        style={styles.backIcon}
        name="arrow-back-outline"
        size={28}
        color="black"
      />

      <ScrollView style={{ marginTop: 50, marginLeft: 10, marginRight: 10, marginBottom: 10  }}>
        {foodItems.map((nutritionInfo, index) => (
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
    top: 20,
    left: 20,
    zIndex: 1,
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
    overflow: "hidden",
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
    height: 200,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    padding:10,
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
