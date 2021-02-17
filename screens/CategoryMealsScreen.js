import React from 'react';

import { MEALS } from '../data/dummy-data'
import MealList from '../components/MealList'

const CategoryMealScreen = ({ route, navigation }) => {

  const { categoryId } = route.params

  const displayMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return <MealList listData={displayMeals} />
}



export default CategoryMealScreen;