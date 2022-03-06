import { View, Text } from 'react-native'
import React from 'react'
import Logo from './Logo'
import User from './User'

// const styles=StyleSheet.create()
export default function Header() {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between' , marginLeft: 10, marginRight:10,}}>
      <User />
      <Logo />
    </View>
  )
};

