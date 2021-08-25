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
import { setItemCounter, setDataDatabaseArray } from '../../redux/actions/listingAction'
import Report from '../Reports/Reports';




const MainScreen = ({ navigation }) => {


    console.log("shwoing values of data get", dataPushed)
    const dataBase = useSelector(state => state.listing.dataBase)
    console.log("shwoing values of data get database here are", dataBase)



    const listing = useSelector(state => state.listing)
    const initialArray = useSelector(state => state.listing.productList)
    let itemCounter = useSelector(state => state.listing.itemCounter)
    const report = useSelector(state => state.listing.dataBase)

    const [tempArray, setTempArray] = useState(null);
    const dispatch = useDispatch()
    const { toggleDrawer } = navigation // <-- drawer's navigation (not from stack)

    const [modalVisible, setModalVisible] = useState(false);
    const [SecmodalVisible, setSecmodalVisible] = useState(false);
    const [submittedValue, setsubmittedValue] = useState([]);
    const [counter, setCounter] = useState(null);
    const [totalSale, setTotalSale] = useState(null);
    const [dataPushed, setDataPushed] = useState(null);
    const [amount, setAmount] = useState(null);
    const [finalResult, setFinalResult] = useState(null);


    let temp = new Array();

    const reportFunction = () => {

        console.log("Showing the dates for starting and ending......", initialArray);
        console.log("Showing the dates for starting and ending >>>>>>>>>>>", dataPushed);
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
        finalArray.createdDate = new Date().toISOString().substring(0, 10)
        dispatch(setDataDatabaseArray(finalArray))

        finalArray = []
        console.log('new reports...', temp);
        setTempArray(temp);

        console.log("Matched items.........<<<<<<<<", temp);
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
            //Log object to Console.
            console.log("Before update: ", dataPushed[objIndex])
            //Update object's name property.
            dataPushed[objIndex].Qty = dataPushed[objIndex].Qty - 1
            dataPushed[objIndex].grandTotal = dataPushed[objIndex].grandTotal - dataPushed[objIndex].retail
            setTotalSale(dataPushed[objIndex].grand = totalSale - dataPushed[objIndex].retail)
            setCounter(counter - 1)
        }

        dispatch(setItemCounter(
            itemCounter -= 1
        ))
        console.log('counter .... ', itemCounter);

        // console.log('datapushed....',datapushed);
        if (itemCounter == 0) {
            resetFunction();
        }
        console.log('initial array single remove', initialArray);
    }
    const calculation = () => {
        console.log("showing vlaues here are", amount, totalSale)
        setFinalResult(amount - totalSale);
        Alert.alert(
            // `Change Due : $${finalResult}`,
            `Change Due : $${amount - totalSale}`,
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
    const checkoutFunction = () => {
        reportFunction();
        console.log("Showing submitted values for showing next in reports.....", report)
        setSecmodalVisible(false)
        setAmount(null);
        setFinalResult(null);
        // setTotalSale(null);
        // setCounter(null);
        // setDataPushed(null);
        resetFunction();

    }
    const SubmitValuesRedux = (item) => {
        console.log("Item add........ ", item)
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

                //Log object to Console.
                console.log("Before update: ", dataPushed[objIndex])

                //Update object's name property.
                dataPushed[objIndex].Qty = dataPushed[objIndex].Qty + 1
                dataPushed[objIndex].grandTotal = dataPushed[objIndex].grandTotal + dataPushed[objIndex].retail
                setTotalSale(dataPushed[objIndex].grand = totalSale + dataPushed[objIndex].retail)
                setCounter(counter + 1)
                //Log object to console again.
                console.log("After update: ", dataPushed[objIndex])
                console.log("After update: objIndex", objIndex)

                console.log("data Pushed Array is..........", dataPushed);



            }
        }
        console.log("showing final results are ", dataPushed);
        dispatch(setItemCounter(
            itemCounter += 1
        ))
        console.log('counter .... ', itemCounter);
    }

    return (
        // console.log("response of the props is:", props),

        <View style={{ flex: 1 }}>
            <View style={styles.HeaderView}>
                <HeaderComponent
                    CashRegister={"Cash Register"}
                    shoppingCart={Images.ic_shoppingCart}
                    backgroundColor={'#fff'}
                    borderWidth={wp(0.2)}
                    openDrawer={toggleDrawer}
                    modal={() => setModalVisible(true)}

                />
            </View>

            <View style={styles.ViewFlatList}>


                <FlatList
                    data={listing.productList}
                    numColumns={3}
                    extraData={listing.productList}
                    keyExtractor={item => item.id}
                    renderItem={({ item, index }) =>
                        <View style={{ justifyContent: 'space-between', paddingHorizontal: wp(3) }}>
                            <TouchableOpacity onPress={() => SubmitValuesRedux(item)} style={styles.sectionStyle}>
                                <Text style={styles.CTextStyle}>Code # {item.C_Num}</Text>
                                <Text style={styles.DTextStyle}>${item.retail}</Text>
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
                        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{ width: wp(9), alignSelf: 'flex-end' }}>
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


                        <View style={{ height: hp(15), backgroundColor: '#fff', }}>

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
                                                    name="cross" size={30} color="red" />
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
                    <View style={styles.centeredView1}>
                        <TouchableOpacity onPress={() => setSecmodalVisible(!SecmodalVisible)} style={{ width: wp(8), alignSelf: 'flex-end' }}>
                            <Cross name="circle-with-cross" size={30} color="grey" />
                        </TouchableOpacity>

                        <Text style={styles.orderDetail1}>More Information</Text>

                        <View style={styles.View4} />


                        <View style={styles.textInputs}>
                            <Text style={styles.texts}>${totalSale ? parseFloat(totalSale).toFixed(2) : 0}</Text>
                        </View>


                        <AppInput
                            placeholder={"Amount Tendered"}
                            marginTop={wp(5)}
                            // placeholderTextColor={"black"}
                            value={amount}
                            onChangeText={setAmount}
                            input={amount}
                        />


                        <View style={styles.textInputs}>
                            <Text style={styles.texts}>${finalResult ? parseFloat(finalResult).toFixed(2) : 0}</Text>
                        </View>

                        <BtnComponent

                            Text={"Checkout"}
                            width={wp(70)}
                            height={hp(6)}
                            marginTop={wp(6)}
                            onPress={calculation}

                        />





                    </View>
                </Modal>
            </View>











        </View>
    )

}
export default MainScreen

