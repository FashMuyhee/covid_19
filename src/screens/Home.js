import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, Layout, Button} from '@ui-kitten/components';

const HomeScreen = ({navigation}) => {
  return (
    <Layout style={styles.container}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.goBack()}>Back</Button>
    </Layout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
