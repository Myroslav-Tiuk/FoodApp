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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default App;