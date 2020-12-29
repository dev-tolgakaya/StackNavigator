import React, {Component} from 'react';
import {View, StyleSheet, TextInput, Text, TouchableOpacity, Image} from 'react-native';
import Navbar from '../Components/Navbar'
import Input from "../Components/Input"
import IconBtn from '../Assets/IconBtn.png'
import Switch from '../Assets/Switch.png'

class HomePage extends Component {

    render() {
        return (
            <View style={styles.body}>
                <Navbar/>
                <Input/>
                <Text style={styles.textLabel}>Başlık</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        multiline={true}
                    />
                </View>
                <Text style={styles.textLabel}>Açıklama</Text>
                <View style={styles.TextAria}>
                    <TextInput
                        style={styles.textInput}
                        multiline={true}
                        numberOfLines={10}
                    />
                </View>
                <View style={styles.switchContainer}>
                    <Image source={Switch}/>
                    <Text style={styles.switchText}>Kullanım ve gizlilik koşullarını kabul ediyorum.</Text>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Success')}
                                  style={styles.buttonContainer}>
                    <Text style={styles.publishButton}>Gönder</Text>
                    <Image style={{width:10,height:17}} source={IconBtn}/>
                </TouchableOpacity>
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
        marginTop: 0,
        backgroundColor: 'white',
        height: 70,
        borderRadius: 15,
        alignItems: 'center'
    },
    TextAria: {
        paddingHorizontal: 15,
        padding: 10,
        margin: 20,
        marginTop: 0,
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
        height: 45,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textLabel: {
        paddingHorizontal: 13,
        marginTop: 20,
        fontSize: 15,
        color: '#234CAD',
    },
    textInput: {
        flex: 9,
        fontSize: 20,
        fontWeight: 'bold'
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    switchText: {
        fontSize: 15,
        color: '#234CAD'
    },
    publishButton: {
        fontSize: 24,
        color: 'white',

    },
    body: {
        backgroundColor: '#F2F6FF',
        height: 1000
    }
})

export default HomePage;
