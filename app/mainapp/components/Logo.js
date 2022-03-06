//this is the box for the different crisis's and is a reusable component.

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


export default function Logo() {
  return (
    <View style={styles.logo}>
      <Text>LOGO</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  logo: {
    height: 70,
    width: 300,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'grey',
    borderRadius: 10,
  },
});