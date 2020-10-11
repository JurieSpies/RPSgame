import React, { useEffect, useState } from 'react';
import { ImageBackground, View,Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './GameOn.style';


const GameOn = ({route}) => {
  
  const nav = useNavigation();

  const { userWeaponChoice } = route.params;
  
  const [state, setState] = useState({
    time: 3,
  });
  const { time } = state;
  
  
  useEffect(() => {
    time === 1 || time === 'VS' ? setTimeout(() => {
      setState({...state, time:'VS'})
  }, 1000)
     : 
    setTimeout(() => {
      setState({...state, time:time -1})
  }, 1000)
    }, [time]);
    
  

  return (
    <View style={styles.mainContainer}>
      <ImageBackground style={styles.backgroundImage}>
      <Text  style={{fontSize:30}}>{userWeaponChoice}</Text>
      <Text  style={{fontSize:30}}>{time}</Text>
      <TouchableOpacity onPress={() => nav.navigate('Home')}>
        <Text>Go to Home Page</Text>
      </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default GameOn;