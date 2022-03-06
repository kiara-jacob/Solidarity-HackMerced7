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
          <Text style={styles.text}>Donate and help support those displaced by the war on Ukraine. Over 1.2 million have fled the country and currently seeking refugee all over the world.</Text>
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
   
    ngoname: "Come Back Alive",
    ngoinfo:"Support Ukrainian forces with training and non-lethal equipment in the fight for democracy",
    url: 'https://www.comebackalive.in.ua/',
  },

  {
    ngoname :'Donbas SOS',
    ngoinfo:'Providing those who have relocated, live in warzones, and freed prisoners of war with assistance, legal support, and psychological counseling',
    url: "https://fundraising-hotline.tilda.ws/dsos",
  },
  {
    ngoname:'World Central Kitchen',
    ngoinfo:'Chef José Andrés’ NGO, has set up 24 hour stations in Poland, Romania, Moldova, and Hungary to provide warm meals to refugees fleeing home.',
    url: "https://donate.wck.org/give/393234#!/donation/checkout",
  },
  {
    ngoname:'Global Empowerment Mission',
    ngoinfo:'Help Ukraine refugees with necessities, stable housing, and relocation',
    url: "https://www.globalempowermentmission.org/mission/ukraine-crisis/ ",
  },
   {
    ngoname: "Save the Children",
    ngoinfo:"Directly help children and families with food, water, hygiene kits, psychosocial counseling, and cash assistance",
    url: "https://support.savethechildren.org/site/Donation2?df_id=5751&mfc_pref=T&5751.donation=form1 ",
  },

  {
    ngoname :'International Committee of the Red Cross',
    ngoinfo:'Their team of engineers and scientists are working to give citizens access to clean water and improve living conditions for citizens whose homes have been damaged.',
    url: "https://www.icrc.org/en/donate/ukraine",
  },
]
