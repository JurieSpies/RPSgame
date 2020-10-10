import React, { useState } from 'react';
import { ImageBackground, View,Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './GameOn.style';


const GameOn = ({route}) => {
  
  const nav = useNavigation();

  const { userWeaponChoice } = route.params;
  
  const [state, setState] = useState({
    example: '',
  });
  const { example } = state;

  

  return (
    <View style={styles.mainContainer}>
      <ImageBackground style={styles.backgroundImage}>
      <Text  style={{fontSize:20}}>My Settings Page</Text>
      <TouchableOpacity onPress={() => nav.navigate('Home')}>
        <Text>Go to Home Page</Text>
      </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default GameOn;