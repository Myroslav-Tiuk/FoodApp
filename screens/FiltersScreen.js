import React, { useLayoutEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'


const FilterScreen = ({navigation}) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Ionicons style={{ paddingLeft: 10 }} name='menu-outline' size={30} onPress={() => navigation.openDrawer()} />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>FilterScreen</Text>
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

export default FilterScreen;