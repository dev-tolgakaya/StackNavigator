import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
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

const  NavigationDrawerStructure = (props)=> {
    //Structure for the navigatin Drawer
    const toggleDrawer = () => {
        //Props to open/close the drawer
        props.navigationProps.toggleDrawer();
    };

    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={()=> toggleDrawer()}>
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

function firstScreenStack({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="HomePage">
            <Stack.Screen
                name="HomePage"
                component={HomePage}
                options={{
                    headerLeft: ()=>
                        <NavigationDrawerStructure
                            navigationProps={navigation}
                        />,
                    headerStyle: {
                        backgroundColor: '#f4511e', //Set Header color
                    },
                    headerShown: true

                }}
            />
        </Stack.Navigator>
    );
}

function secondScreenStack({ navigation }) {
    return (
        <Stack.Navigator
            initialRouteName="PublishPage"
            screenOptions={{
                headerLeft: ()=>
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

function thirdScreenStack({ navigation }) {
    return (
        <Stack.Navigator
            initialRouteName="SuccessPage"
            screenOptions={{
                headerLeft: ()=>
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
        <NavigationContainer>
            <Drawer.Navigator
                drawerContentOptions={{
                    activeTintColor: '#e91e63',
                    itemStyle: { marginVertical: 5 },
                }}>
                <Drawer.Screen
                    name="HomePage"
                    options={{ drawerLabel: 'Homepage' }}
                    component={firstScreenStack} />
                <Drawer.Screen
                    name="PublishPage"
                    options={{ drawerLabel: 'Publishpage' }}
                    component={secondScreenStack} />
                <Drawer.Screen
                    name="SuccessPage"
                    options={{ drawerLabel: 'SuccessPage' }}
                    component={thirdScreenStack} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default App;




// function NavStack() {
//     return (
//         <Stack.Navigator
//             initialRouteName="HomePage"
//             screenOptions={{
//                 headerShown: false
//             }}
//         >
//             <Stack.Screen name="HomePage" component={HomePage} />
//             <Stack.Screen name="Publish" component={PublishPage} />
//             <Stack.Screen name="Success" component={SuccessPage} />
//         </Stack.Navigator>
//     );
//
// }

/*export default function App() {
    return (
            <NavigationContainer>
                <NavStack />
            </NavigationContainer>
    );
}*/




