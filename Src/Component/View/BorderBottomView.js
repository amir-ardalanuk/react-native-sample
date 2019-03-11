import React from 'react';
import { View,StyleSheet } from 'react-native';

const inputStyles = StyleSheet.create({
    container: {
      borderStyle: 'dotted',
      borderWidth: 2,
      borderColor: '#b7c2c6',
      overflow: 'hidden',
    },
    topMask: {
      height: 3,
      width: 9999,
      backgroundColor: 'white',
      position: 'absolute',
      top: -3,
      left: 0,
    },
    rightMask: {
      height: 9999,
      width: 3,
      backgroundColor: 'white',
      position: 'absolute',
      top: 0,
      right: -3,
    },
    leftMask: {
      height: 9999,
      width: 3,
      backgroundColor: 'white',
      position: 'absolute',
      top: 0,
      left: -3,
    },
  });
  
  export default UnderlinedInput = props => (
    <View style={inputStyles.container}>
      <View style={inputStyles.topMask} />
      <View style={inputStyles.rightMask} />
      <View style={inputStyles.leftMask} />
      {props.children}
    </View>
  );