import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons'

export default function User() {
  return (
    <View style={styles.userbtn}>
      <TouchableOpacity>
        <Text style={{color:"white"}}>user</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  userbtn: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    marginLeft: 10,
    width:70,
    height:70,
    backgroundColor:'black',
    borderRadius:50,
  },
});

//reusable comp that will be on every page along with the log