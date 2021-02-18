/* eslint-disable prettier/prettier */
import * as React from 'react';

// import { NavigationContainer } from '@react-navigation/native';
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
        // <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: Colors.accentColor
                }}
            >
                <Tab.Screen
                    name='All meals'
                    component={MealsNavigator}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Ionicons name="restaurant" color={color} size={26} />
                        ),
                    }} />
                <Tab.Screen
                    name='Favorite Meal'
                    component={FavoriteNavigator}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Ionicons name="star" color={color} size={26} />
                        ),
                    }}
                />
            </Tab.Navigator>
        // </NavigationContainer>
    )
}

export default MealsTabNavigator;

const FavoriteNavigator = ({ navigation }) => {
    return (
        <FavoriteStack.Navigator screenOptions={{
            headerStyle: {
                

            },
            headerTintColor: Colors.primaryColor

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
