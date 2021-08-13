import React, { useState, useEffect } from 'react';
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
import { submitValue, deleteValue, makeReport } from '../../redux/actions/listingAction'
import Report from '../Reports/Reports';


const MainScreen = ({ navigation }) => {
    const listing = useSelector(state => state.listing)
    const report = useSelector(state => state.listing.dataBase)

    // console.log("Showing Submitted Values", submit)


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



    const resetFunction = () => {
        console.log("shwoing values of after pushed array ", dataPushed)
        // dataPushed.Qty = null;
        // setDataPushed(dataPushed.splice(0, dataPushed.length));
        // setDataPushed(dataPushed.length = 0);
        setDataPushed(null);
        deleteValue();
        // console.log("shwoing values of after pushed array ", dataPushed)
        setCounter(null)
        setTotalSale(null)
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
            // console.log("Showing id of deleting item ", item.C_Num);
            // // alert(item.C_Num);
            // var lists = dataPushed.filter(x => {
            //     return x.id != item.id;
            // })
            // setDataPushed(lists)
            // setCounter(counter - 1)
            // setTotalSale(totalSale - item.retail)
        }
    }
    const calculation = async () => {

        await setFinalResult(amount - totalSale);
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
        dataPushed.map((item, index) => {
            item.dateCreated = new Date().toISOString().substring(0, 10);
            report.push(item)
        })

        dispatch(makeReport(
            report
        ))
        console.log("Showing submitted values for showing next in reports.....", report)
        setSecmodalVisible(false)
        setAmount(null);
        setFinalResult(null);
        setTotalSale(null);
        setCounter(null);
        setDataPushed(null)

    }
    const SubmitValuesRedux = (item) => {
        if (dataPushed == null) {
            setDataPushed([item])
            setCounter(1)
            setTotalSale(item.retail)

        }
        else {
            if (dataPushed.indexOf(item) === -1) {
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
        console.log("showing final results are ", dataPushed)
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

                <TouchableOpacity
                    style={styles.toucableView}
                >
                    <Text style={styles.totalItem}>Total Item</Text>
                    <Text style={styles.textStyle}>{counter ? counter : 0}</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    style={styles.toucableView1}
                >
                    <Text style={styles.totalItem}>Total Sale</Text>

                    <Text style={styles.textStyle}>${totalSale ? parseFloat(totalSale).toFixed(2) : 0}</Text>
                </TouchableOpacity>

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
                                // numColumns={3}
                                keyExtractor={item => item.id}
                                renderItem={({ item, index }) =>
                                    <View style={styles.modalFLatList}>

                                        <Text style={styles.codeDesign}>Code # {item.C_Num}</Text>
                                        <Text style={styles.codeDesign}>{item.Qty}</Text>

                                        <View style={{ flexDirection: 'row', }}>
                                            <Text style={styles.codeDesign}>${item.grandTotal ? parseFloat(item.grandTotal).toFixed(2) : 0}</Text>
                                            <View style={styles.crossStyle}>
                                                <CrossSingle
                                                    onPress={() => removeCartItem(item)}
                                                    name="cross" size={30} color="red" />
                                            </View>

                                        </View>

                                    </View>

                                }
                            />
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
                                onPress={() => {
                                    setModalVisible(false),
                                        setSecmodalVisible(true)
                                }}

                            />
                            <BtnComponent
                                Text={"Reset"}
                                width={wp(30)}
                                height={hp(6)}
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
                            // placeholderTextColor={'grey'}
                            style={{ fontWeight: 'bold', fontSize: wp(7) }}
                            value={amount}
                            onChangeText={setAmount}
                        // input={"Amount Tendered"}
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
export default MainScreen;
