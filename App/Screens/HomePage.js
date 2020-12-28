import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    StyleSheet,
    TextInput,
} from 'react-native';
import next from '../Assets/next.png';
import Navbar from './Navbar';

class HomePage extends Component {
    render() {
        return (
            <View style={styles.body}>
                <Navbar/>
                <View style={styles.container}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Sen de derdini paylaş.."
                    />
                    <View
                        style={styles.imageContainer}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Publish')}>
                            <Image source={next} style={styles.buttonNext}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        padding: 10,
        borderRadius: 20,
        margin: 20,
        backgroundColor: 'white',
    },
    buttonNext: {
        width: 45,
        height: 45,
    },
    textInput: {
        flex: 9,
        fontSize: 20,
        fontWeight: 'bold'
    },
    imageContainer: {
        flex: 3,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    body: {
        backgroundColor: '#D6E3F9',
        height: 1000
    }
});

export default HomePage;
