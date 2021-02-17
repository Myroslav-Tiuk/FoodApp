import React from 'react';

import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';

const FavoriteScreen = () => {

  const favMeals = MEALS.filter(meal => meal.id === 'm2 ' || meal.id === 'm1')

  return <MealList listData={favMeals} />
};


export default FavoriteScreen;
