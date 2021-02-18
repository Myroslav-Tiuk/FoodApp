import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
;

import FilterScreen from '../screens/FiltersScreen';
import MealsFavoriteTab from '../navigation/MealsTabNavigator'


const Drawer = createDrawerNavigator();
const Filter = createStackNavigator();

const DrawerNavigator = ({ navigation }) => {
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerStyle={{
                // backgroundColor: '#c6cbef',
                width: 290,
            }}
                drawerContentOptions={{
                    activeTintColor: '#e91e63',
                    itemStyle: { marginVertical: 10 },
                    labelStyle: {fontWeight: '700', fontSize: 17}
                    
                }}
            >
                <Drawer.Screen name="Meals" component={MealsFavoriteTab} />
                <Drawer.Screen name="Filters" component={FilterNavigator} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default DrawerNavigator;


const FilterNavigator = ({ navigation }) => {
    return (
        <Filter.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#d02860'
            },
            headerTintColor: '#fff'
        }}>
            <Filter.Screen name="Favorite" component={FilterScreen} options={{
                title: "Filter Screen"
            }} />

        </Filter.Navigator>
    )
}