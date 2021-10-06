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
import { showListing } from '../../redux/actions/listingAction'
import CheckBox from '@react-native-community/checkbox'


const CodePriceChange = ({ navigation }) => {
    const { toggleDrawer } = navigation // <-- drawer's navigation (not from stack)
    const dispatch = useDispatch()
    const [isCode, setIsCode] = useState([
        {
            id: 0,
            C_Num: 1,
            Qty: 0,
            cost: 0.25,
            retail: 0.25,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 1,
            C_Num: 2,
            Qty: 0,
            cost: 0.25,
            retail: 0.25,
            isChecked: true,
            grandTotal: 0,
            grand: 0,

        },
        {
            id: 2,
            C_Num: 3,
            Qty: 0,
            cost: 0.25,
            retail: 0.25,
            isChecked: true,
            grandTotal: 0,
            grand: 0,

        },
        {
            id: 3,
            C_Num: 4,
            Qty: 0,
            cost: 0.25,
            retail: 0.25,
            isChecked: true,
            grandTotal: 0,
            grand: 0,

        },
        {
            id: 4,
            C_Num: 5,
            Qty: 0,
            cost: 0.25,
            retail: 0.25,
            isChecked: true,
            grandTotal: 0,
            grand: 0,

        },
        {
            id: 5,
            C_Num: 6,
            Qty: 0,
            cost: 0.25,
            retail: 0.25,
            isChecked: true,
            grandTotal: 0,
            grand: 0,

        },
        {
            id: 6,
            C_Num: 7,
            Qty: 0,
            cost: 0.25,
            retail: 0.25,
            isChecked: true,
            grandTotal: 0,
            grand: 0,

        },
        {
            id: 7,
            C_Num: 8,
            Qty: 0,
            cost: 0.25,
            retail: 0.25,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 8,
            C_Num: 9,
            Qty: 0,
            cost: 0.25,
            retail: 0.25,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 9,
            C_Num: 10,
            Qty: 0,
            cost: 0.25,
            retail: 0.25,
            isChecked: true,
            grandTotal: 0,
            grand: 0,

        },
        {
            id: 10,
            C_Num: 11,
            Qty: 0,
            cost: 0.25,
            retail: 0.25,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 11,
            C_Num: 12,
            Qty: 0,
            cost: 0.25,
            retail: 0.25,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        }

    ])
    dispatch(showListing(
        isCode
    ))
    let temp = new Array();

    const [isSelected, setSelection] = useState(true);
    const updateValuesRedux = () => {
        console.log("showing is submit ", temp)
        isCode.map((item) => {
            if (item.isChecked == true) {
                temp.push(item)
            }
        })
        dispatch(showListing(
            temp
        ))
        temp = [];
        alert("Code Price Update Successful")
    }
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
                    data={isCode}
                    keyExtractor={item => item.id}
                    renderItem={({ item, index }) =>
                        <View style={styles.flatlistView}>
                            <Text style={styles.costStyler}>Code {item.C_Num}:</Text>
                            <TextInput keyboardType='decimal-pad' style={styles.textInputStyle}
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
                                    value={isSelected}
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