import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  HomeScreen,
  LandingScreen,
  SymptomsScreen,
  PreventionScreen,
} from '../screens';

const Stack = createStackNavigator();

export const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none" initialRouteName="prevention">
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="landing" component={LandingScreen} />
      <Stack.Screen name="symptoms" component={SymptomsScreen} />
      <Stack.Screen name="prevention" component={PreventionScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
