import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native'


const MealDetailScreen = ({navigation}) => {
  return(
    <View style={styles.container}>
      <Text>MealDetailScreen</Text>
      <Button
        title="Go Back to Category"
        onPress={() => navigation.pop()}
      />
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