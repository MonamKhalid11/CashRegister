import React, { useEffect, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux'


const AboutUs = ({ navigation }) => {
    const { toggleDrawer } = navigation // <-- drawer's navigation (not from stack)
    const tokenChecked = useSelector(state => state?.listing?.tokenChecked)
    const { width } = useWindowDimensions();
    const [first, setFirst] = useState(false)

    useEffect(() => {
        if (tokenChecked == "peppermint") {
            setFirst(true)
        } else if (tokenChecked == "givingtree") {
            setFirst(false)
        }
    }, [])

    const source = {
        html: `
      <p style='text-align:center;font-size:20px;font-weight:'bold';>
      Peppermint Lane is an in-school shopping program that offers gift items at reasonable prices for everyone on a child's shopping list. Our goal is to provide quality merchandise and superior customer service for your Holiday Shop. Please contact us for more information at 631-804-2762 or
        <a href="url">mkarusch@gmail.com</a>
      </p>`
    };
    const source2 = {
        html: `
      <p style='text-align:center;font-size:20px;font-weight:'bold';>
      The Giving Tree is an in-school shopping program that offers gift items at reasonable prices for everyone on a child's shopping list. Our goal is to provide quality merchandise and superior customer service for your Holiday Shop. Please contact us for more information at 502-592-5325 or
        <a href="url">JoysGifts4Kids@aol.com</a>
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
                        source={first ? source : source2}
                    />
                </View>


            </View>






        </View>
    )

}
export default AboutUs