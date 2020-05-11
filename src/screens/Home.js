import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, Layout} from '@ui-kitten/components';

const HomeScreen = () => {
  return (
    <Layout style={styles.container}>
      <Text>Home Screen</Text>
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
