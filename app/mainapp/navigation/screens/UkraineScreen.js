import { View, Text, FlatList,Image, ImageBackground, Linking ,TouchableOpacity} from 'react-native'
import styles from '/Users/kiarajacob/HACKMERCED/HackMerced7/app/mainapp/navigation/screens/screenstyles.js';
import React from 'react'

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from '/Users/kiarajacob/HACKMERCED/HackMerced7/app/mainapp/components/Header.js';
import SafeViewAndroid from '/Users/kiarajacob/HACKMERCED/HackMerced7/app/mainapp/components/SafeViewAndroid.js';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import ScrollView from 'react-native';
export default function UkraineScreen() {
  return (
    <SafeAreaProvider style={SafeViewAndroid.AndroidSafeArea}>
      <Header />
      <View>
        <ImageBackground source={require("/Users/kiarajacob/HACKMERCED/HackMerced7/app/mainapp/assets/ukraine.png")} style={styles.image} imageStyle={{ borderRadius: 18 }}>
          <Text style={styles.text}> HELP SUPPORT THOSE AFFECTED BY THE CRISIS IN UKRAINE</Text>
          <View style={styles.twobtns}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.btntext}>INFO</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.btntext}>NGO</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>

      <View style={{flex: 1}}>
        <FlatList 
          style={styles.screen}
          data={ngodata} 
          renderItem={({item}) => {
            return(
              <View style={styles.ngo}>
                <Text style={styles.ngo}>{item.ngoname}{'\n'}{item.ngoinfo}</Text>
                <TouchableOpacity style={styles.icon} >
                  <MaterialCommunityIcons  name="hand-heart" size={30} color="black"/>
                </TouchableOpacity>
              </View>
            )}
          }
        />
      </View>
    </SafeAreaProvider>
  );
}



const ngodata = [
  {
   
    ngoname: "Come Back Alive",
    ngoinfo:"Support Ukrainian forces with training and non-lethal equipment in the fight for democracy",
    url: 'https://www.google.com',
  },

  {
    ngoname :'Donbas SOS',
    ngoinfo:'Providing those who have relocated, live in warzones, and freed prisoners of war with assistance, legal support, and psychological counseling',
    url: "www.google.com",
  },
  {
    ngoname:'World Central Kitchen',
    ngoinfo:'Chef José Andrés’ NGO, has set up 24 hour stations in Poland, Romania, Moldova, and Hungary to provide warm meals to refugees fleeing home.',
    url: "www.google.com",
  },
  {
    ngoname:'Global Empowerment Mission',
    ngoinfo:'Help Ukraine refugees with necessities, stable housing, and relocation',
    url: "www.google.com",
  },
   {
    ngoname: "Save the Children",
    ngoinfo:"Directly help children and families with food, water, hygiene kits, psychosocial counseling, and cash assistance",
    url: "www.google.com",
  },

  {
    ngoname :'International Committee of the Red Cross',
    ngoinfo:'Their team of engineers and scientists are working to give citizens access to clean water and improve living conditions for citizens whose homes have been damaged.',
    url: "www.google.com",
  },
]
