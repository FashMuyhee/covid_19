import React from 'react';
import {Text, StyleService, useStyleSheet, Layout} from '@ui-kitten/components';

const NetworkBanner = ({status, timeout}) => {
  const styles = useStyleSheet(themedStyles);

  const text = status
    ? `You're now connected PULL DOWN ⬇ to REFRESH`
    : `You're currenntly offline `;
  const style = status ? styles.online : styles.offline;
  return (
    <Layout style={timeout ? styles.timeout : ''}>
      <Text style={style}>{text}</Text>
    </Layout>
  );
};

export default NetworkBanner;

const themedStyles = StyleService.create({
  timeout: {
    display: 'none',
  },
  online: {
    backgroundColor: 'color-success-default',
    color: 'white',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingTop: 5,
    paddingRight: 5,
    paddingLeft: 5,
    paddingBottom: 5,
    textAlign: 'center',
  },
  offline: {
    backgroundColor: 'color-danger-default',
    color: 'white',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingTop: 5,
    paddingRight: 5,
    paddingLeft: 5,
    paddingBottom: 5,
    textAlign: 'center',
  },
});
