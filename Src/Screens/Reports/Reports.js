import React, { useState, useEffect } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View, SafeAreaView, FlatList, TouchableOpacity, Linking, Alert, ActivityIndicator, Platform
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from './Styles'
import Orientation from 'react-native-orientation';
import Icon from 'react-native-vector-icons/Feather';
import Email from 'react-native-vector-icons/MaterialCommunityIcons';
import DatePicker from './Components'
import BtnComponent from '../../Components/BtnComp/BtnComp'
import { useDispatch, useSelector } from 'react-redux'
import DeviceInfo from 'react-native-device-info';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import Mailer from 'react-native-mail';
import XLSX from 'xlsx';
import moment from 'moment'
var RNFS = require('react-native-fs');
import { useNavigationState } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';

const Report = ({ navigation, props }) => {
    const { toggleDrawer } = navigation // <-- drawer's navigation (not from stack)
    const dataBase = useSelector(state => state.listing.dataBase)
    const userEmail = useSelector(state => state?.listing?.user?.email)
    const tokenChecked = useSelector(state => state?.listing?.tokenChecked)
    const [finalReport, setFinalReport] = useState([]);
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [tableHead, setTableHead] = useState(['Code #', 'Cost', 'Retail', 'Total Unit', 'Total Cost', 'Total Price'])
    const [totalRetail, setTotalRetail] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [totalGrand, setTotalGrand] = useState(0);
    const [isLoader, setIsLoader] = useState(false);
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('')
    const [visible, setVisible] = useState(false);
    const isFocused = useIsFocused();
    const [isTab, setIsTab] = useState(false);
    const isDrawerOpen = useDrawerStatus() === 'open';

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
    useEffect(() => {
        if (tokenChecked == "peppermint") {
            setEmail("mkarusch@gmail.com")
        } else if (tokenChecked == "givingtree") {
            setEmail("joysgifts4kids@aol.com")
        }
    }, [])

    const state = useNavigationState(state => state);
    const routeName = (state.routeNames[state.index]);

    React.useEffect(() => {
        if (isFocused && routeName === 'Reports') {
            Orientation.lockToLandscape()
        }
        if (isDrawerOpen) {
            Orientation.lockToPortrait()
        }
        setIsTab(DeviceInfo.isTablet())
    })

    
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
    let header = [['Code #', 'Cost', 'Retail', 'Total Unit', 'Total Cost', 'Total Price']];
    const exportDataToExcel = () => {
        let sample_data_to_export = finalReport;
        let wb = XLSX.utils.book_new();
        let ws = XLSX.utils.json_to_sheet(sample_data_to_export)
        XLSX.utils.sheet_add_aoa(ws, header);
        XLSX.utils.sheet_add_json(ws, sample_data_to_export, { origin: 'A2', skipHeader: true });
        XLSX.utils.book_append_sheet(wb, ws, "Report")
        const wbout = XLSX.write(wb, { type: 'binary', bookType: "xlsx" });
        var path = RNFS.DocumentDirectoryPath + '/Holiday Cash Register Report.xlsx';
        RNFS.writeFile(path, wbout, 'ascii').then((r) => {
            console.log('Success', path);
            handleEmail(path)
        }).catch((e) => {
            console.log('Error', e);
        });
    }
    const handleEmail = (pathToWrite) => {
        Mailer.mail({
            subject: 'Holiday Cash Register Report',
            recipients: [email ? email : ''],
            ccRecipients: ['joe@bluetonemedia.com'],
            bccRecipients: [userEmail ? userEmail : ''],
            body: '<b>Find Holiday Cash Register Report in attachment</b>',
            isHTML: true,
            attachments: [{
                path: pathToWrite, // The absolute path of the file from which to read data.
                uri: '', // The uri of the file from which to read the data.
                type: 'xlsx', // Mime Type: jpg, png, doc, ppt, html, pdf, csv
                mimeType: '', // - use only if you want to use custom type
                name: 'Holiday Cash Register Report', // Optional: Custom filename for attachment
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
                        <Icon name="menu" size={isTab ? 50 : 30} color="grey"  />
                    </TouchableOpacity>
                    <Text style={isTab ? styles.reportTextTab : styles.reportText}>
                        Reports
                        </Text>
                </View>
                <View style={styles.redView} />
            </View>
            <View style={styles.lastView}>
                <View style={isTab ? styles.innerLastViewTab : styles.innerLastView}>
                    <View style={isTab ? styles.dateViewTab : styles.dateView}>
                        <Text style={isTab ? styles.selecctedDateTab: styles.selecctedDate}>Select Date:</Text>

                        <View style={isTab?  styles.datePickerTab :  styles.datePicker}>
                            <DatePicker
                                show={show}
                                onChange={onChange}
                                mode={"date"}
                                value={startDate}
                            />
                        </View>
                        <View style={isTab?  styles.datePickerTab :  styles.datePicker}>
                            <DatePicker
                                show={visible}
                                onChange={onChangeCaught}
                                mode={"date"}
                                value={endDate}
                            />
                        </View>
                        <BtnComponent
                            Text={"Submit"}
                            width={isTab? wp(25) : wp(30)}
                            height={isTab ? hp(5.5): hp(6)}
                            onPress={() => fetchReport()}
                        />
                        <TouchableOpacity onPress={() => exportDataToExcel()
                        }
                            style={ isTab ? styles.emailStyleTab : styles.emailStyle}>
                            <Email name="email" size={45} color="#DDD" />
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={isTab ? styles.tableContainerTab : styles.tableContainer}>
                    <Table borderStyle={{ borderWidth: 0 }}>
                        <Row textStyle={isTab ? { fontWeight: 'bold', fontSize: 22 }:{ fontWeight: 'bold', fontSize: 14 }}
                            data={tableHead}
                            flexArr={[2, 2.6, 2.2, 2.8, 2.8, 2.8]}
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
                                    style={isTab ? { width: wp('14'), fontSize: wp(2.5)}: { width: wp('20') }}
                                >
                                    {item.C_Num}
                                </Text>
                                <Text
                                    style={isTab ? { width: wp('23'), fontSize: wp(2.5) }: { width: wp('30') }}
                                >
                                    ${item.cost}
                                </Text>
                                <Text
                                    style={isTab ? { width: wp('25') , fontSize: wp(2.5)}: { width: wp('30') }}

                                >
                                    ${item.retail}
                                </Text>
                                <Text
                                    style={isTab ? { width: wp('22'), fontSize: wp(2.5) }: { width: wp('30') }}
                                >
                                    {item.Qty}
                                </Text>
                                <Text
                                    style={isTab ? { width: wp('25') , fontSize: wp(2.5)}: { width: wp('30') }}
                                >
                                    ${item.totalCost ? parseFloat(item.totalCost).toFixed(2) : 0}
                                </Text>
                                <Text
                                    style={isTab ? { width: wp('30'), fontSize: wp(2.5) } : { width: wp('30') }}

                                >
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