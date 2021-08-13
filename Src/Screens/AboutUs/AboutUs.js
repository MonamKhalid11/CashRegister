import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View, TextInput, Button, Touchable, TouchableOpacity, useWindowDimensions
} from 'react-native';
import HeaderComponent from '../../Components/HeaderComponent/HeaderComponent'
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP } from 'react-native-responsive-screen';
import styles from './Styles'
import RenderHtml from 'react-native-render-html';

const AboutUs = ({ navigation }) => {
    const { toggleDrawer } = navigation // <-- drawer's navigation (not from stack)

    const { width } = useWindowDimensions();

    const source = {
        html: `
      <p style='text-align:center;font-size:20px;font-weight:'bold';>
      The Peppermint Lane Holiday Shop is an in-school shopping program that offerds gift items 
      at reasonable prices for everyone ona  child's shopping list. Pur goal is to provide
       quality merchandise and superior customer service for your Holiday Shop. 
       Please contact us for for more i n f o r m a t i o n at  
        <a href="url">mkarusch@gmail.com</a>
      </p>`
    };


    return (
        <View style={{ flex: 1 }}>
            <View style={styles.headerView}>
                <HeaderComponent
                    CashRegister={"About Us"}
                    openDrawer={toggleDrawer}

                />
            </View>

            <View style={styles.htmlView}>

                <View style={styles.innerView}>
                    <RenderHtml
                        contentWidth={width}
                        source={source}
                    />
                </View>


            </View>






        </View>
    )

}
export default AboutUs