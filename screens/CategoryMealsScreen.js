import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native'

import { MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'


const CategoryMealScreen = ({ route, navigation }) => {

  const { categoryId } = route.params
  console.log(MEALS)

  const renderMealsItem = itemData => {
    return (
      <MealItem
        tittle={itemData.item.tittle}
        onSelectMeal={() => {
          navigation.navigate('MealDetail', {
            mealId: itemData.item.id,
            title: itemData.item.tittle
          })
        }}
        duration={itemData.item.duration}
        affordability={itemData.item.affordability}
        complexity={itemData.item.complexity}
        image={itemData.item.imageUrl}
      />
    )
  }

  const displayMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return (
    <View style={styles.container}>
      {console.log(MEALS)}
      <FlatList
        style={{ width: '100%' }}
        data={displayMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealsItem}
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