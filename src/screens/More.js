import React from 'react';
import {inject, observer} from 'mobx-react';
import {DataTable} from 'react-native-paper';
import {ScrollView} from 'react-native';
import {Container} from '../components';
import {
  Text,
  StyleService,
  useStyleSheet,
  useTheme,
  Button,
  styled,
} from '@ui-kitten/components';
const MoreScreen = ({store}) => {
  const theme = useTheme();
  const {cases} = store;
  const tableHead = [
    {id: 1, title: 'S/N'},
    {id: 2, title: 'Country'},
    {id: 3, title: 'Total Case'},
    {id: 4, title: 'Recovered'},
    {id: 5, title: 'Death'},
  ];

  return (
    <Container>
      <DataTable>
        <DataTable.Header
          style={{
            height: 50,
          }}>
          {tableHead.map((element) => {
            return (
              <DataTable.Title key={element.id}>
                <Text
                  style={{
                    color: theme['color-info-300'],
                    textAlign: 'center',
                  }}>
                  {element.title}
                </Text>
              </DataTable.Title>
            );
          })}
        </DataTable.Header>
        <ScrollView>
          {cases != undefined ? (
            cases.map((data, key) => {
              return (
                <DataTable.Row key={key}>
                  <DataTable.Cell>
                    <Text>{key + 1}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <Text>{data.Country}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <Text>{data.TotalConfirmed}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <Text>{data.TotalRecovered}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <Text>{data.TotalDeaths}</Text>
                  </DataTable.Cell>
                </DataTable.Row>
              );
            })
          ) : (
            <Text>Something Went Wrong</Text>
          )}
        </ScrollView>
        {/*  <DataTable.Pagination
        page={page}
        numberOfPages={Math.floor(mapData.length / itemsPerPage)}
        onPageChange={(page) => setPage(page)}
        label={`${from + 1}-${to} of ${mapData.length}`}
      /> */}
      </DataTable>
    </Container>
  );
};
export default inject('store')(observer(MoreScreen));
