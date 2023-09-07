import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, Pressable } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FitnessItems } from "../Context";

const FitScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const exercises = route.params.exercises;

  const current = exercises.length > 0 && index < exercises.length ? exercises[index] : null;

  const {
    completed,
    setCompleted,
    minutes,
    setMinutes,
    calories,
    setCalories,
    setWorkout,
    workout,
  } = useContext(FitnessItems);

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 60 }}>
      {current ? (
        <>
          <Image style={{ width: "100%", height: 300 }} source={{ uri: current.image }} />
          <Text style={{ marginLeft: "auto", marginRight: "auto", marginTop: 30, fontSize: 30, fontWeight: "bold" }}>{current.name}</Text>
          <Text style={{ marginLeft: "auto", marginRight: "auto", marginTop: 30, fontSize: 38, fontWeight: "bold" }}>x{current.sets}</Text>
          {index + 1 >= exercises.length ? (
            <Pressable
              onPress={() => {
                navigation.navigate("Home");
              }}
              style={{
                backgroundColor: "blue",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: 30,
                borderRadius: 20,
                padding: 10,
                width: 150,
              }}
            >
              <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 20, color: "white" }}>DONE</Text>
            </Pressable>
          ) : (
            <Pressable
              onPress={() => {
                navigation.navigate("Rest");
                setCompleted([...completed, current.name]);
                setWorkout(workout + 1);
                setMinutes(minutes + 2.5);
                setCalories(calories + 6.3);
                setTimeout(() => {
                  setIndex(index + 1);
                }, 2000);
              }}
              style={{
                backgroundColor: "blue",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: 30,
                borderRadius: 20,
                padding: 10,
                width: 150,
              }}
            >
              <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 20, color: "white" }}>DONE</Text>
            </Pressable>
          )}
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 50,
            }}
          >
            <Pressable
              disabled={index === 0}
              onPress={() => {
                navigation.navigate("Rest");

                setTimeout(() => {
                  setIndex(index - 1);
                }, 2000);
              }}
              style={{
                backgroundColor: "green",
                padding: 10,
                borderRadius: 20,
                marginHorizontal: 20,
                width: 100,
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold", textAlign: "center" }}>PREV</Text>
            </Pressable>
            {index + 1 >= exercises.length ? (
              <Pressable
                onPress={() => {
                  navigation.navigate("Home");
                }}
                style={{
                  backgroundColor: "green",
                  padding: 10,
                  borderRadius: 20,
                  marginHorizontal: 20,
                  width: 100,
                }}
              >
                <Text style={{ color: "white", fontWeight: "bold", textAlign: "center" }}>SKIP</Text>
              </Pressable>
            ) : (
              <Pressable
                onPress={() => {
                  navigation.navigate("Rest");

                  setTimeout(() => {
                    setIndex(index + 1);
                  }, 2000);
                }}
                style={{
                  backgroundColor: "green",
                  padding: 10,
                  borderRadius: 20,
                  marginHorizontal: 20,
                  width: 100,
                }}
              >
                <Text style={{ color: "white", fontWeight: "bold", textAlign: "center" }}>SKIP</Text>
              </Pressable>
            )}
          </Pressable>
        </>
      ) : (
        <Text style={{ textAlign: "center", marginTop: 20, fontSize: 20 }}>No exercise data available.</Text>
      )}
    </SafeAreaView>
  );
};

export default FitScreen;

const styles = StyleSheet.create({});
