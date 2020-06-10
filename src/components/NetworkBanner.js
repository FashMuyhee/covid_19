import React from 'react';
import {Text, StyleService, useStyleSheet} from '@ui-kitten/components';

const NetworkBanner = ({status, customStyle}) => {
  const styles = useStyleSheet(themedStyles);

  const onlineStyle = {...styles.online, ...customStyle};
  const offlineStyle = {...styles.offline, ...customStyle};
  const text = status
    ? `You're now connected PULL DOWN ⬇ to REFRESH`
    : `You're currenntly offline `;
  const style = status ? onlineStyle : offlineStyle;

  return <Text style={style}>{text}</Text>;
};

export default NetworkBanner;

const themedStyles = StyleService.create({
  online: {
    flexDirection: 'column',
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
    flexDirection: 'column',
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
