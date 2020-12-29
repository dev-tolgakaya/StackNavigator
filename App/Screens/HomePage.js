import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    StyleSheet,
    TextInput,
    ScrollView,
    SafeAreaView
} from 'react-native';
import Submit from '../Assets/Submit.png';
import Navbar from '../Components/Navbar';
import Todo from '../Components/Todo';


class HomePage extends Component {
    render() {
        return (
/*            <SafeAreaView>
                <ScrollView >*/
                    <View style={styles.body}>
                        <Navbar/>
                        <View style={styles.container}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Sen de derdini paylaş"
                                placeholderTextColor="#234CAD"

                            />
                            <View
                                style={styles.imageContainer}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('Publish')}>
                                    <Image source={Submit} style={styles.buttonNext}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Todo shortName='AB'
                              topicTitle='Hayatımın en berbat günü'
                              topicText='Sanırım dünyada gerçekten sıkıntılı insanla..'
                        />
                        <Todo shortName='ED'
                              topicTitle='Kim ne yaptı bilmiyorum'
                              topicText='Baktım ki herkes bişiler anlatıyor.. ben de…'
                        />
                        <Todo shortName='TA'
                              topicTitle='Nasıl hızlı kurtulurum?'
                              topicText='Fikirlerinizi bekliyorum, nasıl kurtulurum bu…'
                        />
                        <Todo shortName='AB'
                              topicTitle='Hayatımın en berbat günü'
                              topicText='Sanırım dünyada gerçekten sıkıntılı insanla..'
                        />
                        <Todo shortName='ED'
                              topicTitle='Kim ne yaptı bilmiyorum'
                              topicText='Baktım ki herkes bişiler anlatıyor.. ben de…'
                        />
                        <Todo shortName='TA'
                              topicTitle='Nasıl hızlı kurtulurum?'
                              topicText='Fikirlerinizi bekliyorum, nasıl kurtulurum bu…'
                        />

                    </View>
     /*           </ScrollView>
            </SafeAreaView>*/
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

export default HomePage;
