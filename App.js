import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import routes from './src/navigation/routes';
import './src/navigation/routes.types';
import { Text, StyleSheet, View, StatusBar } from 'react-native';
import {
  COLOR_GREY2,
  COLOR_PRIMARY,
  COLOR_GREY,
  COLOR_GREY3,
} from './src/common/constants/colors';
import { scale, height, normalizeFont } from './src/common/constants/style';
import Feather from 'react-native-vector-icons/Feather';
import { useEffect } from 'react';
import { useState } from 'react';


/**
 * Maps routes from the `routes.js` file to `Stack.Screen` routes.
 * @param {RouteObject[]} _routes - Routes to map to `Stack.Screen` components.
 */
const mapRoutes = (_routes, Navigator) =>
  _routes.map((route) => {
    // SplashScreen.hide();
    const { component, title, subTitle, screen, showBackButton, tabs } = route;
    let Component = component;
    if (tabs) {
      const Tab = createBottomTabNavigator();
      Component = () => (
        <Tab.Navigator
          screenOptions={({ route: { name } }) => ({
            tabBarIcon: ({ color, size }) => {
              const activeTab = tabs.find((tab) => tab.screen === name);
              if (activeTab) {
                const { iconFamily, iconName } = activeTab;
                if (iconFamily === 'Feather') {
                  return <Feather name={iconName} size={size} color={color} />;
                }
                if (iconFamily === 'LightningBoltSmallGrey') {
                  return <LightningBoltSmallGrey color={color} />;
                }
              }
              return null;
            },
          })}
          tabBarOptions={{
            labelStyle:{alignItems:'center', justifyContent: 'center', marginBottom:scale(10),},
            style:{paddingTop:10,height:scale(55),alignItems:'center',justifyContent:'center', borderTopWidth:1,borderTopColor:COLOR_GREY3},
            activeTintColor: COLOR_PRIMARY,
            inactiveTintColor: COLOR_GREY,
          }}>
          {mapRoutes(tabs, Tab)}
        </Tab.Navigator>
      );
    }
    const displayHeader = () => (
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.headerViewStyle}>
          <View style={{ top: scale(-18) }}>
            <Text style={styles.headerTitle}>{title}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.subHeaderTitle}>
              {/* \n is to make all Headers render on the same place even if there is no subTitle */}
              {subTitle ? subTitle : '\n'}
            </Text>
          </View>
        </View>
      </View>
    );

    return (
      <Navigator.Screen
        name={screen}
        component={Component}
        options={{
          headerLeft: showBackButton,
          headerBackTitleVisible: false,
          headerTitle: displayHeader,
          headerLeftContainerStyle: {
            height: scale(70),
            paddingLeft: scale(10),
          },
          headerTitleStyle: styles.headerTitle,
          headerStyle: [
            styles.headerViewStyle,
            { height: title ? scale(104) : 0 },
          ],
          headerTitleAlign: 'center',
        }}
      />
    );
  });

const Stack = createStackNavigator();

/**
 * Entry component into the app;
 */
const App = () => {
  return(
    <>
      <StatusBar hidden={false} backgroundColor="#404041" />
        <NavigationContainer>
          <Stack.Navigator>{mapRoutes(routes, Stack)}</Stack.Navigator>
        </NavigationContainer>
    </>
    )
};

const styles = StyleSheet.create({
  headerViewStyle: {
    alignItems: 'center',
    shadowColor: 'transparent',
    height: '100%',
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      height: scale(0),
    },
  },
  headerTitle: {
    top: 0,
    fontSize: normalizeFont(15.6),
    color: COLOR_GREY2,
  },
  subHeaderTitle: {
    maxWidth: scale(310),
    textAlign: 'center',
    fontSize: normalizeFont(10.5),
    color: COLOR_PRIMARY,
  },
});

export default App;
