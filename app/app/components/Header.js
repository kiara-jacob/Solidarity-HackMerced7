import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import User from './User'
import MenuBar from './MenuBar'

// const styles=StyleSheet.create()
export default function Header() {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <HeaderButton text="User"/>
      <HeaderButton text="≡"/>
    </View>
    // 2 buttons - one to direct to the user acc and one for the menu
  )
}

const HeaderButton = (props) => 
//touchable opacity gives user response when clicked on the button
    <TouchableOpacity 
        // for the User and Menu Buttons. Both have the same settings right now that can be overridden later
        style={{
            backgroundColor: 'black', 
            borderRadius:13,
            padding: 7,
            marginLeft: 8,
            marginRight: 8,
            marginTop: 10,
        }}
    >
        <Text style={{color: "white"}}> {props.text} </Text>
    </TouchableOpacity>

