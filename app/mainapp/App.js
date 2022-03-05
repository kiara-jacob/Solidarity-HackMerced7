import { StatusBar } from 'expo-status-bar';
import {React, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Platform } from 'react-native';
import Header from './components/Header';
import Box from './components/Box';
import Logo from './components/Logo';
import Infoblock from './components/Infoblock';
import SafeViewAndroid from "./components/SafeViewAndroid";


//HEADER IS DONE for main page. User and Logo are the options for it

export default function App() {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <Header />
      <Infoblock/>
      <View style={{flex:1}}>
        <ScrollView >
          <Box text={items[0].text} source={items[0].image} subtext={items[0].subtext} />
          <Box source={items[1].image} text= {items[1].text} subtext={items[1].subtext} />
          <Box source={items[2].image} text= {items[2].text} subtext={items[2].subtext} />
          <Box source={items[3].image} text= {items[3].text} subtext={items[3].subtext}/>
        </ScrollView>
      </View>
    </SafeAreaView>
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

