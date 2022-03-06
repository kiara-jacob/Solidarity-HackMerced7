
import { StatusBar } from 'expo-status-bar';
import {React, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, Platform, Alert } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from '/Users/kiarajacob/HACKMERCED/HackMerced7/app/mainapp/components/Header.js';
import Box from '/Users/kiarajacob/HACKMERCED/HackMerced7/app/mainapp/components/Box.js';
import Logo from '/Users/kiarajacob/HACKMERCED/HackMerced7/app/mainapp/components/Logo.js';
import Infoblock from '/Users/kiarajacob/HACKMERCED/HackMerced7/app/mainapp/components/Infoblock.js';
import SafeViewAndroid from "/Users/kiarajacob/HACKMERCED/HackMerced7/app/mainapp/components/SafeViewAndroid.js";



//HEADER IS DONE for main page. User and Logo are the options for it

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaProvider style={SafeViewAndroid.AndroidSafeArea}>
      <Header/>
      <View style={{flex: 1}}>
        <ScrollView style={{padding: 10, marginBottom: 30}}>
          <Box text={items[0].text} source={items[0].image} subtext={items[0].subtext} onPress={()=> navigation.navigate('Ukraine Crisis')}/>
          <Box source={items[1].image} text= {items[1].text} subtext={items[1].subtext} onPress={()=> navigation.navigate('Covid Crisis')}/>
          <Box source={items[2].image} text= {items[2].text} subtext={items[2].subtext} onPress={()=> navigation.navigate('Afghanistan Crisis')}/>
          <Box source={items[3].image} text= {items[3].text} subtext={items[3].subtext} onPress={()=> navigation.navigate('Climate Crisis')}/>
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
}

const items = [
  {
    image: require("/Users/kiarajacob/HACKMERCED/HackMerced7/app/mainapp/assets/ukraine.png"),
    text: "Ukraine Crisis",
    subtext: "Help support those affected by the war",
  },
  {
    image: require("/Users/kiarajacob/HACKMERCED/HackMerced7/app/mainapp/assets/covid.png"),
    text: "COVID-19 Crisis",
    subtext: "Help support those affected by the pandemic",
  },
  {
    image: require("/Users/kiarajacob/HACKMERCED/HackMerced7/app/mainapp/assets/afghanistan.png"),
    text: "Crisis in Afghanistan",
    subtext: "Help support those affected by the war",
  },
  {
    image: require("/Users/kiarajacob/HACKMERCED/HackMerced7/app/mainapp/assets/climate.png"),
    text: "Climate Change Crisis",
    subtext: "Help save the planet",
  },

];