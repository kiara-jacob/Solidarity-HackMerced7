import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 

export default function User() {
  return (
    <TouchableOpacity style={styles.userbtn}>
      <AntDesign name="user" size={18} color="white" />
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
    width:45,
    height:45,
    backgroundColor:'black',
    borderRadius:50,
  },
});

//reusable comp that will be on every page along with the log