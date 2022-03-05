//this is the box for the different crisis's and is a reusable component.

import { StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native'
import React from 'react'


export default function Box({text, onPress, source, subtext}){
  return (
    <View style={styles.image}>
      <TouchableOpacity onPress={onPress}>
        <ImageBackground source={source} style={styles.image} imageStyle={{ borderRadius: 18}} >
          <Text style={styles.text}>{text}</Text>
          <Text style={styles.subtext}>{subtext}</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  text:{
    color: 'white',
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 10,
    marginLeft: 8,

  },
  image: {
    height: 200,
    width: '97%',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,

  },
  subtext:{
    color: 'white',
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 5,
    marginLeft: 8,
  }
});

