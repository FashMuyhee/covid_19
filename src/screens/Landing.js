/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {
  Text,
  Layout,
  useTheme,
  Button,
  StyleService,
  useStyleSheet,
  Icon,
} from '@ui-kitten/components';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Container} from '../components';

const LandingScreen = ({navigation}) => {
  const styles = useStyleSheet(themedStyles);
  const infiniteAnimationIconRef = React.useRef();
  const theme = useTheme();

  React.useEffect(() => {
    infiniteAnimationIconRef.current.startAnimation();
  }, []);

  const ArrowIcon = () => (
    <Icon
      ref={infiniteAnimationIconRef}
      animationConfig={{cycles: Infinity}}
      animation="shake"
      name="arrow-ios-forward"
      fill={theme['color-basic-400']}
      style={styles.icon}
    />
  );

  return (
    <Container customStyle={styles.container}>
      <Image source={require('../assets/img/img1.png')} style={styles.image} />
      <Text style={styles.text}>What You Need To Know About</Text>
      <Text
        style={{...styles.text, marginTop: 10, marginBottom: 10}}
        category="h1">
        CORONAVIRUS (COVID19)
      </Text>

      <Button
        onPress={() => navigation.navigate('home')}
        appearance="ghost"
        accessoryLeft={ArrowIcon}
        style={styles.button}
      />
    </Container>
  );
};

export default LandingScreen;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'color-primary-default',
  },
  image: {
    width: wp('70%'),
    height: hp('45%'),
    alignSelf: 'center',
  },
  text: {
    fontSize: hp('6%'),
    textAlign: 'center',
    color: 'color-basic-default',
  },
  buttons: {
    marginTop: 25,
    width: '50%',
    alignSelf: 'center',
  },
  icon: {
    width: 27,
    height: 27,
  },
});
