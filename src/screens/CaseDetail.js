/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  Text,
  Layout,
  StyleService,
  useStyleSheet,
  useTheme,
  Icon,
  Radio,
  Button,
  styled,
} from '@ui-kitten/components';
import {ScrollContainer, Box} from '../components';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {inject, observer} from 'mobx-react';
import {DataTable} from 'react-native-paper';
import {ScrollView} from 'react-native';

const CaseDetailScreen = ({store, route,navigation}) => {
  const currentDate = new Date().toDateString();
  const styles = useStyleSheet(themedStyles);
  const theme = useTheme();
 
  const {g_cases, location} = route.params;

  const closedCase = g_cases.TotalRecovered + g_cases.TotalDeaths;
  const activeCase = g_cases.TotalConfirmed - closedCase;
  
  const itemsPerPage = 7;
  const [page, setPage] = React.useState(0);
  const from = page * itemsPerPage;
  const to = (page + 1) * itemsPerPage;
  

  return (
    <ScrollContainer enable={false} style={styles.container}>
      <Layout style={styles.headerText}>
        <Text category="h5" style={{textTransform: 'capitalize'}}>
          {location} : Case Detail
        </Text>
        <Text appearance="hint">{currentDate}</Text>
        <Text category="h5" style={{textTransform: 'capitalize'}}>
          {g_cases.TotalConfirmed} : Total Confirmed Cases
        </Text>
      </Layout>

      <Box
        customStyle={{
          ...styles.case,
          backgroundColor: theme['color-primary-default'],
        }}>
        <Box customStyle={{...styles.caseBox, width: wp(40)}}>
          <Text
            style={{...styles.boxText, color: 'lime'}}
            category="h4"
            status="danger">
            Closed Case
          </Text>
        </Box>
        <Layout style={styles.innerBox}>
          <Box customStyle={{...styles.caseBox, height: '50%', width: '100%'}}>
            <Text style={styles.boxText} category="h5" status="danger">
              {g_cases.TotalRecovered}
            </Text>
            <Text style={styles.boxText}>Recovered</Text>
          </Box>
          <Box customStyle={{...styles.caseBox, height: '50%', width: '100%'}}>
            <Text style={styles.boxText} category="h5" status="danger">
              {g_cases.TotalDeaths}
            </Text>
            <Text style={styles.boxText}>Deaths</Text>
          </Box>
        </Layout>
      </Box>
      <Text
        category="h5"
        style={{textTransform: 'capitalize'}}
        status="success">
        {activeCase} : Active Cases Cases
      </Text>
      <Layout style={{marginTop: 10}}>
        <Text category="h5">Update</Text>
        <Box customStyle={{...styles.case, marginTop: 10}}>
          <Box customStyle={styles.caseBox}>
            <Radio checked={true} status="warning" />
            <Text style={styles.boxText2} category="h3" status="warning">
              {g_cases.NewConfirmed}
            </Text>
            <Text style={styles.boxText2}>Infected</Text>
          </Box>
          <Box customStyle={styles.caseBox}>
            <Radio checked={true} status="success" />
            <Text style={styles.boxText2} category="h3" status="success">
              {g_cases.NewRecovered}
            </Text>
            <Text style={styles.boxText2}>Recovered</Text>
          </Box>
          <Box customStyle={styles.caseBox}>
            <Radio checked={true} status="danger" />
            <Text style={styles.boxText2} category="h3" status="danger">
              {g_cases.NewDeaths}
            </Text>
            <Text style={styles.boxText2}>Deaths</Text>
          </Box>
        </Box>
        <Button
          appearance="ghost"
          style={{marginBottom: 15}}
          onPress={() => navigation.navigate('more')}>
          More
        </Button>
      </Layout>
    </ScrollContainer>
  );
};

export default inject('store')(observer(CaseDetailScreen));

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
    color: 'white',
  },
  boxText2: {
    textAlign: 'center',
  },
  innerBox: {
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    width: wp(50),
    alignItems: 'center',
    /*   borderWidth: 1,
      borderColor: 'orange' */
  },
  tHeader: {
    backgroundColor: 'color-info-200',
    height: 55,
  },
  theaderText: {
    textTransform: 'capitalize',
    textAlign: 'center',
    color: 'white',
  },
  tableContent: {
    paddingLeft: '0%',
    paddingRight: '0%',
  },
  cellText: {
    color: 'color-info-300',
    textAlign: 'center',
  },
});
