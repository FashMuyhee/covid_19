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

const PreventionScreen = () => {
  const styles = useStyleSheet(themedStyles);
  const theme = useTheme();
  return (
    <ScrollContainer style={styles.container}>
      <Layout style={styles.headerText}>
        <Text category="h5">Virus Tracking</Text>
        <Text category="h3">Preventing Covid-19</Text>
      </Layout>
      <Box customStyle={styles.card}>
        <Layout style={{backgroundColor: 'transparent', width: wp('53%')}}>
          <Text category="h6" style={{...styles.text, textAlign: 'left'}}>
            There is currently no vaccine to prevent this disease.You can
            protect yourself and help prevent the spread if you:
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
      <Layout style={styles.cards2}>
        <Text category="h6">Prevention</Text>
        <Box customStyle={styles.box}>
          <Image
            source={require('../assets/img/wearmask.png')}
            style={styles.image}
          />
          <Text category="h6" style={styles.boxText}>
            Wear Mask
          </Text>
        </Box>
        <Box customStyle={styles.box}>
          <Image
            source={require('../assets/img/cover.png')}
            style={styles.image}
          />
          <Text category="h6" style={styles.boxText}>
            COver nose when coughing or sneezing{' '}
          </Text>
        </Box>
        <Box customStyle={styles.box}>
          <Image
            source={require('../assets/img/washhand.png')}
            style={styles.image}
          />
          <Text category="h6" style={styles.boxText}>
            Wash hands regularly
          </Text>
        </Box>
        <Box customStyle={styles.box}>
          <Image
            source={require('../assets/img/home.png')}
            style={styles.image}
          />
          <Text category="h6" style={styles.boxText}>
            stay home stay safe
          </Text>
        </Box>
      </Layout>
    </ScrollContainer>
  );
};

export default PreventionScreen;

const themedStyles = StyleService.create({
  container: {},
  headerText: {
    height: hp('15%'),
    marginTop: hp('6%'),
  },
  card: {
    backgroundColor: 'color-warning-400',
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
  cards2: {
    marginTop: '5%',
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'space-between',
    // flex: 1,
    // width: '100%',
  },
  box: {
    width: '100%',
    height: hp('15%'),
    marginTop: hp('1.5%'),
    marginBottom: hp('1.5%'),
    backgroundColor: 'color-info-200',
    borderColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  image: {
    height: 60,
    width: 60,
    marginBottom: 0,
    marginTop: -10,
    // position: 'absolute',
  },
  boxText: {
    color: 'color-basic-100',
    textTransform: 'capitalize',
    width: wp('60%'),
    justifyContent: 'center',
  },
});
