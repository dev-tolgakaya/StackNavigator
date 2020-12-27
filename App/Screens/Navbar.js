import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Logo from "../Assets/logo.png"



class Navbar extends Component {
    render() {
        return (
            <View style={styles.sectionContainer}>
                <View style={{flexDirection:'row'}}>
                <Image  source={Logo} style={styles.logo}></Image>
                <Text style={{marginTop:30,marginLeft:10,fontSize:30,fontWeight: 'bold',color:'#3B4CDE'}}>derdana</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({

    sectionContainer: {
        paddingHorizontal: 24,
        justifyContent : "center",
        alignItems : "flex-start"

    },
    logo: {
        width: 50,
        height: 50,
        marginTop: 20,

    }
});

export default Navbar;
