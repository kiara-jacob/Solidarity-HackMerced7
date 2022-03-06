import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons'

export default function User() {
  return (
    <TouchableOpacity style={styles.userbtn}>
      <Text style={{color:"white"}}>user</Text>
    </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
  userbtn: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    marginLeft: 10,
    marginTop: 10,
    width:60,
    height:60,
    backgroundColor:'black',
    borderRadius:50,
  },
});

//reusable comp that will be on every page along with the log