import React, { useState, useEffect } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View, FlatList, TouchableOpacity, Linking,
} from 'react-native';
import HeaderComponent from '../../Components/HeaderComponent/HeaderComponent'
import Images from '../../Assets/Images/Images'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from './Styles'
import Orientation from 'react-native-orientation';
import Icon from 'react-native-vector-icons/Feather';
import Email from 'react-native-vector-icons/MaterialCommunityIcons';

import DatePicker from 'react-native-datepicker'
import BtnComponent from '../../Components/BtnComp/BtnComp'
import { useDispatch, useSelector } from 'react-redux'
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

const Report = ({ navigation }) => {
    const { toggleDrawer } = navigation // <-- drawer's navigation (not from stack)
    const dataBase = useSelector(state => state.listing.dataBase)
    const initialData = useSelector(state => state.listing.productList)


    const [finalReport, setFinalReport] = useState();
    const [startDate, setStartDate] = useState(new Date().toISOString().substring(0, 10))
    const [endDate, setEndDate] = useState(new Date().toISOString().substring(0, 10))
    const [tableHead, setTableHead] = useState(['Item Name', 'Cost', 'Retail', 'Total Unit', 'Total Cost', 'Total Price'])
    const [genReport, setGenReport] = useState(null);
    const [totalItems, setTotalItems] = useState(0);
    const [totalGrand, setTotalGrand] = useState(0);

    let array = []
    let final = [{
        C_Num: 0,
        Qty: 0,
        cost: 0,
        retail: 0,
        totalCost: 0,
        totalRetail: 0
    }]
    let newArray = []
    let FinalReportArray = []


    useEffect(() => {
        Orientation.lockToLandscape();
    }, [navigation])

    const fetchReport = () => {
        console.log("Showing the dates for starting and ending......", dataBase);
        dataBase.map((item, index) => {
            if (item.createdDate >= startDate && item.createdDate <= endDate) {
                item.map((value, index) => {
                    if (value.id) {
                        newArray.push(value);
                    }
                })
            }
        })
        console.log("Value of the item in single iteration", newArray);
        let obj = {}

        newArray.map((item, index) => {
            if (obj[item.C_Num]) {
                obj[item.C_Num].Qty += item.Qty
                // obj[item.C_Num].retail = item.retail
                // obj[item.C_Num].totalCost = final.Qty * final.cost
            }
            else {
                obj[item.C_Num] = {}
                obj[item.C_Num].C_Num = item.C_Num
                obj[item.C_Num].cost = item.cost
                obj[item.C_Num].retail = item.retail
                obj[item.C_Num].Qty = item.Qty
                obj[item.C_Num].totalCost = obj[item.C_Num].Qty * obj[item.C_Num].cost
                obj[item.C_Num].totalRetail = obj[item.C_Num].Qty * obj[item.C_Num].retail


            }
            // console.log("Value of the item in single iteration", array[0].C_Num);
            // if (array.length == 0) {
            //     array.push(item);
            //     console.log("Value of the item in single iteration", array[0].C_Num);
            // }
            // if (item.C_Num == array[0].C_Num) {
            //     console.log("matched", item);
            //     final.C_Num = item.C_Num
            //     final.Qty += item.Qty
            //     final.cost = item.cost
            //     final.retail = item.retail
            //     final.totalCost = final.Qty * final.cost
            //     final.totalRetail = final.Qty * final.retail
            //     setTotalItems(totalItems + final.Qty)
            //     setTotalGrand(totalGrand + final.totalRetail)
            //     console.log("Arrayyy", final);
            //     // array.push(item);
            //     // FinalReportArray.push(final);
            // } else {
            //     array.push(item);
            //     console.log("Not Match", item);

            // }

        })
        // obj[item.C_Num].totalCost = obj[item.C_Num].Qty * obj[item.C_Num].cost
        // obj[item.C_Num].totalRetail = obj[item.C_Num].Qty * obj[item.C_Num].retail

        // setTotalItems(totalItems + final.Qty)
        // setTotalGrand(totalGrand + final.totalRetail)


        FinalReportArray = Object.values(obj)
        console.log("final Array to be shown in reports FinalReportArray", FinalReportArray)


    }

    return (

        <View style={{ flex: 1 }}>
            <View style={styles.HeaderView}>


                <View style={{ flexDirection: 'row', paddingHorizontal: wp(5), }}>

                    <TouchableOpacity
                        onPress={() => {
                            Orientation.lockToPortrait(),
                                toggleDrawer()
                        }}
                        style={styles.toucable}>
                        <Icon name="menu" size={30} color="grey" style={{ marginTop: wp(1.5) }} />
                    </TouchableOpacity>

                    <Text style={styles.reportText}>
                        Reports
                        </Text>
                </View>
                <View style={styles.redView} />
            </View>


            <View style={styles.lastView}>
                <View style={styles.innerLastView}>

                    <View style={styles.dateView}>
                        <Text style={styles.selecctedDate}>Selected Date:</Text>

                        <View style={{ height: hp(5), width: wp(20), }}>
                            <DatePicker
                                style={{ width: 100 }}
                                date={startDate}
                                mode="date"
                                placeholder="select date"
                                format="YYYY-MM-DD"
                                minDate={startDate}
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                showIcon={false}


                                onDateChange={(startDate) => setStartDate(startDate)}
                            />

                        </View>
                        <View style={{ height: hp(5), width: wp(20) }}>
                            <DatePicker
                                style={{ width: 100 }}
                                date={endDate}
                                mode="date"
                                placeholder="select date"
                                format="YYYY-MM-DD"
                                minDate={startDate}
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                showIcon={false}


                                onDateChange={(endDate) => setEndDate(endDate)}
                            />
                        </View>
                        <BtnComponent
                            Text={"Submit"}
                            width={wp(20)}
                            height={hp(6)}
                            onPress={() => fetchReport()}

                        />

                        <TouchableOpacity onPress={() => Linking.openURL('mailto:mkarusch@gmail.com')} style={styles.emailStyle}>
                            <Email name="email" size={45} color="#DDD" />
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={{ height: hp(30), width: wp(180), alignSelf: 'center', marginTop: wp(2), borderWidth: wp(1.2), borderColor: 'grey' }}>

                    <Table borderStyle={{ borderWidth: 0 }}>
                        <Row
                            data={tableHead}
                            flexArr={[2, 2.1, 1.8, 2, 2, 1.1]}
                        />

                    </Table>
                    <FlatList
                        data={FinalReportArray}
                        renderItem={({ item, index }) =>
                            <View style={{ justifyContent: 'space-between', paddingHorizontal: wp(3), flexDirection: 'row' }}>
                                {console.log("shoeing items here", item)}
                                <Text
                                    style={styles.CTextStyle}
                                >
                                    asad
                                </Text>
                                <Text
                                    style={styles.DTextStyle}
                                >
                                    ${item.cost}
                                </Text>
                                <Text>
                                    ${item.retail}
                                </Text>
                                <Text
                                    style={styles.CTextStyle}
                                >
                                    {totalItems}
                                </Text>
                                <Text
                                    style={styles.DTextStyle}
                                >
                                    ${item.cost}
                                </Text>
                                <Text>
                                    ${totalGrand}
                                </Text>
                            </View>
                        }
                    />
                </View>
            </View>

        </View>

    )



}
export default Report