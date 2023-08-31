import { StyleSheet, Text, View, SafeAreaView, Image,ScrollView } from "react-native";
import React ,{useContext} from "react";
import FitnessCards from "../components/FitnessCards";
import { FitnessItems } from "../Context";
import fitnessData from "../data/fitness";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const HomeScreen = () => {
  
  const {
   
    minutes,
  
    calories,

    workout,
  } = useContext(FitnessItems);

  const navigation = useNavigation();
  return (
    <ScrollView style={{marginTop:40}}>
      <Ionicons
          onPress={() => navigation.goBack()}
          style={{ position: "absolute", top: 50, left: 50 }}
          name="arrow-back-outline"
          size={28}
          color="black"
        />

        
      <View
        style={{
          backgroundColor: "red",
          padding: 10,
          height: 200,
          width: "100%",
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
          ProFit
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 18,
              }}
            >
              {workout}
            </Text>
            <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 6 }}>
              WORKOUTS
            </Text>
          </View>

          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 18,
              }}
            >
              {calories}
            </Text>
            <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 6 }}>
              KCAL
            </Text>
          </View>

          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 18,
              }}
            >
              {minutes}
            </Text>
            <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 6 }}>
              MINS
            </Text>
          </View>
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            style={{
              width: "95%",
              height: 200,
              marginTop: 20,
              borderRadius: 7,
              
            }}
            source={{
              uri: "https://t3.ftcdn.net/jpg/00/90/21/22/360_F_90212267_soThMAr7ZpdkWSN4fjoW6wLR6zDjc4kK.jpg",
            }}
          />
        </View>
        <FitnessCards  />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
