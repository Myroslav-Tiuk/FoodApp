import React, {useLayoutEffect} from 'react';
import {Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';
import MealItem from '../components/MealItem';
import {MEALS} from '../data/dummy-data';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButtons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MealDetailScreen = ({navigation, route}) => {
  useLayoutEffect(() => {
    const iconName = 'star-outline';
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity>
          <Ionicons
            style={{paddingRight: 10}}
            name={iconName}
            size={30}
            onPress={() => console.warn('here we are')}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const mealId = route.params.mealId;
  console.log(mealId);
  console.log(MEALS);

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  console.log(selectedMeal, 'selectedMeal');
  return (
    <View style={styles.container}>
      <Text>{selectedMeal.tittle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealDetailScreen;
