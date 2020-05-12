import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, LandingScreen} from '../screens';

const Stack = createStackNavigator();

export const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none" initialRouteName="landing">
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="landing" component={LandingScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
