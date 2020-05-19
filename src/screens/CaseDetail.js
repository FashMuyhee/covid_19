/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Text,
  Layout,
  StyleService,
  useStyleSheet,
  useTheme,
  Icon,
  Radio,
  Button,
} from '@ui-kitten/components';
import {ScrollContainer, Box} from '../components';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const CaseDetailScreen = () => {
  const currentDate = new Date().toDateString();
  const styles = useStyleSheet(themedStyles);
  const theme = useTheme();
  const [state] = useState({
    location: 'nigeria',
    cases: [],
  });
  const {location, cases} = state;

  const locationIcon = (props) => {
    return <Icon {...props} name="pin" />;
  };

  return (
    <ScrollContainer style={styles.container}>
      <Layout style={styles.headerText}>
        <Text category="h5">Covid-19</Text>
        <Text category="h5">Nigeria : Case Detail</Text>
      </Layout>

      <Box customStyle={styles.case}>
        <Box customStyle={styles.caseBox}>
          <Radio checked={true} status="warning" />
          <Text style={styles.boxText} category="h3" status="warning">
            693494
          </Text>
          <Text style={styles.boxText}>Total Case</Text>
        </Box>
        <Box customStyle={styles.caseBox}>
          <Radio checked={true} status="success" />
          <Text style={styles.boxText} category="h3" status="success">
            6700
          </Text>
          <Text style={styles.boxText}>Recovered Case</Text>
        </Box>
        <Box customStyle={styles.caseBox}>
          <Radio checked={true} status="danger" />
          <Text style={styles.boxText} category="h3" status="danger">
            12
          </Text>
          <Text style={styles.boxText}>Death Case</Text>
        </Box>
      </Box>
      <Layout>
        <Text category="h5">State Summary</Text>
        <Text appearance="hint">{currentDate}</Text>
      </Layout>
    </ScrollContainer>
  );
};

export default CaseDetailScreen;

const themedStyles = StyleService.create({
  container: {},
  headerText: {
    height: hp('15%'),
    marginTop: hp('6%'),
  },
  case: {
    // backgroundColor: 'color-primary-200',
    borderColor: 'color-primary-200',
    marginBottom: hp(5),
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: '0%',
    paddingRight: '0%',
    paddingTop: '0%',
    paddingBottom: '0%',
    // borderWidth: 0,
  },
  caseBox: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    width: wp(26),
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '0%',
    paddingRight: '0%',
    paddingTop: '0%',
    paddingBottom: '0%',
  },
  boxText: {
    textAlign: 'center',
  },
});
