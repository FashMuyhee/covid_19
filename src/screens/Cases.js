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
} from '@ui-kitten/components';
import {ScrollContainer, Box} from '../components';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {
  Image,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native';
import {inject, observer} from 'mobx-react';

const CasesScreen = ({navigation, store}) => {
  const currentDate = new Date().toDateString();
  const styles = useStyleSheet(themedStyles);
  const theme = useTheme();
  const [state, setState] = useState({
    location: 'nigeria',
    cases: null,
    countries: store.countries,
  });
  const {cases, globalCase, getCase, getCountries} = store;
  const {countries, location, globalCases} = state;
  const filter = (item, query) =>
    item.Country.toLowerCase().includes(query.toLowerCase());

  const locationChange = (value) => {
    setState({
      ...state,
      location: value,
      countries: countries.filter((item) => filter(item, value)),
    });
  };
  const onSelect = (index) => {
    setState({...state, location: countries[index].Country});
  };

  const clearInput = () => {
    setState({...state, location: ' '});
  };

  const locationIcon = (props) => {
    return <Icon {...props} name="pin" />;
  };

  const clearIcon = (props) => (
    <TouchableWithoutFeedback onPress={clearInput}>
      <Icon {...props} name="close" />
    </TouchableWithoutFeedback>
  );

  useEffect(() => {
    // async () => {
    getCase();
    getCountries();
    setState({...state, cases: cases, globalCase: globalCase});
    // };
  }, []);
  console.log(countries);
  const renderOption = (item, index) => (
    <AutocompleteItem
      key={index}
      title={item.title}
      accessoryLeft={locationIcon}
    />
  );
  return (
    <ScrollContainer style={styles.container}>
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
          source={require('../assets/img/doc.png')}
          style={{
            height: hp('30%'),
            width: wp('30%'),
            marginBottom: hp('5.6%'),
          }}
        />
      </Box>

      <Layout style={styles.content}>
        <KeyboardAvoidingView behavior="position" enabled>
          <Autocomplete
            value={location}
            placeholder="Enter Location"
            accessoryLeft={locationIcon}
            accessoryRight={clearIcon}
            onChangeText={(value) => locationChange(value)}
            onSelect={onSelect}
            style={styles.input}
            textStyle={{textTransform: 'capitalize'}}>
            {countries.map(renderOption)}
          </Autocomplete>
          <Layout style={{marginTop: 10}}>
            <Layout style={styles.caseLink}>
              <Layout>
                <Text category="h5">Case Update</Text>
                <Text appearance="hint">Newest update {currentDate}</Text>
              </Layout>
              <Button
                appearance="ghost"
                onPress={() => navigation.navigate('case_detail')}>
                <Text status="info"> See Details</Text>
              </Button>
            </Layout>
            <Box customStyle={styles.case}>
              <Box customStyle={styles.caseBox}>
                <Radio checked={true} status="warning" />
                <Text style={styles.boxText} category="h3" status="warning">
                  9349
                </Text>
                <Text style={styles.boxText}>Infected</Text>
              </Box>
              <Box customStyle={styles.caseBox}>
                <Radio checked={true} status="success" />
                <Text style={styles.boxText} category="h3" status="success">
                  6700
                </Text>
                <Text style={styles.boxText}>Recovered</Text>
              </Box>
              <Box customStyle={styles.caseBox}>
                <Radio checked={true} status="danger" />
                <Text style={styles.boxText} category="h3" status="danger">
                  12
                </Text>
                <Text style={styles.boxText}>Deaths</Text>
              </Box>
            </Box>
          </Layout>
        </KeyboardAvoidingView>
        <Layout style={{marginTop: 10}}>
          <Layout style={styles.caseLink}>
            <Layout>
              <Text category="h5">Global Update</Text>
              <Text appearance="hint">Newest update {currentDate}</Text>
            </Layout>
            <Button
              appearance="ghost"
              onPress={() => navigation.navigate('case_detail')}>
              <Text status="info"> See Details</Text>
            </Button>
          </Layout>
          <Box customStyle={styles.case}>
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
