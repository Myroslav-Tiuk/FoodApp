import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import MealItem from '../components/MealItem'

const MealList = props => {
    const navigation = useNavigation();

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

    return (
        <View style={styles.list}>
        <FlatList
          style={{ width: '100%' }}
          data={props.listData}
          keyExtractor={(item, index) => item.id}
          renderItem={renderMealsItem}
        />
      </View>
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }
})

export default MealList;