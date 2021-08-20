import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Setting from './DrawerSeeting';
import CodePriceCHange from '../../Screens/CodePriceChange/CodePriceChange'
import ForgetPassword from '../../Screens/ForgetPassword/ForgetPassword'
import AboutUs from '../../Screens/AboutUs/AboutUs'
import ProfileScreen from '../../Screens/ProfileScreen/ProfileScreen'
import MainScreen from '../../Screens/MainScreen/MainScreen'
import Reports from '../../Screens/Reports/Reports'
import { widthPercentageToDP } from 'react-native-responsive-screen';



const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                    drawerStyle: {
                    width: widthPercentageToDP(80),
                    },
                }}
            drawerContent={(props) => <Setting {...props}/>}
        >
            <Drawer.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
            <Drawer.Screen name="CodePriceChange" component={CodePriceCHange} options={{ headerShown: false }} />
            <Drawer.Screen name="ForgetPassword" component={ForgetPassword} options={{ headerShown: false }} />
            <Drawer.Screen name="AboutUs" component={AboutUs} options={{ headerShown: false }} />
            <Drawer.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
            <Drawer.Screen name="Reports" component={Reports} options={{ headerShown: false }} />


        </Drawer.Navigator>

    );
}