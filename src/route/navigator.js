import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  HomeScreen,
  LandingScreen,
  SymptomsScreen,
  PreventionScreen,
  CasesScreen,
  CaseDetailScreen,
  ResultScreen,
} from '../screens';

const Stack = createStackNavigator();

export const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none" initialRouteName="landing">
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="landing" component={LandingScreen} />
      <Stack.Screen name="symptoms" component={SymptomsScreen} />
      <Stack.Screen name="prevention" component={PreventionScreen} />
      <Stack.Screen name="cases" component={CasesScreen} />
      <Stack.Screen name="case_detail" component={CaseDetailScreen} />
      <Stack.Screen name="result" component={ResultScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
