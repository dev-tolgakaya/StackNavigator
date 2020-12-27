import React, {Component} from 'react';
import {View, StyleSheet, TextInput, Text,TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Navbar from './Navbar'
import Input from "./Input"

class HomePage extends Component {

    render() {
        return (
            <View style={{backgroundColor: "#D6E3F9", height: 1000}}>
                <Navbar/>
                <Input/>
                <Text style={{paddingHorizontal: 20, marginTop: 20, fontSize: 15,color: '#3B4CDE', fontWeight: 'bold'}}>Başlık</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={{flex: 9, fontSize: 20, fontWeight: 'bold'}}
                        multiline={true}
                    />
                </View>
                <Text style={{paddingHorizontal: 20, marginTop: 20, fontSize: 15,color: '#3B4CDE', fontWeight: 'bold'}}>Açıklama</Text>
                <View style={styles.TextAria}>
                    <TextInput
                        style={{flex: 9, fontSize: 20, fontWeight: 'bold'}}
                        multiline={true}
                        numberOfLines={10}
                    />
                </View>
                <TouchableOpacity  onPress={()=>this.props.navigation.navigate('Success')} style={styles.buttonContainer}><Text style={{ fontSize : 22,color:'white'}}>PAYLAŞ</Text></TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        padding: 10,
        margin: 20,
        backgroundColor: 'white',
        height: 70,
        borderRadius: 15,
        alignItems:'center'
    },
    TextAria: {
        paddingHorizontal: 15,
        padding: 10,
        margin: 20,
        backgroundColor: 'white',
        height: 180,
        borderRadius: 15,
    },
    buttonContainer: {
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

export default HomePage;
