import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens';

const Stack = createStackNavigator();

export const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none" initialRouteName="home">
      <Stack.Screen name="home" component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
