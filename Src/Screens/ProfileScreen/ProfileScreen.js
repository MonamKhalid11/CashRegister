import React, { useState, useEffect } from 'react';
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
import { useDispatch, useSelector } from 'react-redux'
import { saveUser } from '../../redux/actions/listingAction'
import BtnComponent from '../../Components/BtnComp/BtnComp'
import Orientation from 'react-native-orientation';
import { useFocusEffect } from '@react-navigation/native';


const ProfileScreen = ({ navigation }) => {
    const user = useSelector(state => state.listing.user)
    const { toggleDrawer } = navigation // <-- drawer's navigation (not from stack)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch()


    const saveDetails = () => {
        let user = {
            name: name,
            email: email
        }
        dispatch(saveUser(user))
        alert("Saved!")
    }

    useEffect(() => {
        setName(user && user.name)
        setEmail(user && user.email)
    }, [])

    useFocusEffect(() => {
        Orientation.lockToPortrait();
    });

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
                    <TextInput
                        style={styles.textInput}
                        placeholder="Name"
                        value={name}
                        onChangeText={(text) => setName(text)}
                        placeholderTextColor="#000000"
                    />
                    <TextInput
                        style={styles.textInput}
                        value={email}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        onChangeText={(text) => setEmail(text)}
                        placeholder="Email Address (Optional)"
                        placeholderTextColor="#000000"
                    />
                    <BtnComponent
                        Text={"Save"}
                        width={wp(80)}
                        height={hp(7)}
                        marginTop={hp(2)}
                        onPress={saveDetails}
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