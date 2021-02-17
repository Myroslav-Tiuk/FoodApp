/* eslint-disable prettier/prettier */
import * as React from 'react';
import { View, Text, Platform, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MealsNavigator from '../navigation/MealsNavigator';
import FavoriteScreen from '../screens/FavoritesScreen';
import MealDetailScreen from '../screens/MealDetailScreen'
import Colors from '../constants/Colors'

import Ionicons from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const FavoriteStack = createStackNavigator()

const MealsTabNavigator = ({ navigation }) => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: Colors.accentColor
                }}
            >
                <Tab.Screen
                    name='Meals'
                    component={MealsNavigator}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Ionicons name="restaurant" color={color} size={26} />
                        ),
                    }} />
                <Tab.Screen
                    name='Favorite'
                    component={FavoriteNavigator}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Ionicons name="star" color={color} size={26} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default MealsTabNavigator;

const FavoriteNavigator = ({ navigation }) => {
    return (
        <FavoriteStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#d02860'
            },
            headerTintColor: '#fff'
        }}>
            <FavoriteStack.Screen name="Favorite" component={FavoriteScreen} options={{
                title: "Favorite"
            }} />
            <FavoriteStack.Screen name="MealDetail"
                component={MealDetailScreen}
                options={({ route }) => ({
                    title: route.params.title,
                })} />
        </FavoriteStack.Navigator>
    )
}
