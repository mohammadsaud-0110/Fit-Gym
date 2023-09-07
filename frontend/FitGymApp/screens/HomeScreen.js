import React, { useContext, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FitnessItems } from "../Context";
import FitnessCards from "../components/FitnessCards";

const HomeScreen = () => {
  const {
    minutes,
    calories,
    workout,
    completed,
    setMinutes,
    setCalories,
    setWorkout,
    setCompleted,
  } = useContext(FitnessItems);
  const navigation = useNavigation();
  const [isSaving, setIsSaving] = useState(false);
  const [loggedUID, setLoggedUID] = useState(null);

  useEffect(() => {
    const fetchLoggedUID = async () => {
      try {
        const uid = await AsyncStorage.getItem("loggedUID");
        if (uid !== null) {
          setLoggedUID(uid);
        }
      } catch (error) {
        console.error("Error fetching logged UID:", error);
      }
    };

    fetchLoggedUID();
  }, []);

  const handleSaveProgress = () => {
    setIsSaving(true);

    const dataToSave = {
      loggedUID,
      workout,
      calories,
      minutes,
      completed,
    };

    axios
      .post("https://fitgym-backend.onrender.com/activity/create/ ", dataToSave)
      .then((response) => {
        Alert.alert("Progress saved successfully:");
        setIsSaving(false);

        setWorkout(0);
        setCalories(0);
        setMinutes(0);
        setCompleted([]);
      })
      .catch((error) => {
        console.error("Error saving progress:", error);
        setIsSaving(false);
        Alert.alert("Error", "Failed to save progress.");
      });
    // console.log(dataToSave);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Ionicons
          onPress={() => navigation.goBack()}
          name="arrow-back-outline"
          size={28}
          color="white"
        />
        <Text style={styles.infoText}>Current Activity</Text>
        <Image
          source={require("../assets/logo2.png")}
          style={styles.logo}
        />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.infoContainer}>

          <View style={styles.statsContainer}>
            <View style={styles.stat}>
              <Text style={styles.statValue}>{workout}</Text>
              <Text style={styles.statLabel}>WORKOUTS</Text>
            </View>

            <View style={styles.stat}>
              <Text style={styles.statValue}>{calories}</Text>
              <Text style={styles.statLabel}>KCAL</Text>
            </View>

            <View style={styles.stat}>
              <Text style={styles.statValue}>{minutes}</Text>
              <Text style={styles.statLabel}>MINS</Text>
            </View>
          </View>

          <Pressable
            style={[styles.saveButton, isSaving && styles.disabledButton]}
            onPress={handleSaveProgress}
            disabled={isSaving}
          >
            <Text style={styles.saveButtonText}>
              {isSaving ? "Saving..." : "Save Progress"}
            </Text>
          </Pressable>
        </View>

        <FitnessCards />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#007BFF", // Updated background color
    marginTop: 50,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "white", // Updated background color for the logo
  },
  content: {
    flex: 1,
  },
  infoContainer: {
    backgroundColor: "#0056b3", // Updated background color (a shade of blue)
    padding: 10,
    minHeight: 150,
  },
  infoText: {
    color: "white", // Updated text color
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  statsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  stat: {
    flex: 1,
    alignItems: "center",
  },
  statValue: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    fontSize: 18,
  },
  statLabel: {
    color: "#D0D0D0",
    fontSize: 17,
    marginTop: 6,
  },
  saveButton: {
    backgroundColor: "#4caf50", // Updated button color (green shade)
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  disabledButton: {
    backgroundColor: "gray",
  },
  saveButtonText: {
    color: "white",
    textAlign: "center",
  },
});

export default HomeScreen;
