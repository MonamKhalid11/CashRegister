import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({

    HeaderView: {
        flex: 0.08, marginTop: wp(7),
    },
    sectionStyle: {
        marginTop: wp(5),
        height: hp(17),
        width: wp(27),
        borderRadius: wp(1),
        borderWidth: wp(0.4),
        borderColor: 'grey',
        shadowColor: "#000",
        justifyContent: 'center',
        alignItems: 'center',
        // shadowOffset: {
        //     width: 0,
        //     height: 9,
        // },
        // shadowOpacity: 0.50,
        // shadowRadius: 12.35,

        // elevation: 19,



    },
    CTextStyle: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: wp(7),
        textAlign: 'center',
    },
    DTextStyle: {
        color: 'grey',
        fontWeight: 'bold',
        fontSize: wp(7),
        textAlign: 'center',
    },
    ViewFlatList: {
        flex: 0.80,

    },
    secondView: {
        flex: 0.17, flexDirection: 'row', justifyContent: 'space-between',
    },
    toucableView: {
        height: hp(15), width: wp(50), backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'
    },
    toucableView1: {
        height: hp(15), width: wp(49.5), backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'
    },
    totalItem: {
        color: '#fff', fontSize: wp(5)
    },
    textStyle: {
        color: '#fff', fontSize: wp(7)
    },

    centeredView: {
        height: hp(50),
        width: wp(95),
        backgroundColor: '#FFB6C1',
        alignSelf: 'center',
        marginTop: wp(40),
        borderRadius: wp(2)
    },
    centeredView1: {
        height: hp(60),
        width: wp(95),
        backgroundColor: '#fff',
        alignSelf: 'center',
        marginTop: wp(20),
        borderRadius: wp(1)
    },
    orderDetail: {
        fontSize: wp(7), color: '#000', paddingHorizontal: wp(5), marginTop: wp(-5), fontWeight: 'bold'
    },
    orderDetail1: {
        fontSize: wp(8), color: '#000', paddingHorizontal: wp(5), marginTop: wp(-5), fontWeight: 'bold', textAlign: 'center'
    },
    view1: {
        height: hp(0.15), width: wp(95), backgroundColor: '#000', marginTop: wp(2)
    },
    itemText1: {
        flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: wp(5), marginTop: wp(2)
    },
    itemText: {
        fontSize: wp(5)
    },
    codeDesign: {
        fontSize: wp(5)
    },
    lastView: {
        flexDirection: 'row', paddingHorizontal: wp(10), marginTop: wp(3), justifyContent: 'space-between'
    },
    totalItem1: {
        fontSize: wp(6), fontWeight: 'bold'
    },
    btnStyle: {
        flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: wp(10), marginTop: wp(4)
    }
    ,
    crossStyle: {
        height: hp(4.5), width: wp(7.5), backgroundColor: '#fff', marginLeft: wp(2), borderWidth: wp(0.2), borderRadius: wp(1), alignItems: 'center'
    },
    modalFLatList: {
        flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: wp(2), paddingVertical: wp(2)
    },
    View4: {
        height: hp(0.4), width: wp(85), backgroundColor: '#000', alignSelf: 'center', marginTop: wp(3)
    },
    textInputs: {
        height: hp(6), width: wp(80), backgroundColor: '#DDD', borderRadius: wp(0.7), marginTop: wp(5), alignSelf: 'center', paddingHorizontal: wp(4),justifyContent:'center'
    },
    texts: {
        color: '#000', fontWeight: 'bold', fontSize: wp(7),
    }


})