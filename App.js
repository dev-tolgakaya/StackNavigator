import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './App/Screens/HomePage';
import PublishPage from './App/Screens/PublishPage';
import SuccessPage from './App/Screens/SuccessPage';


const Stack = createStackNavigator();

function NavStack() {
    return (
        <Stack.Navigator
            initialRouteName="HomePage"
            screenOptions={{
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#D6E3F9',
                },
                headerTintColor: '#3B4CDE',
                headerTitleStyle :{
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen name="HomePage" component={HomePage} />
            <Stack.Screen name="Publish" component={PublishPage} />
            <Stack.Screen name="Success" component={SuccessPage} />
        </Stack.Navigator>
    );

}

export default function App() {
    return (
            <NavigationContainer  style={{backgroundColor: "#D6E3F9", height: 1000}}>
                <NavStack />
            </NavigationContainer>
    );
}




