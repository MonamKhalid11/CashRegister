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
    const report = useSelector(state => state.listing.dataBase)

    const [finalReport, setFinalReport] = useState();
    const [startDate, setStartDate] = useState(new Date().toISOString().substring(0, 10))
    const [endDate, setEndDate] = useState(new Date().toISOString().substring(0, 10))
    const [tableHead, setTableHead] = useState(['Item Name', 'Cost', 'Retail', 'Total Unit', 'Total Cost', 'Total Price'])

    let array = new Array();



    useEffect(() => {
        Orientation.lockToLandscape();
    }, [navigation])

    const fetchReport = () => {
        console.log("Showing the dates for starting and ending......", report);
        report.map((item, index) => {
            if (item.dateCreated >= startDate && item.dateCreated <= endDate) {
                array.push(item);
                setFinalReport(array)
            }
            else {
                console.log("N o t matched  items.........<<<<<<<<", item)
            }
        })
        console.log("Matched items.........<<<<<<<<", finalReport);

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
                        data={finalReport}
                        extraData={finalReport}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) =>
                            <View style={{ justifyContent: 'space-between', paddingHorizontal: wp(3), flexDirection: 'row' }}>
                                <Text
                                    style={styles.CTextStyle}
                                >
                                    {item.C_Num}
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
                                    {item.Qty}
                                </Text>
                                <Text
                                    style={styles.DTextStyle}
                                >
                                    ${item.cost}
                                </Text>
                                <Text>
                                    ${item.grandTotal}
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