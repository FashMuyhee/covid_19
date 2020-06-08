import React, {Suspense, lazy} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  HomeScreen,
  LandingScreen,
  SymptomsScreen,
  PreventionScreen,
  CasesScreen,
  CaseDetailScreen,
  ResultScreen,
} from '../screens';
import {ActivityIndicator} from 'react-native';
import {useTheme, Text} from '@ui-kitten/components';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Container} from '../components';
const Stack = createStackNavigator();
const MoreScreen = lazy(() => import('../screens/More'));

const More = () => {
  const theme = useTheme();
  return (
    <Suspense
      fallback={
        <Container
          customStyle={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          }}>
          <ActivityIndicator
            animate={true}
            size="large"
            color={theme['color-info-400']}
            // style={{marginLeft: wp(43)}}
          />
          <Text status="info">Please Wait</Text>
        </Container>
      }>
      <MoreScreen />
    </Suspense>
  );
};

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="landing">
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="landing" component={LandingScreen} />
        <Stack.Screen name="symptoms" component={SymptomsScreen} />
        <Stack.Screen name="prevention" component={PreventionScreen} />
        <Stack.Screen name="cases" component={CasesScreen} />
        <Stack.Screen name="case_detail" component={CaseDetailScreen} />
        <Stack.Screen name="result" component={ResultScreen} />
        <Stack.Screen name="more" component={More} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
