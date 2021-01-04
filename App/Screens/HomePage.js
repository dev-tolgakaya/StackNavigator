import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    StyleSheet,
    TextInput,
    ScrollView,
    Text
} from 'react-native';
import Submit from '../Assets/Submit.png';
import Navbar from '../Components/Navbar';
import Todos from "../Components/Todos";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteTodo,setTodo} from '../Redux/Actions/TodoActions';
import {posts} from "../../Api/api";


class HomePage extends Component {
    clean = () => {
        this.props.deleteTodo()
    }

    componentDidMount = async () =>  {
        /*fetch('http://localhost:4000/posts')
            .then((response) => response.json())
            .then((json) => this.props.setTodo(json));*/
        await posts().then(res=>this.props.setTodo(res.data)).catch(err => console.log(err))
    }

    render() {

        return (
            <>
                <ScrollView>
                    <View style={styles.body}>
                        <Navbar navigation={this.props.navigation}/>
                        <View style={styles.container}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Sen de derdini paylaş"
                                placeholderTextColor="#234CAD"

                            />
                            <View
                                style={styles.imageContainer}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('PublishPage')}>
                                    <Image source={Submit} style={styles.buttonNext}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Todos/>
                        <TouchableOpacity
                            onPress={this.clean}>
                            <Text>Temizle</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </>
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
        fontSize: 18,
        opacity: 0.5
    },
    imageContainer: {
        flex: 3,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    body: {
        backgroundColor: '#F2F6FF',
        height: 1000
    }
});

const mapStateToProps = (state) => {
    const {todos} = state
    return {todos}
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        deleteTodo,setTodo
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);




