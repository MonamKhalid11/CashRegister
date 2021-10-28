import React, { useState, useEffect } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View, SafeAreaView, FlatList, TouchableOpacity, Linking, Alert, ActivityIndicator, Platform
} from 'react-native';
import { NavigationHelpersContext, useFocusEffect } from '@react-navigation/native';
import HeaderComponent from '../../Components/HeaderComponent/HeaderComponent'
import Images from '../../Assets/Images/Images'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from './Styles'
import Orientation from 'react-native-orientation';
// import Orientation from 'react-native-orientation-locker';
// import { OrientationLocker, PORTRAIT, LANDSCAPE } from "react-native-orientation-locker";
import Icon from 'react-native-vector-icons/Feather';
import Email from 'react-native-vector-icons/MaterialCommunityIcons';
// import DatePicker from 'react-native-datepicker'
import DatePicker from './Components'
import BtnComponent from '../../Components/BtnComp/BtnComp'
import { useDispatch, useSelector } from 'react-redux'
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import { CSVLink } from "react-csv";
import { convertArrayToCSV, converter } from 'convert-array-to-csv';
import RNFetchBlob from 'react-native-fetch-blob'
import Mailer from 'react-native-mail';
import XLSX from 'xlsx';
import moment from 'moment'
var RNFS = require('react-native-fs');
import { useNavigationState } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native'


