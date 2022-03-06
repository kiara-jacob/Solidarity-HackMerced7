//simple info block component

//this is the box for the different crisis's and is a reusable component.

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


export default function Infoblock() {
  return (
    <View style={styles.info} >
        <Text>infoblock</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  info: {
    height: 70,
    width: 380,
    marginTop: 10,
    marginLeft: 24,
    marginRight: 5,
    backgroundColor: 'grey',
    borderRadius: 10,
  },
});
