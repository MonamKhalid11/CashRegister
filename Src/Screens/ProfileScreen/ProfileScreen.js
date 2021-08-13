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
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import styles from './Styles'
import AppInput from '../../Components/InputComp/inputComp'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'


const ProfileScreen = ({ navigation }) => {
    const { toggleDrawer } = navigation // <-- drawer's navigation (not from stack)


    return (
        <KeyboardAwareScrollView>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 0.08, marginTop: wp(7), }}>
                    <HeaderComponent
                        CashRegister={"Our Profile"}
                        openDrawer={toggleDrawer}

                    />
                </View>


                <View style={styles.firstView} />

                <View style={styles.schoolView}>
                    <View style={styles.innerView}>
                        <Text style={styles.enterSchool}>Please enter your school...</Text>
                    </View>

                </View>


                <View style={styles.melodyView}>
                    <Text style={styles.melodyText1}>Melody</Text>
                    <Text style={styles.melody2}>Melody</Text>


                    <TextInput
                        style={styles.textInput}
                        placeholder="Email Address (Optional)"
                        placeholderTextColor="#DDD"
                    />

                </View>

                <View style={styles.lastView}>
                    <Text style={styles.textPeppermint} >Peppermint Lane Holiday Shop</Text>
                </View>



            </View>
        </KeyboardAwareScrollView>
    )


}
export default ProfileScreen;