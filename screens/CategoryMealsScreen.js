import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native'

import { CATEGORIES } from '../data/dummy-data'


const CategoryMealScreen = ({ route, navigation }) => {
  const { categotyId } = route.params

  const selectedCategory = CATEGORIES.find(cat => cat.id === categotyId)
  return (
    <View style={styles.container}>
      <Text>CategoryMealScreen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Go to MealDetailsScreen"
        onPress={() => navigation.navigate('MealDetail')}
      />
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
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

export default CategoryMealScreen;