import React from 'react';
import {Text, View, StyleSheet} from 'react-native'


const MealDetailScreen = () => {
  return(
    <View style={styles.container}>
      <Text>MealDetailScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default MealDetailScreen;