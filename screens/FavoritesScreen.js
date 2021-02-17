import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const FavoriteScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={{width: 300, height: 300}} source={require('../models/images/meals.png')} />
      <Text>FavoriteScreen</Text>
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

export default FavoriteScreen;
