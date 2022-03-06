import React from 'react';
import HomeScreen from '/Users/kiarajacob/HACKMERCED/HackMerced7/app/mainapp/navigation/screens/HomeScreen.js';
import UkraineScreen from '/Users/kiarajacob/HACKMERCED/HackMerced7/app/mainapp/navigation/screens/UkraineScreen.js';
import CovidScreen from '/Users/kiarajacob/HACKMERCED/HackMerced7/app/mainapp/navigation/screens/CovidScreen.js';
import AfghanistanScreen from '/Users/kiarajacob/HACKMERCED/HackMerced7/app/mainapp/navigation/screens/AfghanistanScreen.js';
import ClimateScreen from '/Users/kiarajacob/HACKMERCED/HackMerced7/app/mainapp/navigation/screens/ClimateScreen.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Ukraine Crisis' component={UkraineScreen}/>
        <Stack.Screen name='Covid Crisis' component={CovidScreen}/>
        <Stack.Screen name='Afghanistan Crisis' component={AfghanistanScreen}/>
        <Stack.Screen name='Climate Crisis' component={ClimateScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};