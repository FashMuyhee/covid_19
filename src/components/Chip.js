import React from 'react';
import {Text, StyleService, useStyleSheet} from '@ui-kitten/components';
const Chip = ({children, customStyle, outline}) => {
  const styles = useStyleSheet(themedStyles);

  const style = {...styles.chip, ...customStyle};
  const outlineStyle = {...styles.outline, ...customStyle};
  return <Text style={outline ? outlineStyle : style}>{children}</Text>;
};

export default Chip;

const themedStyles = StyleService.create({
  chip: {
    flexDirection: 'column',
    marginLeft: 14,
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 5,
    backgroundColor: 'color-primary-default',
    color: 'white',
    borderRadius: 6,
  },
  outline: {
    flexDirection: 'column',
    marginLeft: 14,
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 5,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'color-primary-default',
    backgroundColor: 'color-primary-100',
    color: 'color-primary-default',
  },
});
