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
import * as eva from '@eva-design/eva';
import {default as customMapping} from './src/config/custom-mapping.json';
import {AppNavigator} from './src/route/navigator';

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider
      theme={eva.dark}
      mapping={eva.mapping}
      customMapping={customMapping}>
      <AppNavigator />
    </ApplicationProvider>
  </>
);
