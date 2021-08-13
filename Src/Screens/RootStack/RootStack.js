import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import MainScreen from '../MainScreen/MainScreen'

import { DrawerNavigator } from '../../Components/DrawerNavigation/Drawer'

const Stack = createNativeStackNavigator();

export default class RootStack extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator >
                    <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
