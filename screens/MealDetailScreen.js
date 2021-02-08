import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native'
import MealItem from '../components/MealItem';
import { MEALS } from '../data/dummy-data';


const MealDetailScreen = ({navigation, route}) => {
  const mealId = route.params.mealId
  console.log(mealId)
  console.log(MEALS)

  const selectedMeal = MEALS.find(meal => meal.id === mealId)
console.log(selectedMeal, "selectedMeal")
  return(
    <View style={styles.container}>
      <Text>{selectedMeal.tittle}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default MealDetailScreen;