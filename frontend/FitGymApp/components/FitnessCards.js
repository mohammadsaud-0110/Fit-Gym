import { StyleSheet, Text, View, Pressable, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FitnessCards = () => {
  const [fitnessData, setFitnessData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    // Make an Axios GET request to fetch fitness data from your API or server
    axios.get("https://fitgym-backend.onrender.com/all/workoutplans/")
      .then((response) => {
        // Assuming the response data is an array of fitness objects
        setFitnessData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching fitness data:", error);
      });
  }, []); // The empty dependency array ensures this effect runs once when the component mounts

  const storeSelectedFitnessId = async (id) => {
    try {
      await AsyncStorage.setItem('selectedFitnessId', id.toString());
    } catch (error) {
      console.error("Error storing selected fitness ID:", error);
    }
  };

  return (
    <View>
      {fitnessData.map((item, key) => (
        <Pressable
          onPress={() => {
            storeSelectedFitnessId(item.id); // Store the clicked fitness data's ID
            navigation.navigate("Workout", {
              // Pass any other data you need to the WorkoutScreen
            });
          }}
          style={{ alignItems: "center", justifyContent: "center", margin: 15 }}
          key={key}
        >
          <Image
            style={{ width: "100%", height: 180, borderRadius: 7 }}
            source={{ uri: item.image }}
          />
          <Text
            style={{
              position: "absolute",
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
              left: 20,
              top: 20,
            }}
          >
            {item.name}
          </Text>
          <MaterialCommunityIcons
            style={{ position: "absolute", color: "white", bottom: 15, left: 20 }}
            name="lightning-bolt"
            size={24}
            color="black"
          />
        </Pressable>
      ))}
    </View>
  );
};

export default FitnessCards;

const styles = StyleSheet.create({});
