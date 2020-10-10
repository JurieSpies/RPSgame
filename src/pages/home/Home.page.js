import React, { useState } from "react";
import { ImageBackground, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./Home.style";

const Home = () => {
  const [state, setState] = useState({
    example: "",
  });
  const { example } = state;

  const nav = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <View>
        <Text style={styles.welcomeText}>MAKE A CHOICE</Text>
      </View>
      <View style={styles.weaponView}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("UserWeaponPage", {
              userWeaponChoice: "ROCK",
            });
          }}
        >
          <Text style={styles.navigateText}>ROCK</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("UserWeaponPage", {
              userWeaponChoice: "PAPER",
            });
          }}
        >
          <Text style={styles.navigateText}>PAPER</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("UserWeaponPage", {
              userWeaponChoice: "SCISSORS",
            });
          }}
        >
          <Text style={styles.navigateText}>SCISSORS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
