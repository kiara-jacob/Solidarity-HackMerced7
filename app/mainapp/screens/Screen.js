import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

export default class Screen extends React.component {
    render() {
        return(
            <View style={styles.container}>
                <SafeAreaView style={{flex: 1}}>
                    <TouchableOpacity 
                        style={{alignItems: "flex-end", margin: 16}} 
                        onPress={this.props.navigation.openDrawer}>
                        <FontAwesome5  name="bars" size={24} color="black"/>
                    </TouchableOpacity>
                    <View style={{flex: 1, alignItems:"center", justifyContent: "center"}}>
                        <Text style={{style,text}}>{this.props.name} Screen</Text>
                    </View>
                </SafeAreaView>
            </View>
        )
    }
}