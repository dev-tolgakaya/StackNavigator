import React, {Component} from 'react';
import {View, StyleSheet, TextInput, Text, TouchableOpacity} from 'react-native';
import Navbar from './Navbar'
import Input from "./Input"

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
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Success')}
                                  style={styles.buttonContainer}><Text
                    style={styles.publishButton}>PAYLAŞ</Text></TouchableOpacity>
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
        alignItems: 'center'
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    textLabel: {
        paddingHorizontal: 20,
        marginTop: 20,
        fontSize: 15,
        color: '#3B4CDE',
        fontWeight: 'bold'
    },
    textInput: {
        flex: 9,
        fontSize: 20,
        fontWeight: 'bold'
    },
    publishButton : {
        fontSize: 22,
        color: 'white'
    },
    body: {
        backgroundColor: '#D6E3F9',
        height: 1000
    }
})

export default HomePage;
