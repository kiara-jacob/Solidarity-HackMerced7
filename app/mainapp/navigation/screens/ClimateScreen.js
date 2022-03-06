import { View, Text, FlatList,Image,StyleSheet, ImageBackground ,TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from '/Users/kiarajacob/HACKMERCED/HackMerced7/app/mainapp/components/Header.js';
import SafeViewAndroid from '/Users/kiarajacob/HACKMERCED/HackMerced7/app/mainapp/components/SafeViewAndroid.js';
import styles from '/Users/kiarajacob/HACKMERCED/HackMerced7/app/mainapp/navigation/screens/screenstyles.js';
import ScrollView from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
export default function ClimateScreen() {
  return (
    <SafeAreaProvider style={SafeViewAndroid.AndroidSafeArea}>
      <Header />
      <View>
        <ImageBackground source={require("/Users/kiarajacob/HACKMERCED/HackMerced7/app/mainapp/assets/climate.png")} style={styles.image} imageStyle={{ borderRadius: 18 }}>
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
    ngoname: "Global Giving",
    ngoinfo:"This organization finances multiple local and global innovative projects with their Climate Action Fund. Donate and support multiple high-impact projects.",
  },

  {
    ngoname :'Clean Air Task Force',
    ngoinfo:'Their focus is to develop policies and technology to decarbonize the energy system countries use today. Their goals include a zero-carbon energy system in electricity, transportation, infrastructure, and industry.',
  },
  {
    ngoname:'Coalition for Rainforest Nations',
    ngoinfo:'Their donations go to maintaining and reconstructing rainforests. Recently they created and launched REDD+, a conservation mechanism that protects 90% of tropical rainforests around the world.',
  },
  {
    ngoname:'EarthJustice',
    ngoinfo:'EarthJustice has a mission to achieve 100% clean energy through the power of changing policies and laws. Their work has saved wildlands, protected wildlife and human health, and fought against oil spills.',
  },
];

