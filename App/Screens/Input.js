import React, {Component} from 'react';
import {StyleSheet, Text,  View} from "react-native";

class Input extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text
                    style={{flex: 9, fontSize: 20, justifyContent: 'center', fontWeight: 'bold', color: '#3B4CDE'}}>
                    Sen de derdini paylaş
                </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        padding: 10,
        margin: 20,
        backgroundColor: 'white',
        height: 70,
        alignItems:'center'
    }
})
export default Input;
