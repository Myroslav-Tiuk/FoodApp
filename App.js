import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import MealsTabNavigator from './navigation/MealsTabNavigator';
import { enableScreens } from 'react-native-screens';
import DrawerNavigator from './navigation/DrawerNavigator'


enableScreens();

const App = () => {
  return(
   <DrawerNavigator />
  )
}

export default App;