const Report = ({ navigation, props }) => {
    const { toggleDrawer } = navigation // <-- drawer's navigation (not from stack)
    const dataBase = useSelector(state => state.listing.dataBase)
    const [finalReport, setFinalReport] = useState([]);
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [tableHead, setTableHead] = useState(['Code #', 'Cost', 'Retail', 'Total Unit', 'Total Cost', 'Total Price'])
    const [totalRetail, setTotalRetail] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [totalGrand, setTotalGrand] = useState(0);
    const [isLoader, setIsLoader] = useState(false);
    const [show, setShow] = useState(false);
    const [visible, setVisible] = useState(false);
    const nav = useNavigation()




    let items = 0
    let costs = 0
    let retails = 0
    let newArray = []
    let FinalReportArray = []
    let count = 0;

    const renderLoader = () => {
        return isLoader ? (
            <View style={styles.customLoader}>
                <ActivityIndicator size="large" color="black" />
            </View>
        ) : null;
    }
    useFocusEffect(() => {
        Orientation.lockToLandscape()
    });
    useEffect(() => {
        if (routeName === 'Reports') {
            Orientation.lockToLandscape()
        }
    }, [nav])

    const state = useNavigationState(state => state);
    const routeName = (state.routeNames[state.index]);
    console.log(routeName);
    console.log("state", state)


    const grandFunction = () => {
        FinalReportArray.map((item, index) => {
            items += item.Qty
            costs += item.totalCost
            retails += item.totalRetail

        })
        setTotalItems(items)
        setTotalGrand(costs)
        setTotalRetail(retails)
        setIsLoader(false)


    }

    const fetchReport = () => {
        setIsLoader(true)
        dataBase.map((value, index) => {
            value.map((item, index) => {
                if (item.dateCreated >= moment(startDate).format('YYYY-MM-DD') && item.dateCreated <= moment(endDate).format('YYYY-MM-DD')) {
                    if (item) {
                        newArray.push(item);
                    }
                }
            })
        })
        let obje = {}

        newArray.map((item, index) => {
            if (obje[item.C_Num]) {
                obje[item.C_Num].Qty += item.Qty
                obje[item.C_Num].totalCost = obje[item.C_Num].Qty * obje[item.C_Num].cost
                obje[item.C_Num].totalRetail = obje[item.C_Num].Qty * obje[item.C_Num].retail
            }
            else {
                obje[item.C_Num] = {}
                obje[item.C_Num].C_Num = item.C_Num
                obje[item.C_Num].cost = item.cost
                obje[item.C_Num].retail = item.retail
                obje[item.C_Num].Qty = item.Qty
                obje[item.C_Num].totalCost = obje[item.C_Num].Qty * obje[item.C_Num].cost
                obje[item.C_Num].totalRetail = obje[item.C_Num].Qty * obje[item.C_Num].retail

            }
        })
        FinalReportArray = Object.values(obje)
        setFinalReport(Object.values(obje))
        setTimeout(() => {
            grandFunction()
        }, 1000);


    }
    //.....
    let header = [['Code #', 'Cost', 'Retail', 'Total Unit', 'Total Cost', 'Total Price']];

    const exportDataToExcel = () => {

        let sample_data_to_export = finalReport;
        let wb = XLSX.utils.book_new();
        let ws = XLSX.utils.json_to_sheet(sample_data_to_export)
        XLSX.utils.sheet_add_aoa(ws, header);
        XLSX.utils.sheet_add_json(ws, sample_data_to_export, { origin: 'A2', skipHeader: true });
        XLSX.utils.book_append_sheet(wb, ws, "Report")
        const wbout = XLSX.write(wb, { type: 'binary', bookType: "xlsx" });

        // Write generated excel to Storage
        var path = RNFS.DocumentDirectoryPath + '/Cash Register Report.xlsx';

        RNFS.writeFile(path, wbout, 'ascii').then((r) => {
            console.log('Success', path);
            handleEmail(path)
        }).catch((e) => {
            console.log('Error', e);
        });

    }

    const handleEmail = (pathToWrite) => {
        Mailer.mail({
            subject: 'Cash Register Report',
            recipients: ['irfanoulakh@gmail.com'],
            ccRecipients: ['malikirfanahmad4@gmail.com'],
            bccRecipients: ['supportBCC@example.com'],
            body: '<b>Find Cash Register Report in attachment</b>',
            // customChooserTitle: 'This is my new title', // Android only (defaults to "Send Mail")
            isHTML: true,
            attachments: [{
                // Specify either `path` or `uri` to indicate where to find the file data.
                // The API used to create or locate the file will usually indicate which it returns.
                // An absolute path will look like: /cacheDir/photos/some image.jpg
                // A URI starts with a protocol and looks like: content://appname/cacheDir/photos/some%20image.jpg
                path: pathToWrite, // The absolute path of the file from which to read data.
                uri: '', // The uri of the file from which to read the data.
                // Specify either `type` or `mimeType` to indicate the type of data.
                type: 'xlsx', // Mime Type: jpg, png, doc, ppt, html, pdf, csv
                mimeType: '', // - use only if you want to use custom type
                name: 'Cash Register Report', // Optional: Custom filename for attachment
            }]
        }, (error, event) => {
            console.log('CANCEL: Email Error Response', error, event)
            Alert.alert(
                error,
                event,
                [
                    {
                        text: 'Ok', onPress: () => erase()
                        // console.log('OK: Email Error Response'),
                    },
                    { text: 'Cancel', onPress: () => console.log('CANCEL: Email Error Response', error) }
                ],
                { cancelable: true }
            )
        });

    }
    const erase = () => {
        FinalReportArray = []
        setFinalReport([])
        setTotalItems(0)
        setTotalGrand(0)
        setTotalRetail(0)
    }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || startDate;
        setStartDate(currentDate);
    }
    const onChangeCaught = (event, selected) => {
        const currentDate = selected || endDate;
        setEndDate(currentDate);
    }

    return (

        <SafeAreaView style={{ flex: 1 }}>
            {renderLoader()}
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

                        <View style={{ height: hp(5), width: wp(25), marginTop: hp(0.4), }}>
                            <DatePicker
                                show={show}
                                onChange={onChange}
                                mode={"date"}
                                value={startDate}
                            />
                        </View>
                        <View style={{ height: hp(5), width: wp(25), marginTop: hp(0.3) }}>
                            <DatePicker
                                show={visible}
                                onChange={onChangeCaught}
                                mode={"date"}
                                value={endDate}
                            // display={Platform.OS == 'ios' ? 'default' : 'default'}
                            />
                        </View>
                        <BtnComponent
                            Text={"Submit"}
                            width={wp(30)}
                            height={hp(6)}
                            onPress={() => fetchReport()}

                        />
                        <TouchableOpacity onPress={() => exportDataToExcel()

                            // Linking.openURL('mailto:mkarusch@gmail.com')
                        }
                            style={styles.emailStyle}>
                            <Email name="email" size={45} color="#DDD" />
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={{ height: hp(30), width: wp(176), alignSelf: 'center', marginTop: wp(2), borderWidth: wp(1.2), borderColor: 'grey' }}>
                    {/* {console.log("ShoW.>>> in Render Components ", finalReport)} */}
                    <Table borderStyle={{ borderWidth: 0, }}>
                        <Row textStyle={{ fontWeight: 'bold', fontSize: 14 }}
                            data={tableHead}
                            flexArr={[2, 2.1, 2.2, 2.8, 2.8, 2.8]}
                        />

                    </Table>
                    <FlatList
                        data={finalReport}
                        extraData={finalReport}
                        keyExtractor={item => item.C_Num}
                        renderItem={({ item, index }) =>
                            <View style={{ justifyContent: 'space-between', paddingHorizontal: wp(3), flexDirection: 'row' }}>
                                {/* {console.log("shoeing items here", item)} */}
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
                <View style={styles.grandBar}>
                    <Text style={styles.grandBarText}>{"Total                     "}</Text>
                    <Text style={styles.grandBarText}>{totalItems}</Text>
                    <Text style={styles.grandBarText}>${totalGrand ? parseFloat(totalGrand).toFixed(2) : 0}</Text>
                    <Text style={styles.grandBarText}>${totalRetail ? parseFloat(totalRetail).toFixed(2) : 0}</Text>

                </View>
            </View>

        </SafeAreaView>

    )



}
export default Report