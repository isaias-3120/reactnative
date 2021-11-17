import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProgramarScreen from '../Screens/ProgramarScreen';
import ReactScreen from '../Screens/ReactScreen';
import JavascriptScreen from '../Screens/JavascriptScreen';
import HomeScreen from '../Screens/HomeScreen';


const Stack = createStackNavigator();

export default function StackNavigation1(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="ProgramarScreen" component={ProgramarScreen}
                options={{headerShown:false, headerTitle:'Programar'}}
            />
            <Stack.Screen name="JavascriptScreen" component={JavascriptScreen}
                options={{headerTitle:'Javascript'}}
            />
            <Stack.Screen name="ReactScreen" component={ReactScreen}
                options={{headerTitle:'React'}}
            />

        </Stack.Navigator>

    )
}