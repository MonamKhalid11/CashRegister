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

import HeaderComponent from '../../Components/HeaderComponent/HeaderComponent'
import styles from './Styles'
import { useDispatch, useSelector } from 'react-redux'
import { showListing } from '../../redux/actions/listingAction'
const CodePriceChange = ({ navigation }) => {
    const { toggleDrawer } = navigation // <-- drawer's navigation (not from stack)
    const dispatch = useDispatch()
    const [isCode, setIsCode] = useState([
        {
            id: 0,
            C_Num: 1,
            Qty: 1,
            cost: 0.25,
            retail: 0.25,
            isChecked: false,
            grandTotal: 0.10,
            grand: 0
        },
        {
            id: 1,
            C_Num: 2,
            Qty: 1,
            cost: 0.25,
            retail: 0.25,
            isChecked: false,
            grandTotal: 0.2,
            grand: 0

        },
        {
            id: 2,
            C_Num: 3,
            Qty: 1,
            cost: 0.25,
            retail: 0.25,
            isChecked: false,
            grandTotal: 0.9,
            grand: 0

        },
        {
            id: 3,
            C_Num: 4,
            Qty: 1,
            cost: 0.25,
            retail: 0.25,
            isChecked: false,
            grandTotal: 0.75,
            grand: 0

        },
        {
            id: 4,
            C_Num: 5,
            Qty: 1,
            cost: 0.25,
            retail: 0.25,
            isChecked: false,
            grandTotal: 0.25,
            grand: 0

        },
        {
            id: 5,
            C_Num: 6,
            Qty: 1,
            cost: 0.25,
            retail: 0.25,
            isChecked: false,
            grandTotal: 0.25,
            grand: 0

        },
        {
            id: 6,
            C_Num: 7,
            Qty: 1,
            cost: 0.25,
            retail: 0.25,
            isChecked: false,
            grandTotal: 0.25,
            grand: 0

        },
        {
            id: 7,
            C_Num: 8,
            Qty: 1,
            cost: 0.25,
            retail: 0.25,
            isChecked: false,
            grandTotal: 0.25,
            grand: 0
        },
        {
            id: 8,
            C_Num: 9,
            Qty: 1,
            cost: 0.25,
            retail: 0.25,
            isChecked: false,
            grandTotal: 0.25,
            grand: 0
        },
        {
            id: 9,
            C_Num: 10,
            Qty: 1,
            cost: 0.25,
            retail: 0.25,
            isChecked: false,
            grandTotal: 0.25,
            grand: 0

        },
        {
            id: 10,
            C_Num: 11,
            Qty: 1,
            cost: 0.25,
            retail: 0.25,
            isChecked: false,
            grandTotal: 0.25,
            grand: 0
        },
        {
            id: 11,
            C_Num: 12,
            Qty: 1,
            cost: 0.25,
            retail: 0.25,
            isChecked: false,
            grandTotal: 0.25,
            grand: 0
        }

    ])
    dispatch(showListing(
        isCode
    ))

    const updateValuesRedux = () => {
        console.log("showing is submit ", isCode)
        dispatch(showListing(
            isCode
        ))
        alert("Code Price Update Successful")
    }
    return (
        <View style={{ flex: 1 }}>
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

            <View style={{ flex: 0.9 }}>
                <FlatList
                    data={isCode}
                    // numColumns={3}
                    keyExtractor={item => item.id}
                    renderItem={({ item, index }) =>
                        <View style={styles.flatlistView}>
                            <Text style={styles.costStyler}>Code # $:</Text>
                            <TextInput keyboardType='number-pad' style={styles.textInputStyle}>
                                <Text style={styles.costStyler}>{item.cost}</Text>
                            </TextInput>
                            <TextInput keyboardType='number-pad' style={styles.textInputStyle}
                                onChangeText={(values) => {
                                    item.retail = parseFloat(values)
                                }}
                            >
                                <Text style={styles.costStyler}>{item.retail}</Text>

                            </TextInput>
                            <View style={styles.checkBoxStyle}>
                                <Check name="check" size={30} color="green" />
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
                    onPress={updateValuesRedux}
                />
            </View>

        </View>
    )


}
export default CodePriceChange;