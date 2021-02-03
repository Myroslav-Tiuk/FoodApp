import React from 'react';
import {Text, View, StyleSheet} from 'react-native'

import MealsNavigator from './navigation/MealsNavigator'
import { enableScreens } from 'react-native-screens';


enableScreens();

const App = () => {
  return(
   <MealsNavigator />
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