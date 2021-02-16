import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const CategoryGrid = (props) => {
  return (
    <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
      <View style={{...styles.container, ...{backgroundColor: props.color}}}>
        <Text style={styles.title} numberOfLines={2}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    // overflow: 'hidden'
  },
  container: {
    flex: 1,
    borderRadius: 15,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 10,
    elevation: 3,
    padding: 20,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 20,
    textAlign: 'right',
  },
});

export default CategoryGrid;
