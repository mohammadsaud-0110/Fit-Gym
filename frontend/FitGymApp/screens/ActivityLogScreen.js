import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons
import { useNavigation } from "@react-navigation/native";

const ActivityLogScreen = () => {
  const navigation = useNavigation();
  const [activityLog, setActivityLog] = useState([]);
  const [loggedUID, setLoggedUID] = useState('');

  const fetchData = () => {
    AsyncStorage.getItem('loggedUID')
      .then((storedUID) => {
        if (storedUID !== null) {
          setLoggedUID(storedUID);
          return axios.get(`https://fitgym-backend.onrender.com/all/activity/`);
        }
      })
      .then((response) => {
        if (response) {
          const logData = response.data.map((logItem) => ({
            ...logItem,
            completed: JSON.parse(logItem.completed),
          }));
          const newData = logData.filter((ele)=>{
            return ele.userId == loggedUID
          })
          setActivityLog(newData);
        }
      })
      .catch((error) => {
        console.error("Error fetching activity log:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []); // Fetch data when component mounts

  const handleRefresh = () => {
    fetchData(); // Trigger fetch again
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          onPress={() => navigation.goBack()}
          style={styles.backIcon}
          name="arrow-back-outline"
          size={33}
          color="black"
        />
        <Text style={styles.title}>Workout Report</Text>
        <Pressable style={styles.refreshButton} onPress={handleRefresh}>
          <Text style={styles.refreshButtonText}>Refresh</Text>
        </Pressable>
      </View>
      <ScrollView>
        <View style={styles.content}>
          {activityLog.map((logItem, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.cardText}>Number of Workout Done: {logItem.workout}</Text>
              <Text style={styles.cardText}>Calories burned: {logItem.calories}</Text>
              <Text style={styles.cardText}>Duration of workout: {logItem.minutes} minutes</Text>
              {Array.isArray(logItem.completed) && (
                <View style={styles.completedContainer}>
                  <Text style={styles.completedText}>Completed:</Text>
                  <Text style={styles.completedList}>
                    {logItem.completed.map((exercise, exerciseIndex) => (
                      <Text key={exerciseIndex} style={styles.completedListItem}>{exercise}, </Text>
                    ))}
                  </Text>
                </View>
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    marginTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  backIcon: {
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    textAlign: 'center',
  },
  content: {
    padding: 20,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 5,
  },
  completedContainer: {
    marginTop: 10,
  },
  completedText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  completedList: {
    marginTop: 5,
  },
  completedListItem: {
    fontSize: 14,
    marginLeft: 15,
    marginBottom: 5,
  },
  refreshButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    margin: 10,
    alignSelf: "flex-end",
  },
  refreshButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ActivityLogScreen;
