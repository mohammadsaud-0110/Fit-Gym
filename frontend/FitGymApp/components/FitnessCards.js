import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import fitness from "../data/fitness";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const FitnessCards = () => {
  const FitnessData = fitness;
  // console.log(FitnessData);
  const navigation = useNavigation();
  return (
    <View>
      {FitnessData.map((item, key) => (
        <Pressable
          onPress={() => navigation.navigate("Workout", {
            image: item.image,
            excersises: item.excersises,
            id: item.id,
          })}
          style={{ alignItems: "center", justifyContent: "center", margin: 15 }}
          key={key}
        >
          <Image
            style={{ width: "100%", height: 180, borderRadius: 7 }}
            source={{uri:item.image}}
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
            {item.description}
          </Text>
          <MaterialCommunityIcons
            style={{ position: "absolute", color: "white", bottom: 15, left: 20 }}
            name="lightning-bolt"
            size={24}
            color="black"
          />
        </Pressable>
      ))}
      {/* <Text>Workout Plan</Text> */}
    </View>
  );
};

export default FitnessCards;

// const styles = StyleSheet.create({});

// Workout Plan model:
// {
//   name: Text,
//   image: Text,
//   goal: Text,
//   duration: Number,
//   description: Text,
//   trainerId: reference to trainer Id who is creating this workout plan [(SELECT * FROM fitgymdb.app_trainer;) this is the table name created by django ] 
// }

// Exercise model:
// {
//   name: Text,
//   image: Text,
//   sets: Number,
//   reps: Number,
//   workoutId: reference to workout plan this exercise belongs to
// }