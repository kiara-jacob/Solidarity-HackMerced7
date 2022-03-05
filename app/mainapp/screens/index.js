import React from 'react'
import Screen from '../screens/Screen'

export const HomeScreen = ({navigation}) => < Screen navigation={navigation} name = "Home" />
export const LoginScreen = ({navigation}) => < Screen navigation={navigation} name = "Login" />
export const SignOutScreen = ({navigation}) => < Screen navigation={navigation} name = "Sign Out" />
export const CurrentCrisisScreen = ({navigation}) => < Screen navigation={navigation} name = "Current Crisis" />
export const DonateScreen = ({navigation}) => < Screen navigation={navigation} name = "Donate!" />