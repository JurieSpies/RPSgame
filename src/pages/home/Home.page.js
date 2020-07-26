import React, { useState } from 'react';
import { ImageBackground, View,Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Home.style';

const Home = () => {
  const [state, setState] = useState({
    example: '',
  });
  const { example } = state;

  const nav = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <ImageBackground style={styles.backgroundImage}>
      <Text  style={{fontSize:20}}>My Home Page</Text>
      <TouchableOpacity onPress={() => nav.navigate('Settings')}>
        <Text>Go to Settings page</Text>
      </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Home;