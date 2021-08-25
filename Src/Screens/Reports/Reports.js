import React, { useState, useEffect } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View, SafeAreaView, FlatList, TouchableOpacity, Linking, Alert
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
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
import { CSVLink } from "react-csv";
import { convertArrayToCSV, converter } from 'convert-array-to-csv';
import RNFetchBlob from 'react-native-fetch-blob'
import Mailer from 'react-native-mail';



const Report = ({ navigation }) => {
    const { toggleDrawer } = navigation // <-- drawer's navigation (not from stack)
    const dataBase = useSelector(state => state.listing.dataBase)
    const initialData = useSelector(state => state.listing.productList)


    const [finalReport, setFinalReport] = useState([]);
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
    let count = 0;


    useFocusEffect(() => {
        Orientation.lockToLandscape();

    });

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
                obj[item.C_Num].totalCost = obj[item.C_Num].Qty * obj[item.C_Num].cost
                obj[item.C_Num].totalRetail = obj[item.C_Num].Qty * obj[item.C_Num].retail
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

            //     setTotalItems(totalItems + final.Qty)
            //     setTotalGrand(totalGrand + final.totalRetail)

        })


        setFinalReport(Object.values(obj))
        console.log("final Array to be shown in reports FinalReportArray", FinalReportArray)


    }


    const header = ['Item Name', 'Cost', 'Retail', 'Total Unit', 'Total Cost', 'Total Price'];
    const csvReport = convertArrayToCSV(finalReport, {
        header,
        separator: ','

    });
    const { config, fs } = RNFetchBlob;
    let DocumentDir = fs.dirs.DocumentDir;

    // write the current list of answers to a local csv file
    const pathToWrite = `${DocumentDir}/data.csv`;
    console.log('pathToWrite', pathToWrite);
    // pathToWrite /storage/emulated/0/Download/data.csv
    const writeFile = () => {
        RNFetchBlob.fs
            .writeFile(pathToWrite, csvReport, 'utf8')
            .then(() => {
                console.log(`wrote file ${pathToWrite}`);
                handleEmail(pathToWrite)
                // wrote file /storage/emulated/0/Download/data.csv
            })
            .catch(error => console.error(error));
    }

    const handleEmail = (pathToWrite) => {
        Mailer.mail({
            subject: 'Cash Register Report',
            recipients: ['irfanoulakh@gmail.com'],
            ccRecipients: ['malikirfanahmad4@gmail.com'],
            bccRecipients: ['supportBCC@example.com'],
            body: '<b>Find Cash Register Report in attachment</b>',
            customChooserTitle: 'This is my new title', // Android only (defaults to "Send Mail")
            isHTML: true,
            attachments: [{
                // Specify either `path` or `uri` to indicate where to find the file data.
                // The API used to create or locate the file will usually indicate which it returns.
                // An absolute path will look like: /cacheDir/photos/some image.jpg
                // A URI starts with a protocol and looks like: content://appname/cacheDir/photos/some%20image.jpg
                path: pathToWrite, // The absolute path of the file from which to read data.
                uri: '', // The uri of the file from which to read the data.
                // Specify either `type` or `mimeType` to indicate the type of data.
                type: 'csv', // Mime Type: jpg, png, doc, ppt, html, pdf, csv
                mimeType: '', // - use only if you want to use custom type
                name: 'data', // Optional: Custom filename for attachment
            }]
        }, (error, event) => {
            console.log('CANCEL: Email Error Response', error, event)
            Alert.alert(
                error,
                event,
                [
                    { text: 'Ok', onPress: () => console.log('OK: Email Error Response') },
                    { text: 'Cancel', onPress: () => console.log('CANCEL: Email Error Response', error) }
                ],
                { cancelable: true }
            )
        });
    }


    return (

        <SafeAreaView style={{ flex: 1 }}>
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
                        <Text style={styles.selecctedDate}>Select Date:</Text>

                        <View style={{ height: hp(5), width: wp(20), marginTop: hp(0.3) }}>
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
                        <View style={{ height: hp(5), width: wp(20), marginTop: hp(0.3) }}>
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
                            width={wp(30)}
                            height={hp(6)}
                            onPress={() => fetchReport()}

                        />
                        <TouchableOpacity onPress={() => writeFile()

                            // Linking.openURL('mailto:mkarusch@gmail.com')
                        }
                            style={styles.emailStyle}>
                            <Email name="email" size={45} color="#DDD" />
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={{ height: hp(30), width: wp(176), alignSelf: 'center', marginTop: wp(2), borderWidth: wp(1.2), borderColor: 'grey' }}>

                    <Table borderStyle={{ borderWidth: 0, }}>
                        <Row textStyle={{ fontWeight: 'bold', fontSize: 14 }}
                            data={tableHead}
                            flexArr={[2, 2.1, 2.2, 2.8, 2.8, 2.8]}
                        />

                    </Table>
                    <FlatList
                        data={finalReport}
                        extraData={finalReport}
                        renderItem={({ item, index }) =>
                            <View style={{ justifyContent: 'space-between', paddingHorizontal: wp(3), flexDirection: 'row' }}>
                                {console.log("shoeing items here", item)}
                                <Text
                                    style={{ width: wp('20') }}
                                >
                                    {item.C_Num}
                                </Text>
                                <Text
                                    style={{ width: wp('30') }}
                                >
                                    ${item.cost}
                                </Text>
                                <Text
                                    style={{ width: wp('30') }}

                                >
                                    ${item.retail}
                                </Text>
                                <Text
                                    style={{ width: wp('30') }}
                                >
                                    {item.Qty}
                                </Text>
                                <Text
                                    style={{ width: wp('30') }}
                                >
                                    {/* ${item.totalCost} */}
                                    ${item.totalCost ? parseFloat(item.totalCost).toFixed(2) : 0}
                                </Text>
                                <Text
                                    style={{ width: wp('30') }}

                                >
                                    {/* ${item.totalRetail} */}
                                    ${item.totalRetail ? parseFloat(item.totalRetail).toFixed(2) : 0}
                                </Text>

                            </View>
                        }
                    />


                </View>
            </View>

        </SafeAreaView>

    )



}
export default Report