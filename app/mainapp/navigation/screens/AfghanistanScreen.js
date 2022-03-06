import { View, Text, FlatList,Image,StyleSheet, ImageBackground ,TouchableOpacity} from 'react-native'
import React from 'react'
import styles from '/Users/kiarajacob/HACKMERCED/HackMerced7/app/mainapp/navigation/screens/screenstyles.js';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from '/Users/kiarajacob/HACKMERCED/HackMerced7/app/mainapp/components/Header.js';
import SafeViewAndroid from '/Users/kiarajacob/HACKMERCED/HackMerced7/app/mainapp/components/SafeViewAndroid.js';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import ScrollView from 'react-native';
export default function AfghanistanScreen() {
  return (
    <SafeAreaProvider style={SafeViewAndroid.AndroidSafeArea}>
      <Header />
      <View>
        <ImageBackground source={require("/Users/kiarajacob/HACKMERCED/HackMerced7/app/mainapp/assets/afghanistan.png")} style={styles.image} imageStyle={{ borderRadius: 18 }}>
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
          style={{flex: 1}} 
          data={ngodata} 
          renderItem={({item}) => {
            return(
              <View style={styles.ngo}>
                <Text style={styles.ngo}>{item.ngoname}{'\n'}{item.ngoinfo}</Text>
                <TouchableOpacity style={styles.icon} onPress={ ()=> {Linking.openURL(item.url) }}>
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
    ngoname: "Save the Children",
    ngoinfo:"Recently, Save the Children has restarted their programs providing mobile health and nutrition teams to children and their families.",
  },

  {
    ngoname :'UNICEF',
    ngoinfo:'UNICEF is currently advocating for children rights and education rights in Afghanistan. They also have provided necessities to over 1.7 million children and families in need.',
  },
  {
    ngoname:'Women for Afghan Women',
    ngoinfo:'WAW have helped over 1.6 million refugees and evacuees settle into their new lives in the U.S. Recently, their programs have had a 300% increase in requests after NATO troops withdrew from Afghanistan.',
  },
  {
    ngoname:'The UN Refugee Agency',
    ngoinfo:'With temperatures in Afghanistan decreasing, the UNHCR is providing displaced families with emergency support and planning to deliver solar panels and winter insulation.',
  },
];
