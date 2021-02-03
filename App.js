import React from 'react';
import {Text, View, StyleSheet} from 'react-native'


const App = () => {
  return(
    <View style={styles.container}>
      <Text>FoodApp React Native</Text>
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

export default App;