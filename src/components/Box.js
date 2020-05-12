import React from 'react';
import {StyleSheet} from 'react-native';
import {Layout, StyleService, useStyleSheet} from '@ui-kitten/components';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Box = ({children, customStyle}) => {
  const styles = useStyleSheet(themedStyles);
  const style = {...styles.container, ...customStyle};

  return <Layout style={style}>{children}</Layout>;
};

export default Box;

const themedStyles = StyleService.create({
  container: {
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingTop: '5%',
    paddingBottom: '5%',
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'background-basic-color-4',
    height: hp('25%'),
  },
});
