/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  Text,
  Layout,
  Autocomplete,
  AutocompleteItem,
  StyleService,
  useStyleSheet,
  useTheme,
  Icon,
  Radio,
  Button,
  Input,
} from '@ui-kitten/components';
import {ScrollContainer, Box} from '../components';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Image, ActivityIndicator, RefreshControl} from 'react-native';
import {inject, observer} from 'mobx-react';
import doc from '../assets/img/doc.png';

const CasesScreen = ({navigation, store}) => {
  const currentDate = new Date().toDateString();
  const styles = useStyleSheet(themedStyles);
  const theme = useTheme();
  const [state, setState] = useState({
    location: 'nigeria',
    lCase: {},
    countries: store.countries,
    refreshing: false,
  });
  const {cases, globalCase, getCases, getCountries, loading} = store;
  const {location, lCase, refreshing} = state;

  const setCountryCase = () => {
    cases.forEach((element) => {
      if (
        element.hasOwnProperty('Country') &&
        element.Country.toLowerCase() === 'nigeria'
      ) {
        setState({...state, lCase: element});
        console.log('lcase' + lCase);
      }
    });
  };

  const LocationIcon = (props) => {
    return <Icon {...props} name="pin" />;
  };

  const onRender = async () => {
    // setState({...state, refreshing: true});
    await getCountries();
    await getCases();
    // setState({...state, refreshing: false});
  };
  useEffect(() => {
    onRender();
    setCountryCase();
  }, []);
  
  return (
    <ScrollContainer
      style={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRender}
          colors={theme['color-primary-500']}
        />
      }>
      <Layout style={styles.headerText}>
        <Text category="h5">Covid-19</Text>
        <Text category="h3">Case Update</Text>
      </Layout>
      <Box customStyle={styles.card}>
        <Layout style={{backgroundColor: 'transparent', width: wp('50%')}}>
          <Text category="h4" style={{...styles.text, textAlign: 'left'}}>
            What you need is to stay at home.
          </Text>
        </Layout>
        <Image
          source={doc}
          style={{
            height: hp('30%'),
            width: wp('30%'),
            marginBottom: hp('5.6%'),
          }}
        />
      </Box>

      <Layout style={styles.content}>
        <Layout style={{marginTop: 10}}>
          <Layout style={styles.caseLink}>
            <Layout>
              <Text category="h5">Nigeria Update</Text>
              <Text appearance="hint">Lastest update {currentDate}</Text>
            </Layout>
            <Button
              appearance="ghost"
              onPress={() =>
                navigation.navigate('result', {cases: lCase, location})
              }>
              <Text status="info"> See Details</Text>
            </Button>
          </Layout>
          <Box customStyle={styles.case}>
            {loading ? (
              <ActivityIndicator
                size="large"
                color={theme['color-primary-400']}
                style={{marginLeft: wp(43)}}
              />
            ) : (
              <>
                <Box customStyle={styles.caseBox}>
                  <Radio checked={true} status="warning" />
                  <Text style={styles.boxText} category="h5" status="warning">
                    {lCase.NewConfirmed}
                  </Text>
                  <Text style={styles.boxText}> Infected</Text>
                </Box>
                <Box customStyle={styles.caseBox}>
                  <Radio checked={true} status="success" />
                  <Text style={styles.boxText} category="h5" status="success">
                    {lCase.NewRecovered}
                  </Text>
                  <Text style={styles.boxText}> Recovered</Text>
                </Box>
                <Box customStyle={styles.caseBox}>
                  <Radio checked={true} status="danger" />
                  <Text style={styles.boxText} category="h5" status="danger">
                    {lCase.NewDeaths}
                  </Text>
                  <Text style={styles.boxText}> Deaths</Text>
                </Box>
              </>
            )}
          </Box>
        </Layout>
        <Layout style={{marginTop: 10}}>
          <Layout style={styles.caseLink}>
            <Layout>
              <Text category="h5">Global Update</Text>
              <Text appearance="hint">Newest update {currentDate}</Text>
            </Layout>
            <Button
              appearance="ghost"
              onPress={() =>
                navigation.navigate('case_detail', {
                  g_cases: globalCase,
                  location: 'global',
                })
              }>
              <Text status="info"> See Details</Text>
            </Button>
          </Layout>
          <Box customStyle={styles.case}>
            {loading ? (
              <ActivityIndicator
                size="large"
                color={theme['color-primary-400']}
                style={{marginLeft: wp(43)}}
              />
            ) : (
              <>
                <Box customStyle={styles.caseBox}>
                  <Radio checked={true} status="warning" />
                  <Text style={styles.boxText} category="h5" status="warning">
                    {globalCase.NewConfirmed}
                  </Text>
                  <Text style={styles.boxText}> Infected</Text>
                </Box>
                <Box customStyle={styles.caseBox}>
                  <Radio checked={true} status="success" />
                  <Text style={styles.boxText} category="h5" status="success">
                    {globalCase.NewRecovered}
                  </Text>
                  <Text style={styles.boxText}> Recovered</Text>
                </Box>
                <Box customStyle={styles.caseBox}>
                  <Radio checked={true} status="danger" />
                  <Text style={styles.boxText} category="h5" status="danger">
                    {globalCase.NewDeaths}
                  </Text>
                  <Text style={styles.boxText}> Deaths</Text>
                </Box>
              </>
            )}
          </Box>
        </Layout>
      </Layout>
    </ScrollContainer>
  );
};

// export default CasesScreen;
export default inject('store')(observer(CasesScreen));

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
  content: {
    marginTop: hp(3),
  },
  input: {
    borderRadius: 25,
    borderColor: 'color-info-300',
    backgroundColor: 'color-primary-100',
  },
  caseLink: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  case: {
    // backgroundColor: 'color-primary-200',
    borderColor: 'color-primary-200',
    marginTop: hp(4),
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
  },
  boxText: {
    textAlign: 'center',
  },
});
