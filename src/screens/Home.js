/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  Layout,
  Button,
  StyleService,
  useStyleSheet,
  useTheme,
} from '@ui-kitten/components';
import {ScrollContainer, Box} from '../components';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Image} from 'react-native';
import sick from '../assets/img/sick.png';
import symptoms from '../assets/img/symptoms.png';
import cases from '../assets/img/case.png';
import prevention from '../assets/img/prevention.png';

const HomeScreen = ({navigation}) => {
  const styles = useStyleSheet(themedStyles);
  const theme = useTheme();
  return (
    <ScrollContainer style={styles.container}>
      <Layout style={styles.headerText}>
        <Text category="h5">Covid-19</Text>
        <Text category="h3">Virus Tracking</Text>
      </Layout>
      <Box customStyle={styles.card}>
        <Layout style={{backgroundColor: 'transparent', width: wp('50%')}}>
          <Text category="h4" style={{...styles.text, textAlign: 'left'}}>
            What To Do if You're Sick ?
          </Text>
          <Text style={{...styles.text, textAlign: 'left'}}>
            {' '}
            Please Stay at HOME
          </Text>
        </Layout>
        <Image
          source={sick}
          style={{
            height: hp('30%'),
            width: wp('30%'),
            marginBottom: hp('5.6%'),
          }}
        />
      </Box>
      <Layout style={styles.cards2}>
        <Box
          customStyle={{
            ...styles.box,
            backgroundColor: theme['color-primary-200'],
            marginRight: wp('7%'),
          }}
          onPress={() => navigation.navigate('symptoms')}>
          <Image source={symptoms} style={styles.image} />
          <Text
            category="h5"
            style={{
              ...styles.text,
              bottom: 10,
              alignSelf: 'center',
              position: 'absolute',
            }}>
            Symptoms
          </Text>
        </Box>
        <Box
          customStyle={{
            ...styles.box,
            backgroundColor: theme['color-danger-400'],
          }}
          onPress={() => navigation.navigate('prevention')}>
          <Image source={prevention} style={styles.image} />
          <Text
            category="h5"
            style={{
              ...styles.text,
              bottom: 10,
              alignSelf: 'center',
              position: 'absolute',
            }}>
            Prevent Getting Sick
          </Text>
        </Box>
        {/*  <Box
          customStyle={{
            ...styles.box,
            backgroundColor: theme['color-info-400'],
          }}>
          <Image
            source={symptoms}
            style={styles.image}
          />
          <Text
            category="h5"
            style={{
              ...styles.text,
              bottom: 10,
              alignSelf: 'center',
              position: 'absolute',
            }}>
            Exit
          </Text>
        </Box> */}
      </Layout>
      <Box
        customStyle={{
          backgroundColor: theme['color-warning-400'],
          marginBottom: 10,
        }}
        onPress={() => navigation.navigate('cases')}>
        <Image source={cases} style={styles.image} />
        <Text
          category="h5"
          style={{
            ...styles.text,
            bottom: 10,
            alignSelf: 'center',
            position: 'absolute',
          }}>
          Cases and latest update
        </Text>
      </Box>
    </ScrollContainer>
  );
};

export default HomeScreen;

const themedStyles = StyleService.create({
  container: {},
  headerText: {
    height: hp('15%'),
    marginTop: hp('6%'),
  },
  card: {
    backgroundColor: 'color-primary-600',
    display: 'flex',
    flexDirection: 'row',
    justifyItems: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: 'color-basic-100',
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  btn: {
    width: wp('30%'),
    height: 30,
    paddingLeft: 0,
    paddingRight: 0,
    marginTop: 5,
  },
  cards2: {
    marginTop: '15%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    flex: 1,
    width: wp('100%'),
    flexWrap: 'wrap',
  },
  box: {
    width: wp('42%'),
    height: hp('20%'),
    marginBottom: hp('10%'),
  },
  image: {
    height: hp('15%'),
    width: wp('25%'),
    bottom: hp('12%'),
    position: 'absolute',
    alignSelf: 'center',
  },
});
