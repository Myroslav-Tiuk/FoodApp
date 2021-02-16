import React from 'react';
import {HeaderButton} from 'react-navigation-header-buttons';
import {Ionicons} from 'react-native-vector-icons';

import Colors from '../constants/Colors';
import {Platform} from 'react-native';

const CustomHeaderButtons = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={24}
      color={Platform === 'android' ? 'white' : Colors.primaryColor}
    />
  );
};

export default CustomHeaderButtons;
