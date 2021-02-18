import React, { useLayoutEffect } from 'react';

import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';
import Ionicons from 'react-native-vector-icons/Ionicons'

const FavoriteScreen = ({ navigation }) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Ionicons style={{ paddingLeft: 10 }} name='menu-outline' size={30} onPress={() => navigation.openDrawer()} />
      ),
    });
  }, [navigation]);

  const favMeals = MEALS.filter(meal => meal.id === 'm2 ' || meal.id === 'm1')

  return <MealList listData={favMeals} />
};


export default FavoriteScreen;
