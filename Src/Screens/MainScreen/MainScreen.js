import React, { useState, useEffect, memo, useRef } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View, FlatList, TouchableOpacity, Modal, Touchable, Alert
} from 'react-native';
import HeaderComponent from '../../Components/HeaderComponent/HeaderComponent'
import Images from '../../Assets/Images/Images'
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP } from 'react-native-responsive-screen';
import Cross from 'react-native-vector-icons/Entypo';
import CrossSingle from 'react-native-vector-icons/Entypo';
import AppInput from '../../Components/InputComp/inputComp'
import BtnComponent from '../../Components/BtnComp/BtnComp'
import styles from './Styles'
import { DrawerActions } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { setItemCounter, setDataDatabaseArray, setTokenChecked, showListing, setCodePriceChange } from '../../redux/actions/listingAction'
import AccessModal from '../../Components/AccessModal'
import Orientation from 'react-native-orientation';
import { useFocusEffect } from '@react-navigation/native';
import moment from 'moment'



const MainScreen = ({ navigation }) => {
    // const accessKey = useSelector(state => state.listing.accessKey)
    // const givingtreeKey = useSelector(state => state.listing.givingtreeKey)
    const [token, setToken] = useState();
    let tokenChecked = useSelector(state => state.listing.tokenChecked)
    const productsList = useSelector(state => state.listing.productsList)
    console.log("products listsss here ", productsList)
    const initialArray = useSelector(state => state.listing.productsList)
    let itemCounter = useSelector(state => state.listing.itemCounter)
    const [tempArray, setTempArray] = useState(null);
    const dispatch = useDispatch()
    const { toggleDrawer } = navigation // <-- drawer's navigation (not from stack)
    const [modalVisible, setModalVisible] = useState(false);
    const [SecmodalVisible, setSecmodalVisible] = useState(false);
    const [counter, setCounter] = useState(null);
    const [totalSale, setTotalSale] = useState(null);
    const [dataPushed, setDataPushed] = useState(null);
    const [amount, setAmount] = useState(null);
    const [peppermintkey, setPeppermintkey] = useState('');
    const [givingtreekey, setGivingtreekey] = useState('');

    const [finalResult, setFinalResult] = useState(null);
    const [AccessModalVisible, setAccessModalVisible] = useState(false);
    const [mode, setMode] = useState(false);

    const [peppermintList, setPepperMintList] = useState([
        {
            id: 0,
            C_Num: 1,
            Qty: 0,
            cost: 0.22,
            retail: 0.25,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 1,
            C_Num: 2,
            Qty: 0,
            cost: 0.45,
            retail: 0.50,
            isChecked: true,
            grandTotal: 0,
            grand: 0,

        },
        {
            id: 2,
            C_Num: 3,
            Qty: 0,
            cost: 0.68,
            retail: 0.75,
            isChecked: true,
            grandTotal: 0,
            grand: 0,

        },
        {
            id: 3,
            C_Num: 4,
            Qty: 0,
            cost: 0.90,
            retail: 1.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,

        },
        {
            id: 4,
            C_Num: 5,
            Qty: 0,
            cost: 1.15,
            retail: 1.25,
            isChecked: true,
            grandTotal: 0,
            grand: 0,

        },
        {
            id: 5,
            C_Num: 6,
            Qty: 0,
            cost: 1.35,
            retail: 1.50,
            isChecked: true,
            grandTotal: 0,
            grand: 0,

        },
        {
            id: 6,
            C_Num: 7,
            Qty: 0,
            cost: 1.80,
            retail: 2.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,

        },
        {
            id: 7,
            C_Num: 8,
            Qty: 0,
            cost: 2.05,
            retail: 2.25,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 8,
            C_Num: 9,
            Qty: 0,
            cost: 2.30,
            retail: 2.50,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 9,
            C_Num: 10,
            Qty: 0,
            cost: 2.70,
            retail: 3.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,

        },
        {
            id: 10,
            C_Num: 11,
            Qty: 0,
            cost: 3.15,
            retail: 3.50,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 11,
            C_Num: 12,
            Qty: 0,
            cost: 3.60,
            retail: 4.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 12,
            C_Num: 13,
            Qty: 0,
            cost: 4.00,
            retail: 4.50,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 13,
            C_Num: 14,
            Qty: 0,
            cost: 4.45,
            retail: 5.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 14,
            C_Num: 15,
            Qty: 0,
            cost: 5.00,
            retail: 5.50,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 15,
            C_Num: 16,
            Qty: 0,
            cost: 5.50,
            retail: 6.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 16,
            C_Num: 17,
            Qty: 0,
            cost: 6.00,
            retail: 6.50,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 17,
            C_Num: 18,
            Qty: 0,
            cost: 6.50,
            retail: 7.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 18,
            C_Num: 19,
            Qty: 0,
            cost: 6.75,
            retail: 7.50,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 19,
            C_Num: 20,
            Qty: 0,
            cost: 8.00,
            retail: 9.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 20,
            C_Num: 21,
            Qty: 0,
            cost: 9.00,
            retail: 10.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 21,
            C_Num: 22,
            Qty: 0,
            cost: 10.00,
            retail: 11.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 22,
            C_Num: 23,
            Qty: 0,
            cost: 0.00,
            retail: 0.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 23,
            C_Num: 24,
            Qty: 0,
            cost: 0.00,
            retail: 0.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 24,
            C_Num: 25,
            Qty: 0,
            cost: 0.00,
            retail: 0.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 25,
            C_Num: 26,
            Qty: 0,
            cost: 0.00,
            retail: 0.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 26,
            C_Num: 27,
            Qty: 0,
            cost: 0.00,
            retail: 0.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 27,
            C_Num: 28,
            Qty: 0,
            cost: 0.00,
            retail: 0.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 28,
            C_Num: 29,
            Qty: 0,
            cost: 0.00,
            retail: 0.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 29,
            C_Num: 30,
            Qty: 0,
            cost: 0.00,
            retail: 0.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
    ])
    const [givingtreeList, setGivingTreeList] = useState([
        {
            id: 0,
            C_Num: 1,
            Qty: 0,
            cost: 0.20,
            retail: 0.25,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 1,
            C_Num: 2,
            Qty: 0,
            cost: 0.45,
            retail: 0.50,
            isChecked: true,
            grandTotal: 0,
            grand: 0,

        },
        {
            id: 2,
            C_Num: 3,
            Qty: 0,
            cost: 0.70,
            retail: 0.75,
            isChecked: true,
            grandTotal: 0,
            grand: 0,

        },
        {
            id: 3,
            C_Num: 4,
            Qty: 0,
            cost: 0.90,
            retail: 1.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,

        },
        {
            id: 4,
            C_Num: 5,
            Qty: 0,
            cost: 1.15,
            retail: 1.25,
            isChecked: true,
            grandTotal: 0,
            grand: 0,

        },
        {
            id: 5,
            C_Num: 6,
            Qty: 0,
            cost: 1.45,
            retail: 1.50,
            isChecked: true,
            grandTotal: 0,
            grand: 0,

        },
        {
            id: 6,
            C_Num: 7,
            Qty: 0,
            cost: 1.65,
            retail: 2.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,

        },
        {
            id: 7,
            C_Num: 8,
            Qty: 0,
            cost: 1.90,
            retail: 2.25,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 8,
            C_Num: 9,
            Qty: 0,
            cost: 2.30,
            retail: 2.50,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 9,
            C_Num: 10,
            Qty: 0,
            cost: 2.80,
            retail: 3.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,

        },
        {
            id: 10,
            C_Num: 11,
            Qty: 0,
            cost: 3.30,
            retail: 3.50,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 11,
            C_Num: 12,
            Qty: 0,
            cost: 3.80,
            retail: 4.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 12,
            C_Num: 13,
            Qty: 0,
            cost: 4.30,
            retail: 4.50,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 13,
            C_Num: 14,
            Qty: 0,
            cost: 4.90,
            retail: 5.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 14,
            C_Num: 15,
            Qty: 0,
            cost: 5.50,
            retail: 5.75,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 15,
            C_Num: 16,
            Qty: 0,
            cost: 6.00,
            retail: 6.50,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 16,
            C_Num: 17,
            Qty: 0,
            cost: 6.50,
            retail: 7.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 17,
            C_Num: 18,
            Qty: 0,
            cost: 7.50,
            retail: 8.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 18,
            C_Num: 19,
            Qty: 0,
            cost: 8.50,
            retail: 9.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 19,
            C_Num: 20,
            Qty: 0,
            cost: 9.00,
            retail: 9.50,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 20,
            C_Num: 21,
            Qty: 0,
            cost: 10.00,
            retail: 10.50,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 21,
            C_Num: 22,
            Qty: 0,
            cost: 11.00,
            retail: 12.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 22,
            C_Num: 23,
            Qty: 0,
            cost: 0.00,
            retail: 0.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 23,
            C_Num: 24,
            Qty: 0,
            cost: 0.00,
            retail: 0.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 24,
            C_Num: 25,
            Qty: 0,
            cost: 0.00,
            retail: 0.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 25,
            C_Num: 26,
            Qty: 0,
            cost: 0.00,
            retail: 0.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 26,
            C_Num: 27,
            Qty: 0,
            cost: 0.00,
            retail: 0.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 27,
            C_Num: 28,
            Qty: 0,
            cost: 0.00,
            retail: 0.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 28,
            C_Num: 29,
            Qty: 0,
            cost: 0.00,
            retail: 0.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 29,
            C_Num: 30,
            Qty: 0,
            cost: 0.00,
            retail: 0.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
    ])


    let temp = new Array();
    useEffect(() => {
        if (!tokenChecked) {
            let formated = moment(new Date()).format('YYYY')
            switch (formated) {
                case '2022':
                    console.log("its 2022");
                    setPeppermintkey('peppermintlane22')
                    setGivingtreekey('givingtree22')
                    break;
                case '2023':
                    console.log("its 2023");
                    setPeppermintkey('peppermintlane23')
                    setGivingtreekey('givingtree23')
                    break;
                case '2024':
                    console.log("its 2024");
                    setPeppermintkey('peppermintlane24')
                    setGivingtreekey('givingtree24')
                    break;
                case '2025':
                    console.log("its 2025");
                    setPeppermintkey('peppermintlane25')
                    setGivingtreekey('givingtree25')
                    break;
                case '2026':
                    console.log("its 2026");
                    setPeppermintkey('peppermintlane26')
                    setGivingtreekey('givingtree26')
                    break;
                default:
                    console.warn("Contact support")

            }
            setAccessModalVisible(true)
        } else {
            if(tokenChecked == 'peppermint'){
                setMode(true)
            }
        }
    }, [])
    useFocusEffect(() => {
        Orientation.lockToPortrait();
    });
    const reportFunction = () => {
        let finalArray = []
        initialArray.map((item, index) => {
            const tempItem = { ...item };
            if (tempItem.id != dataPushed.id) {
                tempItem.dateCreated = new Date().toISOString().substring(0, 10);
                tempItem.id = tempItem.id + '_' + new Date().toISOString();
                finalArray.push(tempItem)
            }
            else {
                dataPushed.dateCreated = new Date().toISOString().substring(0, 10);
                dataPushed.id = dataPushed.id + '_' + new Date().toISOString();
                finalArray.push(dataPushed)

            }

        })
        dispatch(setDataDatabaseArray(finalArray))
        finalArray = []
        setTempArray(temp);
    }

    const resetFunction = () => {
        setDataPushed(null);
        setCounter(null)
        setTotalSale(null)

        initialArray.map((element, index) => {
            element.Qty = 0;
            element.cost = element.retail;
            element.grandTotal = 0;
        })

        dispatch(setItemCounter(
            itemCounter = 0
        ))
    }
    const removeCartItem = (item) => {
        if (item.Qty === 1) {
            var lists = dataPushed.filter(x => {
                return x.id != item.id;
            })
            setDataPushed(lists)
            setCounter(counter - 1)
            item.grandTotal = item.grandTotal - item.retail
            setTotalSale(totalSale - item.retail)
        } else {
            let objIndex = dataPushed.findIndex((obj => obj.id == item.id));
            dataPushed[objIndex].Qty = dataPushed[objIndex].Qty - 1
            dataPushed[objIndex].grandTotal = dataPushed[objIndex].grandTotal - dataPushed[objIndex].retail
            setTotalSale(dataPushed[objIndex].grand = totalSale - dataPushed[objIndex].retail)
            setCounter(counter - 1)
        }

        dispatch(setItemCounter(
            itemCounter -= 1
        ))
        if (itemCounter == 0) {
            resetFunction();
        }
    }
    const calculation = () => {
        if (amount < totalSale) {
            Alert.alert(
                // `Change Due : $${finalResult}`,
                `Low Balance`,
                "Entered amount is less than total sale!",
                [
                    {
                        text: "Increase amount tendered",
                        // onPress: checkoutFunction,
                        style: "cancel"
                    },
                ]
            );
        }
        else {
            let sum = (amount - totalSale).toFixed(2)
            Alert.alert(
                // `Change Due : $${finalResult}`,
                `Change Due : $${sum}`,
                "",
                [
                    {
                        text: "New Sale",
                        onPress: checkoutFunction,
                        style: "cancel"
                    },
                ]
            );
        }

    }
    const checkoutFunction = () => {
        reportFunction();
        setSecmodalVisible(false)
        setAmount(null);
        setFinalResult(null);
        resetFunction();

    }
    const SubmitValuesRedux = (item) => {
        if (dataPushed == null) {
            item.Qty = item.Qty + 1
            item.grandTotal = item.grandTotal + item.retail
            setDataPushed([item])
            setCounter(1)
            setTotalSale(item.retail)
        }
        else {
            if (dataPushed.indexOf(item) === -1) {
                item.Qty = item.Qty + 1
                item.grandTotal = item.grandTotal + item.retail
                setDataPushed([...dataPushed, item])
                setCounter(counter + 1)
                setTotalSale(totalSale + item.retail)

            }
            else {
                let objIndex = dataPushed.findIndex((obj => obj.id == item.id));
                dataPushed[objIndex].Qty = dataPushed[objIndex].Qty + 1
                dataPushed[objIndex].grandTotal = dataPushed[objIndex].grandTotal + dataPushed[objIndex].retail
                setTotalSale(dataPushed[objIndex].grand = totalSale + dataPushed[objIndex].retail)
                setCounter(counter + 1)
            }
        }
        dispatch(setItemCounter(
            itemCounter += 1
        ))
    }

    const checkAccessToken = () => {
        if (token == peppermintkey) {
            setMode(true)
            setAccessModalVisible(!AccessModalVisible)
            dispatch(setTokenChecked(
                tokenChecked = "peppermint"
            ),
                dispatch(showListing(peppermintList
                )),
                dispatch(setCodePriceChange(peppermintList
                ))

            )
        } else if (token == givingtreekey) {
            setAccessModalVisible(!AccessModalVisible)
            dispatch(setTokenChecked(
                tokenChecked = "givingtree"
            ),
                dispatch(showListing(givingtreeList
                )),
                dispatch(setCodePriceChange(givingtreeList
                ))
            )
        } else {
            alert("Not Matched!")
        }
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.HeaderView}>
                <HeaderComponent
                    CashRegister={mode? "Peppermintlane" : "Givingtree"}
                    shoppingCart={Images.ic_shoppingCart}
                    backgroundColor={'#fff'}
                    borderWidth={wp(0.2)}
                    openDrawer={toggleDrawer}
                    modal={() => setModalVisible(true)}
                />
            </View>

            <View style={styles.ViewFlatList}>

                <FlatList
                    data={productsList}
                    numColumns={4}
                    // extraData={productsList}
                    keyExtractor={item => item.id}
                    renderItem={({ item, index }) =>
                        <View style={{ justifyContent: 'space-between', paddingHorizontal: wp(2.4) }}>
                            <TouchableOpacity onPress={() => SubmitValuesRedux(item)} style={styles.sectionStyle}>
                                <Text style={styles.CTextStyle}>Code {item.C_Num}</Text>
                                <Text style={styles.DTextStyle}>${parseFloat(item.retail).toFixed(2)}</Text>
                            </TouchableOpacity>
                        </View>
                    }
                />
            </View>
            <View style={styles.secondView}>
                <View
                    style={styles.toucableView}
                >
                    <Text style={styles.totalItem}>Total Item</Text>
                    <Text style={styles.textStyle}>{counter ? counter : 0}</Text>
                </View>
                <View
                    style={styles.toucableView1}
                >
                    <Text style={styles.totalItem}>Total Sale</Text>

                    <Text style={styles.textStyle}>${totalSale ? parseFloat(totalSale).toFixed(2) : 0}</Text>
                </View>

            </View>
            <AccessModal
                animationType="slide"
                transparent={true}
                visible={AccessModalVisible}
                onChange={(text) => setToken(text)}
                onPress={checkAccessToken}
            />
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");

                    }}
                >
                    <View style={styles.centeredView}>
                        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{ width: wp(10), alignSelf: 'flex-end', marginTop: wp(7) }}>
                            <Cross name="circle-with-cross" size={35} color="grey" />
                        </TouchableOpacity>
                        <Text style={styles.orderDetail}>Order Details</Text>
                        <View style={styles.view1} />
                        <View style={styles.itemText1}>
                            <Text style={styles.itemText}>ITEM</Text>
                            <Text style={styles.itemText}>QTY</Text>
                            <Text style={styles.itemText}>PRICE</Text>
                        </View>
                        <View style={styles.view1} />
                        <View style={{ height: hp(50), backgroundColor: '#fff' }}>
                            <FlatList
                                data={dataPushed}
                                extraData={dataPushed}
                                keyExtractor={item => item.id}
                                renderItem={({ item, index }) =>
                                    <View style={styles.modalFLatList}>
                                        <Text style={styles.codeDesign}>Code # {item.C_Num}</Text>
                                        <Text style={styles.codeDesign}>{item.Qty}</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={styles.codeDesign}>${item.grandTotal ? parseFloat(item.grandTotal).toFixed(2) : 0}</Text>
                                            <View style={styles.crossStyle}>
                                                <CrossSingle
                                                    onPress={() => removeCartItem(item)}
                                                    name="cross" size={29} color="red" />
                                            </View>
                                        </View>
                                    </View>
                                } />
                        </View>
                        <View style={styles.lastView}>
                            <Text style={styles.totalItem1}>Total Item</Text>
                            <Text style={styles.totalItem1}>{counter ? counter : 0}</Text>
                        </View>
                        <View style={styles.lastView}>
                            <Text style={styles.totalItem1}>Total Sale</Text>
                            <Text style={styles.totalItem1}>${totalSale ? parseFloat(totalSale).toFixed(2) : 0}</Text>
                        </View>
                        <View style={styles.btnStyle}>
                            <BtnComponent
                                Text={"Submit"}
                                width={wp(30)}
                                height={hp(6)}
                                disabled={dataPushed ? false : true}
                                onPress={() => {
                                    setModalVisible(false),
                                        setSecmodalVisible(true)
                                }}
                            />
                            <BtnComponent
                                Text={"Reset"}
                                width={wp(30)}
                                height={hp(6)}
                                disabled={dataPushed ? false : true}
                                onPress={resetFunction}
                            />
                        </View>
                    </View>
                </Modal>
            </View>
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={SecmodalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");

                    }}
                >
                    <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>

                        <View style={styles.centeredView1}>
                            <TouchableOpacity onPress={() => setSecmodalVisible(!SecmodalVisible)} style={{ width: wp(12), alignSelf: 'flex-end', marginTop: wp(2) }}>
                                <Cross name="circle-with-cross" size={42} color="grey" />
                            </TouchableOpacity>
                            <Text style={styles.orderDetail1}>Check Out</Text>
                            <View style={styles.View4} />
                            <View style={styles.textInputs}>
                                <Text style={styles.texts}>${totalSale ? parseFloat(totalSale).toFixed(2) : 0}</Text>
                            </View>
                            <AppInput
                                placeholder={"Amount Tendered"}
                                marginTop={wp(5)}
                                value={amount}
                                onChangeText={setAmount}
                                input={amount}
                            />
                            {/* <View style={styles.textInputs}>
                                <Text style={styles.texts}>${finalResult ? parseFloat(finalResult).toFixed(2) : 0}</Text>
                            </View> */}
                            <BtnComponent
                                Text={"Checkout"}
                                width={wp(70)}
                                height={hp(6)}
                                marginTop={wp(15)}
                                onPress={calculation}
                            />
                        </View>
                    </KeyboardAwareScrollView>
                </Modal>
            </View>
        </View>
    )
}
export default MainScreen

