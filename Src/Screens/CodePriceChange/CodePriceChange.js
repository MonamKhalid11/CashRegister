import React, { useState, useEffect } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View, FlatList, TouchableOpacity, Modal, TextInput
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP } from 'react-native-responsive-screen';
import Check from 'react-native-vector-icons/Entypo';
import BtnComponent from '../../Components/BtnComp/BtnComp'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import HeaderComponent from '../../Components/HeaderComponent/HeaderComponent'
import styles from './Styles'
import { useDispatch, useSelector } from 'react-redux'
import { showListing, setCodePriceChange } from '../../redux/actions/listingAction'
import CheckBox from '@react-native-community/checkbox'
import Orientation from 'react-native-orientation';
import { useFocusEffect } from '@react-navigation/native';

const CodePriceChange = ({ navigation }) => {
    const codePriceList = useSelector(state => state.listing.codePriceList)
    const { toggleDrawer } = navigation // <-- drawer's navigation (not from stack)
    const dispatch = useDispatch()
    let temp = new Array();
    const updateValuesRedux = () => {
        codePriceList.map((item) => {
            if (item.isChecked == true) {
                temp.push(item)
            }
        })
        dispatch(setCodePriceChange(codePriceList
        ))
        dispatch(showListing(
            temp
        ))
        temp = [];
        alert("Code Price Update Successful")
    }
    useFocusEffect(() => {
        Orientation.lockToPortrait();
    });
    return (
        <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.HeaderView}>
                <HeaderComponent
                    CashRegister={"Code Price Change"}
                    openDrawer={toggleDrawer}
                />
            </View>
            <View style={styles.costStyle}>
                <Text style={styles.topText}>Cost</Text>
                <Text style={styles.topText}>Retail</Text>
            </View>
            <View style={{ flex: 1 }}>
                <FlatList
                    data={codePriceList}
                    extraData={codePriceList}
                    keyExtractor={item => item.id}
                    renderItem={({ item, index }) =>
                        <View style={styles.flatlistView}>
                            <Text style={styles.costStyler}>Code {item.C_Num}:</Text>
                            <TextInput editable={false} keyboardType='decimal-pad' style={styles.textInputStyle}
                                onChangeText={(value) => {
                                    item.cost = parseFloat(value)
                                }}>
                                <Text style={styles.costStyler}>{item.cost}</Text>
                            </TextInput>
                            <TextInput keyboardType='decimal-pad' style={styles.textInputStyle}
                                onChangeText={(values) => {
                                    item.retail = parseFloat(values)
                                }}
                            >
                                <Text style={styles.costStyler}>{item.retail}</Text>
                            </TextInput>
                            <View
                                style={styles.checkBoxStyle}
                            >
                                <CheckBox
                                    boxType={"square"}
                                    onTintColor={"green"}
                                    onCheckColor={"green"}
                                    value={item.isChecked}
                                    onValueChange={(setSelection) => {
                                        item.isChecked = setSelection
                                    }}
                                    style={styles.checkbox}
                                />
                            </View>
                        </View>
                    }
                />
            </View>
            <View style={{ height: hp(10), width: wp(100) }}>
                <BtnComponent
                    Text={"Submit"}
                    width={wp(80)}
                    height={hp(7)}
                    onPress={() => updateValuesRedux()}
                />
            </View>
        </KeyboardAwareScrollView>
    )


}
export default CodePriceChange;