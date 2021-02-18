import React, { useLayoutEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import MealItem from '../components/MealItem';
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButtons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MealDetailScreen = ({ navigation, route }) => {

  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  useLayoutEffect(() => {
    const iconName = 'star-outline';
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => console.warn('we are here')}>
          <Ionicons
            style={{ paddingRight: 10 }}
            name={iconName}
            size={30}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);


  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.detail}>
        <Text>{selectedMeal.duration}min</Text>
        <Text>{selectedMeal.complexity.toUpperCase()}</Text>
        <Text>{selectedMeal.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map(ingredient => <Text style={styles.list} key={ingredient}>{ingredient}</Text>)}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map(step => <Text style={styles.list} key={step}>{step}</Text>)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  detail: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: '600'
  },
  list: {
    marginHorizontal: 10,
    marginVertical: 7,
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 20,
    paddingVertical: 3,
    borderColor: '#ccc'
  }
});

export default MealDetailScreen;
