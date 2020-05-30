import React from 'react';
import { Modal as RNModal, View } from 'react-native';
import {
  StyleService,
  useStyleSheet,
  Text,
  Button,
  Layout,
  Icon,
  useTheme,
} from '@ui-kitten/components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { TouchableWithoutFeedback } from '@ui-kitten/components/devsupport';

const Modal = ({
  isVisible,
  closeModal,
  btnText, children
}) => {
  const styles = useStyleSheet(themedStyles);

  return (
    <RNModal
      style={styles.modal}
      transparent={false}
      visible={isVisible}
      animationType="slide">
      <View style={styles.closeBtn}>
        <Icon name="arrow-ios-forward" fill='black' width={40} height={40} onPress={closeModal} />
      </View>
      <Layout style={styles.content}>
        {children}
      </Layout>
    </RNModal>
  );
};

export default Modal;
const themedStyles = StyleService.create({
  content: {
    width: wp('100%'),
    height: hp('100%'),
    display: 'flex',
    // alignItems: 'center',
  },
  btn: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    marginTop: hp('4%'),
    marginBottom: hp('4%'),
  },
  closeBtn: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    paddingRight: 25,
    paddingBottom: 15,
    paddingTop: 15,
  }
});
