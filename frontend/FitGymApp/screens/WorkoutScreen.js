import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { FitnessItems } from "../Context";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const WorkOutScreen = () => {
  const navigation = useNavigation();
  const { completed, setCompleted } = useContext(FitnessItems);
  const [exercises, setExercises] = useState([]);
  const [selectedFitnessId, setSelectedFitnessId] = useState(null);

  useEffect(() => {
    async function fetchExercises() {
      try {
        const storedId = await AsyncStorage.getItem('selectedFitnessId');
        setSelectedFitnessId(storedId);
          // console.log(storedId);
        const response = await axios.get("https://fitgym-backend.onrender.com/all/exercise/"); // Replace with your API endpoint
        const data = response.data;

        // Filter exercises based on the selected fitness ID (workoutId)
        const filteredExercises = data.filter((exercise) => exercise.workoutId == storedId);
        setExercises(filteredExercises);
      } catch (error) {
        console.error("Error fetching exercises data:", error);
      }
    }

    fetchExercises();
  }, []);

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: "white", marginTop: 50 }}
      >
        {/* <Image
          style={{ width: "100%", height: 170 }}
          source={{ uri: "YOUR_WORKOUT_IMAGE_URL_HERE" }}
        /> */}

        <Ionicons
          onPress={() => navigation.goBack()}
          style={{ position: "absolute", top: 20, left: 20 }}
          name="arrow-back-outline"
          size={28}
          color="white"
        />

        {exercises.map((item, index) => (
          <Pressable
            style={{ margin: 10, flexDirection: "row", alignItems: "center" }}
            key={index}
          >
            <Image
              style={{ width: 100, height: 100 }}
              source={{ uri: item.image }}
            />

            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 20, fontWeight: "bold", width: 200 }}>
                {item.name}
              </Text>

              <Text style={{ marginTop: 4, fontSize: 20, color: "gray" }}>
                Sets: {item.sets}, Reps: {item.reps}
              </Text>
            </View>

            {completed.includes(item.name) ? (
              <AntDesign
                style={{ marginLeft: 40 }}
                name="checkcircle"
                size={24}
                color="green"
              />
            ) : null}
          </Pressable>
        ))}
      </ScrollView>

      <Pressable
        onPress={() => {
          navigation.navigate("Fit", {
            exercises: exercises,
          });
          setCompleted([]);
        }}
        style={{
          backgroundColor: "blue",
          padding: 10,
          marginLeft: "auto",
          marginRight: "auto",
          marginVertical: 20,
          width: 150,
          borderRadius: 6,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 25,
            fontWeight: "600",
          }}
        >
          START
        </Text>
      </Pressable>
    </>
  );
};

export default WorkOutScreen;

const styles = StyleSheet.create({});
