import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const RestScreen = () => {
  const navigation = useNavigation();
  let timer = 0;
  const [timeLeft, setTimeLeft] = useState(3);

  const startTime = () => {
    setTimeout(() => {
      if (timeLeft <= 0) {
        navigation.goBack();
        clearTimeout(timer);
      }
      setTimeLeft(timeLeft - 1);
    }, 1000);
  };
  useEffect(() => {
    startTime();
    //clean up
    return () => clearTimeout(timer);
  });
  return (
    <SafeAreaView style={{ marginTop: 60 }}>
      <Image
        resizeMode="contain"
        source={{
          uri: "https://i.gifer.com/7kvp.gif",
        }}
        style={{ width: "100%", height: 420 }}
      />

      <Text
        style={{
          fontSize: 30,
          fontWeight: "900",
          marginTop: 50,
          textAlign: "center",
        }}
      >
        TAKE A BREAK! 
      </Text>

      <Text
        style={{
          fontSize: 40,
          fontWeight: "800",
          marginTop: 50,
          textAlign: "center",
        }}
      >
        {timeLeft}
      </Text>

      <Text
        style={{
          fontSize: 15,
          fontWeight: "900",
          marginTop: 50,
          textAlign: "center",
        }}
      > 'usually 30 - 60 seconds' </Text>

    </SafeAreaView>
  );
};

export default RestScreen;

const styles = StyleSheet.create({});
