/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  Layout,
  StyleService,
  useStyleSheet,
  useTheme,
} from '@ui-kitten/components';
import {ScrollContainer, Box, Chip} from '../components';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Image} from 'react-native';

const SymptomsScreen = ({navigation}) => {
  const styles = useStyleSheet(themedStyles);
  const theme = useTheme();

  return (
    <ScrollContainer style={styles.container}>
      <Layout style={styles.headerText}>
        <Text category="h5">Virus Tracking</Text>
        <Text category="h3">Symptoms</Text>
      </Layout>
      <Layout style={styles.content}>
        <Box customStyle={styles.box}>
          <Layout style={{backgroundColor: 'transparent', width: wp('53%')}}>
            <Text category="h6" style={{...styles.text, textAlign: 'left'}}>
              People may get sick with the VIRUS for 1 to 14 days before
              developing any Symptoms
            </Text>
          </Layout>
          <Image
            source={require('../assets/img/doc.png')}
            style={{
              height: hp('30%'),
              width: wp('30%'),
              marginBottom: hp('4%'),
            }}
          />
        </Box>
        <Text
          style={{color: theme['color-info-500'], marginTop: hp('6%')}}
          category="h5">
          Symptoms of COVID-19
        </Text>
        <Layout style={styles.symptoms}>
          <Chip>Fever</Chip>
          <Chip outline>Head Ache</Chip>
          <Chip>Sore Throat</Chip>
          <Chip outline>Cough</Chip>
          <Chip>Fatigue</Chip>
          <Chip outline>Running Nose</Chip>
          <Chip>Sneezing</Chip>
        </Layout>
      </Layout>
    </ScrollContainer>
  );
};

export default SymptomsScreen;

const themedStyles = StyleService.create({
  container: {
    height: '100%',
  },
  headerText: {
    height: hp('13%'),
    marginTop: hp('6%'),
  },
  text: {
    color: 'color-basic-100',
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  box: {
    backgroundColor: 'color-primary-600',
    display: 'flex',
    flexDirection: 'row',
    justifyItems: 'space-between',
    alignItems: 'center',
  },
  content: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
  },
  image: {
    width: wp('56%'),
    height: hp('40%'),
    // marginBottom: hp('10%'),
    alignSelf: 'center',
  },
  symptoms: {
    marginTop: hp('3%'),
    marginBottom: hp('1%'),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    // width: wp('100%'),
    flexWrap: 'wrap',
  },
});
