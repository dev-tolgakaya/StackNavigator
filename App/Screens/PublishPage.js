import React, {Component} from 'react';
import {View, StyleSheet, TextInput, Text, TouchableOpacity, Image} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addTodo} from '../Redux/Actions/TodoActions';
import Navbar from '../Components/Navbar'
import Input from "../Components/Input"
import IconBtn from '../Assets/IconBtn.png'
import Switch from '../Assets/Switch.png'
import axios from "axios";

class PublishPage extends Component {
    state = {
        shortName: '',
        title: '',
        body: '',
    }

    componentDidMount() {
        this.title = '';
        this.body = '';
    }

    addNewTodo = async () => {
        const {title, body} = this.state
        if (title && body) {
            const newTodo = {
                shortName: 'AB',
                title: title,
                body: body
            }
           /* await fetch('http://localhost:4000/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: newTodo.title,
                    body: newTodo.body,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => console.log(json)).catch(err => console.log(err))*/
            await axios.post("http://localhost:4000/posts", newTodo).then(res=>this.props.addTodo(res.data))
            await this.cleanInputs();
            await this.props.navigation.navigate('SuccessPage');

        } else {
            alert('Lütfen Bütün Alanları Doldurun.')
        }
    }

    cleanInputs() {

        this.topicTitle = '';
        this.topicText = '';
    }

    render() {
        const {title, body} = this.state;
        return (
            <View style={styles.body}>
                <Navbar navigation={this.props.navigation}/>
                <Input/>
                <Text style={styles.textLabel}>Başlık</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        multiline={true}
                        value={title}
                        onChangeText={(title) => this.setState({title})}
                    />
                </View>
                <Text style={styles.textLabel}>Açıklama</Text>
                <View style={styles.TextAria}>
                    <TextInput
                        style={styles.textInput}
                        multiline={true}
                        numberOfLines={10}
                        value={body}
                        onChangeText={(body) => this.setState({body})}
                    />
                </View>
                <View style={styles.switchContainer}>
                    <Image source={Switch}/>
                    <Text style={styles.switchText}>Kullanım ve gizlilik koşullarını kabul ediyorum.</Text>
                </View>
                <TouchableOpacity onPress={this.addNewTodo}
                                  style={styles.buttonContainer}>
                    <Text style={styles.publishButton}>Gönder</Text>
                    <Image style={styles.buttonIconStyle} source={IconBtn}/>
                </TouchableOpacity>
            </View>
        );
    }
}


const mapStateToProps = (state) => {
    const {todos} = state
    return {todos}
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        addTodo,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(PublishPage);


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
    buttonIconStyle: {
        width: 10,
        height: 17,
        position: 'absolute',
        right: 15
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


