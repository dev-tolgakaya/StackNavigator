import React, {Component} from 'react';
import {View, StyleSheet, TextInput, Text,TouchableOpacity,Image} from 'react-native';
import Navbar from './Navbar'
import Input from "./Input"
import ok from '../Assets/ok.png'


class SuccessPage extends Component {
    render() {
        return (
            <View style={{backgroundColor: "#D6E3F9", height: 1000}}>
                <Navbar/>
                <Input/>
                <View style={styles.imageContainer}>
                    <Image style={{height:300,width:300}} source={ok}/>
                </View>
                <View style={{alignItems: 'center',justifyContent: 'center'}}><Text style={{fontSize:28,color:'#3B4CDE',fontWeight: 'bold'}}>Derdini Paylaştın!</Text></View>
                <View style={{alignItems: 'center',justifyContent: 'center',marginTop:10}}><Text style={{fontSize:20,color:'#3B4CDE',fontWeight: 'bold'}}>Onaylandıktan sonra yayınlanacak!</Text></View>
                <TouchableOpacity  onPress={()=>this.props.navigation.navigate('HomePage')} style={styles.buttonContainer}><Text style={{ fontSize : 20,color:'white'}}>Anasayfaya Dön</Text></TouchableOpacity>
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
    }
})


export default SuccessPage;
