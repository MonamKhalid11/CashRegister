import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View, TextInput, Button, Touchable, TouchableOpacity
} from 'react-native';
import HeaderComponent from '../../Components/HeaderComponent/HeaderComponent'
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP } from 'react-native-responsive-screen';
import styles from './Styles'

const ForgetPassword = ({ navigation }) => {
    const { toggleDrawer } = navigation // <-- drawer's navigation (not from stack)

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 0.08, marginTop: wp(7), }}>
                <HeaderComponent
                    CashRegister={"ForgetPassword"}
                    openDrawer={toggleDrawer}
                />
            </View>

            <View style={styles.viewTextInput}>
                <View style={styles.viewForget}>

                    <Text style={styles.forgetText}>Please enter new password</Text>
                </View>

                <TextInput style={styles.placeHolderText} placeholderTextColor={"grey"} placeholder="New Password" />
                <TextInput style={styles.placeHolderText} placeholderTextColor={"grey"} placeholder="Confirm Password" />

                <TouchableOpacity
                    style={styles.btnStyle}
                >
                    <Text style={styles.btnText}>Submit</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.lastView}>
                <Text style={styles.textHoliday}>Peppermint lane Holidays Shop</Text>
            </TouchableOpacity>

        </View>
    )

}

export default ForgetPassword