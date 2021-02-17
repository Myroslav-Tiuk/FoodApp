import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import MealsTabNavigator from './navigation/MealsTabNavigator';
import { enableScreens } from 'react-native-screens';


enableScreens();

const App = () => {
  return(
   <MealsTabNavigator />
  )
}

export default App;