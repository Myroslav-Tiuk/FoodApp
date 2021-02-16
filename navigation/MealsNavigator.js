import * as React from 'react';
import {View, Text, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

import Colors from '../constants/Colors';

const Stack = createStackNavigator();

const MealsNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Category">
        <Stack.Screen
          name="Category"
          component={CategoriesScreen}
          options={{
            title: 'All Category',
            headerStyle: {
              backgroundColor:
                Platform.OS === 'android' ? Colors.primaryColor : 'white',
            },
            headerTintColor:
              Platform.OS === 'android' ? 'white' : Colors.primaryColor,
          }}
        />
        <Stack.Screen
          name="CategoryMeal"
          component={CategoryMealsScreen}
          options={({route}) => ({title: route.params.title})}
        />
        <Stack.Screen
          name="MealDetail"
          component={MealDetailScreen}
          options={({route}) => ({
            title: route.params.title,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MealsNavigator;
