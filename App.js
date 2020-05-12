/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the UI Kitten template
 * https://github.com/akveo/react-native-ui-kitten
 *
 * Documentation: https://akveo.github.io/react-native-ui-kitten/docs
 *
 * @format
 */

import React from 'react';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {light, mapping} from '@eva-design/eva';
import {default as customMapping} from './src/config/custom-mapping.json';
import {default as customTheme} from './src/config/custom-theme.json';
import {StatusBar} from 'react-native';
import {AppNavigator} from './src/route/navigator';
const theme = {...light, ...customTheme};

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider
      theme={theme}
      mapping={mapping}
      customMapping={customMapping}>
      {/* <StatusBar backgroundColor="white" barStyle="dark" /> */}
      <AppNavigator />
    </ApplicationProvider>
  </>
);
