import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
    HeaderView: {
        flex: 0.08, marginTop: wp(4),
    },

    toucable: {
        height: hp(5), width: wp(10), backgroundColor: '#fff', borderWidth: wp(0.2), borderRadius: wp(1), alignItems: 'center'
    },
    reportText: {
        fontSize: wp(5), fontWeight: 'bold', color: 'red', marginLeft: wp(60)
    },
    reportTextTab: {
        fontSize: wp(5), fontWeight: 'bold', color: 'red', marginLeft: wp(40)
    },
    redView: {
        height: hp(0.5), width: wp(190), backgroundColor: 'red', marginTop: wp(2)
    },
    lastView: {
        flex: 0.93, marginTop: wp(8.5)
    },
    innerLastView: {
        height: hp(8), width: wp(190), backgroundColor: '#DDD'
    },
    innerLastViewTab: {
        height: hp(8), width: wp(135), backgroundColor: '#DDD'
    },
    dateView: {
        flexDirection: 'row', justifyContent: 'space-between', marginTop: wp(2), marginRight: wp(15)
    },
    dateViewTab: {
        flexDirection: 'row', justifyContent: 'space-around', marginTop: wp(2), 
    },
    selecctedDate: {
        fontSize: wp(5.5), marginLeft: wp(4), fontWeight: 'bold', alignSelf: 'center'
    },
    selecctedDateTab: {
        fontSize: wp(5), fontWeight: 'bold'
    },
    datePicker: { height: hp(5), width: wp(25), marginTop: hp(0.4) },
    datePickerTab: { height: hp(5), width: wp(20), marginTop: hp(1) },
    emailStyle: {
        height: hp(6.4), width: wp(16), backgroundColor: 'grey', alignItems: 'center', justifyContent: 'center', borderRadius: wp(2)
    },
    emailStyleTab: {
        height: hp(5.5),marginTop: wp(0.5), width: wp(10), backgroundColor: 'grey', alignItems: 'center', justifyContent: 'center', borderRadius: wp(2)
    },
    tableContainer: { 
        height: hp(30), 
        width: wp(176), 
        alignSelf: 'center', 
        marginTop: wp(2), 
        borderWidth: wp(1.2), 
        borderColor: 'grey' 
    },

        tableContainerTab: { 
            height: hp(40), 
            width: wp(135), 
            alignSelf: 'center', 
            marginTop: wp(2), 
            borderWidth: wp(1.2), 
            borderColor: 'grey' },
    grandBar: {
        backgroundColor: "grey", marginHorizontal: wp(1), height: wp(6), flexDirection: 'row', justifyContent: 'space-evenly',
    },
    grandBarText: {
        fontSize: wp(4.5), fontWeight: 'bold',
    },
    customLoader: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    text: {
        color: '#000000',
        fontSize: wp(5),
    },
    bottomLine: {
        padding: wp('4'),
        justifyContent: 'center',
        borderBottomWidth: 0.7,
        borderColor: '#000000',
    },
})