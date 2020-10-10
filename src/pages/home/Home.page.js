import React, { useState } from "react";
import { ImageBackground, View, Text, TouchableOpacity } from "react-native";
import styles from "./Home.style";
import { useNavigation } from "@react-navigation/native";


const Home = () => {
  
  const [state, setState] = useState({
    example: "",
  });
  const { example } = state;

  const nav = useNavigation()

  return (
    <View style={styles.mainContainer}>
      <View>
        <Text style={styles.welcomeText}>MAKE A CHOICE</Text>
      </View>
      <View style={styles.weaponView}>
        <TouchableOpacity
          onPress={() => nav.navigate('GameOn', { userWeaponChoice: "ROCK" })}>
          <Text style={styles.navigateText}>ROCK</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => nav.navigate('GameOn', { userWeaponChoice: "PAPER" })}>
          <Text style={styles.navigateText}>PAPER</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => nav.navigate('GameOn', { userWeaponChoice: "SCISSORS" })}>
          <Text style={styles.navigateText}>SCISSORS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
