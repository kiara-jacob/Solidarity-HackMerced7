//this is the box for the different crisis's and is a reusable component.

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';

import { withSafeAreaInsets } from 'react-native-safe-area-context';


export default function Logo() {
  return (
    <View style={styles.logo}>
      <Text style={styles.text}>SOLIDARITY</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  logo: {
    height: 50,
    width: 200,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#219ebc',
  },
  text:{
    color:'white',
    fontWeight: 'bold',
    marginTop: 5,
    marginLeft: 10,
    fontSize: 30,

  },
});