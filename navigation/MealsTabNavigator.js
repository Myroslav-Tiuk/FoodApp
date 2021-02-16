/* eslint-disable prettier/prettier */
import * as React from 'react';
import { View, Text, Platform } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import  MealsNavigator  from '../navigation/MealsNavigator';
import  FavoriteScreen  from '../screens/FavoritesScreen';

const Tab = createBottomTabNavigator();

const MealsTabNavigator = ({ navigation }) => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Meals' component={MealsNavigator} />
                <Tab.Screen name='Favorite' component={FavoriteScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default MealsTabNavigator;
