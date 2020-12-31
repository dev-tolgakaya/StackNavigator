import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'
import * as StoreElements from './App/Redux/Store/store'

import HomePage from './App/Screens/HomePage';
import PublishPage from './App/Screens/PublishPage';
import SuccessPage from './App/Screens/SuccessPage';
import {
    View,
    TouchableOpacity,
    Image
} from 'react-native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
    const toggleDrawer = () => {
        props.navigationProps.toggleDrawer();
    };
    return (
        <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => toggleDrawer()}>
                {/*Donute Button Image */}
                <Image
                    source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png'}}
                    style={{
                        width: 25,
                        height: 25,
                        marginLeft: 5
                    }}
                />
            </TouchableOpacity>
        </View>
    );
}

function firstScreenStack({navigation}) {
    return (
        <Stack.Navigator initialRouteName="HomePage">
            <Stack.Screen
                name="HomePage"
                component={HomePage}
                options={{
                    headerLeft: () =>
                        <NavigationDrawerStructure
                            navigationProps={navigation}
                        />,
                    headerStyle: {
                        backgroundColor: '#f4511e', //Set Header color
                    },
                    headerShown: false

                }}
            />
        </Stack.Navigator>
    );
}

function secondScreenStack({navigation}) {
    return (
        <Stack.Navigator
            initialRouteName="PublishPage"
            screenOptions={{
                headerLeft: () =>
                    <NavigationDrawerStructure
                        navigationProps={navigation}
                    />,
                headerStyle: {
                    backgroundColor: '#f4511e', //Set Header color
                },
                headerTintColor: '#fff', //Set Header text color
                headerTitleStyle: {
                    fontWeight: 'bold', //Set Header text style
                }
            }}>
            <Stack.Screen
                name="PublishPage"
                component={PublishPage}
                options={{
                    title: 'PublishPage', //Set Header Title

                }}/>

        </Stack.Navigator>
    );
}

function thirdScreenStack({navigation}) {
    return (
        <Stack.Navigator
            initialRouteName="SuccessPage"
            screenOptions={{
                headerLeft: () =>
                    <NavigationDrawerStructure
                        navigationProps={navigation}
                    />,
                headerStyle: {
                    backgroundColor: '#f4511e', //Set Header color
                },
                headerTintColor: '#fff', //Set Header text color
                headerTitleStyle: {
                    fontWeight: 'bold', //Set Header text style
                }
            }}>
            <Stack.Screen
                name="SuccessPage"
                component={SuccessPage}
                options={{
                    title: 'SuccessPage', //Set Header Title

                }}/>

        </Stack.Navigator>
    );
}

function App() {
    return (
        <Provider store={StoreElements.store}>
            <PersistGate persistor={StoreElements.persistedStore} loading={null}>
                <NavigationContainer>
                    <Drawer.Navigator
                        drawerContentOptions={{
                            activeTintColor: '#e9e61e',
                            itemStyle: {marginVertical: 5},
                        }}>
                        <Drawer.Screen
                            name="HomePage"
                            options={{drawerLabel: 'Homepage'}}
                            component={HomePage}/>
                        <Drawer.Screen
                            name="PublishPage"
                            options={{drawerLabel: 'Publishpage'}}
                            component={PublishPage}/>
                        <Drawer.Screen
                            name="SuccessPage"
                            options={{drawerLabel: 'SuccessPage'}}
                            component={SuccessPage}/>
                    </Drawer.Navigator>
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
}

export default App;







