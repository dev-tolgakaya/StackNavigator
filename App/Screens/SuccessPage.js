import React, {Component} from 'react';
import {View, StyleSheet, Text,TouchableOpacity,Image} from 'react-native';
import Navbar from '../Components/Navbar'
import Input from '../Components/Input';
import Thumbs from '../Assets/Thumbs.png'
import Todo from '../Components/Todo';


class SuccessPage extends Component {
    render() {
        return (
            <View style={styles.body}>
                <Navbar navigation={this.props.navigation}/>
                <Input/>

                <View style={styles.imageContainer}>
                    <Image style={styles.imageStyle} source={Thumbs}/>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text1}>Derdini Paylaştın!</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text2}>Onaylandıktan sonra yayınlanacak!</Text>
                </View>
                <View style={{marginTop:20}}>
                    <Todo shortName='AB'
                          title='Hayatımın en berbat günü'
                          body='Sanırım dünyada gerçekten sıkıntılı insanla..'
                    />
                </View>
                <TouchableOpacity  onPress={()=>this.props.navigation.navigate('HomePage')} style={styles.buttonContainer}>
                    <Text style={styles.homepageBtnText}>Anasayfaya Dön</Text>
                </TouchableOpacity>
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
    },
    imageStyle : {
        height:150,
        width:150
    },
    textContainer : {
        alignItems: 'center',
        justifyContent: 'center'
    },
    homepageBtnText : {
        fontSize : 20,
        color:'white'
    },
    text1 : {
        fontSize:24,
        color:'#234CAD',
        marginTop: 10
    },
    text2 : {
        fontSize:18,
        color:'#234CAD',
        marginTop: 10
    },
    body: {
        backgroundColor: '#F2F6FF',
        height: 1000
    }
})


export default SuccessPage;
