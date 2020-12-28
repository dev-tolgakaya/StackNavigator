import React, {Component} from 'react';
import {View, StyleSheet, Text,TouchableOpacity,Image} from 'react-native';
import Navbar from './Navbar'
import Input from './Input';
import ok from '../Assets/ok.png'


class SuccessPage extends Component {
    render() {
        return (
            <View style={styles.body}>
                <Navbar/>
                <Input/>

                <View style={styles.imageContainer}>
                    <Image style={styles.imageStyle} source={ok}/>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text1}>Derdini Paylaştın!</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text2}>Onaylandıktan sonra yayınlanacak!</Text>
                </View>
                <TouchableOpacity  onPress={()=>this.props.navigation.navigate('HomePage')} style={styles.buttonContainer}>
                    <Text style={styles.homepageBtnText}>Anasayfaya Dön</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    imageContainer: {
        paddingHorizontal: 15,
        padding: 10,
        alignItems :'center',
        justifyContent:'center'
    },
    buttonContainer: {
        marginTop:50,
        flexDirection: 'row',
        paddingHorizontal: 15,
        padding: 10,
        margin: 20,
        backgroundColor: '#3B4CDE',
        height: 70,
        borderRadius: 15,
        alignItems:'center',
        justifyContent:'center',
    },
    imageStyle : {
        height:200,
        width:200
    },
    textContainer : {
        alignItems: 'center',
        justifyContent: 'center'
    },
    homepageBtnText : {
        fontSize : 20,
        color:'white'
    },
    text1 : {
        fontSize:28,
        color:'#3B4CDE',
        fontWeight: 'bold'
    },
    text2 : {
        fontSize:20,
        color:'#3B4CDE',
        fontWeight: 'bold'
    },
    body: {
        backgroundColor: '#D6E3F9',
        height: 1000
    }
})


export default SuccessPage;
