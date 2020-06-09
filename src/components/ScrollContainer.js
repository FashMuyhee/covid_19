import React from 'react';
import {StyleSheet, ScrollView, RefreshControl} from 'react-native';
import {useTheme} from '@ui-kitten/components';

const ScrollContainer = ({children, customStyle, refreshing, onRefresh}) => {
  const style = {...styles.container, ...customStyle};
  const theme = useTheme();

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          color={theme['color-primary-400']}
          enabled
          progressBackgroundColor="white"
        />
      }
      style={style}>
      {children}
    </ScrollView>
  );
};

export default ScrollContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: '5%',
    paddingRight: '5%',
    backgroundColor: 'white',
  },
});
