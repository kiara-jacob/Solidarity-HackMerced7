import { View, Text, FlatList,Image,StyleSheet, ImageBackground ,TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from '/Users/kiarajacob/HACKMERCED/HackMerced7/app/mainapp/components/Header.js';
import SafeViewAndroid from '/Users/kiarajacob/HACKMERCED/HackMerced7/app/mainapp/components/SafeViewAndroid.js';
import styles from '/Users/kiarajacob/HACKMERCED/HackMerced7/app/mainapp/navigation/screens/screenstyles.js';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import ScrollView from 'react-native';
export default function COVIDScreen() {
  return (
    <SafeAreaProvider style={SafeViewAndroid.AndroidSafeArea}>
      <Header />
      <View>
        <ImageBackground source={require("/Users/kiarajacob/HACKMERCED/HackMerced7/app/mainapp/assets/covid.png")} style={styles.image} imageStyle={{ borderRadius: 18 }}>
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
                <TouchableOpacity style={styles.icon}>
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
    ngoname: "World Health Organization",
    ngoinfo:"WHO is leading a Covid-19 Solidarity Response Fund to coordinate global efforts",
  },

  {
    ngoname :'Direct Relief',
    ngoinfo:'Their teams have provided 12+ million vaccines, 3 billion dollars in medical aid, and lots more to countries around the world.',
  },
  {
    ngoname:'UNICEF',
    ngoinfo:'Millions of children and families have received vaccines, nutrition, education, social protection services, and necessities through UNICEF.',
  },
  {
    ngoname:'World Vision',
    ngoinfo:'The World Vision team have reached 72 million people in need providing emergency food, personal protective equipment, hand washing supplies, and hygiene kits.',
  },
];
