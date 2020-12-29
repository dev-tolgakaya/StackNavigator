import React, {Component} from 'react';
import {StyleSheet, Text, View} from "react-native";

class Todo extends Component {
    render() {
        const {shortName,topicTitle,topicText}=this.props
        return (
            <View style={styles.todoContainer}>
                <View style={styles.todoSection}>
                    <View style={styles.shortName}>
                        <Text style={styles.shortNameText}>{shortName}</Text>
                    </View>
                    <View style={styles.todoTopic}>
                        <Text style={styles.todoTopicTitleText}>{topicTitle}</Text>
                        <Text style={styles.todoTopicText}>{topicText}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    todoContainer: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        padding: 10,
        borderRadius: 20,
        margin: 20,
        marginTop:0,
        backgroundColor: 'white',
        height: 100
    },
    todoSection : {
        flexDirection:'row',
        padding:10,textAlign: 'center',
        justifyContent:'center'
    },
    shortName:{
        borderRadius:100,
        backgroundColor:'#F2F6FF',
        textAlign : 'center',
        justifyContent:'center',
        width: 60,
        height:60,
    },
    shortNameText : {
        fontSize: 18,
        textAlign: 'center',
        justifyContent:'center',
        color:'#234CAD'
    },
    todoTopic:{
        textAlign : 'center',
        justifyContent:'center',
        marginLeft:20
    },
    todoTopicTitleText : {
        fontSize: 16,
        color:'#234CAD'
    },
    todoTopicText:{
        fontSize: 12,
        color:'#234CAD',
        marginTop: 5
    }
})


export default Todo;
