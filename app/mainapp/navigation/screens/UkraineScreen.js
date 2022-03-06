import { View, Text, FlatList,Image,StyleSheet, ImageBackground ,TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Header from '/Users/kiarajacob/HACKMERCED/HackMerced7/app/mainapp/components/Header.js';
import SafeViewAndroid from '/Users/kiarajacob/HACKMERCED/HackMerced7/app/mainapp/components/SafeViewAndroid.js';

import ScrollView from 'react-native';
export default function UkraineScreen() {
  return (
    <SafeAreaProvider style={SafeViewAndroid.AndroidSafeArea}>
      <Header />
      <View style={{flex:1}}>
        <ImageBackground source={require("/Users/kiarajacob/HACKMERCED/HackMerced7/app/mainapp/assets/ukraine.png")} style={styles.image}>
          <Text style={styles.text}> HELP SUPPORT THOSE AFFECTED BY THE CRISIS IN UKRAINE</Text>
        </ImageBackground>
        <View style={styles.twobtns}>
          <TouchableOpacity
            style={styles.button}
          >
            <Text style={styles.btntext}>INFO</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
          >
            <Text style={styles.btntext}>NGO</Text>
          </TouchableOpacity>

        </View>
        <FlatList/>
      </View>
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  text:{
    color: 'white',
    fontWeight: "bold",
    fontSize: 12,
    marginTop: 10,
    marginLeft: 2,

  },
  image: {
    height: 200,
    width: '97%',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,

  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    width: 80,
    marginTop: 8,
    borderRadius: 30,
    backgroundColor: 'black',
  },

  btntext:{
    color: "white",
    fontSize: 17,
  },
  
  twobtns:{
    flexDirection:'row',
    justifyContent: 'space-between',
    width: 300,
    alignItems: 'center',
    marginLeft: 60,
  },
})