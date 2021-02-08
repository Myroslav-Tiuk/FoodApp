import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native'

import { CATEGORIES } from '../data/dummy-data'
import CategoryGrid from '../components/CategoryGrid'


const CategoriesScreen = ({ navigation}) => {

    renderGridItem = (itemData) => {
        return (
            <CategoryGrid 
            title={itemData.item.title} 
            onSelect={() => {
                navigation.navigate('CategoryMeal',
                    {
                        categoryId: itemData.item.id,
                        title: itemData.item.title
                    })
            }}
            color={itemData.item.color}
            />
        )
    }

    return (
        <FlatList
            numColumns={2}
            data={CATEGORIES}
            renderItem={renderGridItem}
            keyExtractor={(item, index) => item.id}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

})

export default CategoriesScreen;