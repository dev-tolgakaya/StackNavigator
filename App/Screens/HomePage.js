import React, {Component} from 'react';
import {View, TouchableOpacity, Image, StyleSheet, TextInput} from 'react-native';
import next from '../Assets/next.png';
import Navbar from './Navbar'

class HomePage extends Component {
    render() {
        return (
            <View style={{backgroundColor: "#D6E3F9", height: 1000}}>
                <Navbar/>
                <View style={styles.container}>
                    <TextInput
                        style={{flex: 9, fontSize: 20,fontWeight: 'bold'}}
                        placeholder="Sen de derdini paylaş.."
                    />
                    <View style={{flex: 3, alignItems: 'flex-end', justifyContent: "center"}}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Publish')}><Image source={next} style={styles.buttonNext}/></TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 30,
        paddingHorizontal: 15,
        padding: 10,
        borderRadius: 20,
        margin: 20,
        backgroundColor: 'white',
    },
    buttonNext: {
        width: 60,
        height: 60,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        opacity: 0.3
    }
})

export default HomePage;
