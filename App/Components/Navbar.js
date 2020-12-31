import React, {Component} from 'react';
import {View, Text, Image, StyleSheet,TouchableOpacity} from 'react-native';
import Icon from "../Assets/Icon.png"
import Menu from '../Assets/Menu.png'


class Navbar extends Component {
    state = {
        isOpen: false
    }
    render() {
        return (
            <View>
                <View style={styles.sectionContainer}>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={Icon} style={styles.logo}/>
                        <Text style={styles.headerTitle}>derdana</Text>
                        <TouchableOpacity onPress={()=> this.props.navigation.toggleDrawer()}><Image source={Menu} style={styles.menu}/></TouchableOpacity>
                    </View>
                </View>
              {/*  {
                    this.state.isOpen ?
                        <View style={styles.sectionContainer}>
                            <Text style={{color:'red',fontSize: 24}}>TOLGA</Text>
                        </View> :<View style={styles.sectionContainer}>
                            <Text style={{color:'red',fontSize: 24}}>KAYA</Text>
                        </View>
                }*/}

            </View>

        );
    }
}

const styles = StyleSheet.create({

    sectionContainer: {
        paddingHorizontal: 24,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30

    },
    logo: {
        width: 30,
        height: 28,
        marginTop: 20,

    },
    headerTitle: {
        marginTop: 20,
        marginLeft: 10,
        fontSize: 20,
        color: '#234CAD',
        flex: 3
    },
    menu: {
        width: 50,
        height: 50,
        marginTop: 20,
    }
});

export default Navbar;
