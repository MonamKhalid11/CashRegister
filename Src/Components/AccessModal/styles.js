import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({

    HeaderView: {
        flex: 0.09, marginTop: wp(7),
    },
    sectionStyle: {
        marginTop: wp(5),
        height: hp(16),
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
        fontSize: wp(5.5),
        textAlign: 'center',
    },
    DTextStyle: {
        color: 'grey',
        fontWeight: 'bold',
        fontSize: wp(5),
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
        color: '#fff', fontSize: wp(5), fontWeight: 'bold'
    },
    textStyle: {
        color: '#fff', fontSize: wp(5.5), fontWeight: 'bold'
    },

    centeredView: {
        height: hp(100),
        width: wp(100),
        backgroundColor: '#d3d3d3',
        // alignSelf: 'center',
        // marginTop: wp(40),
        // borderRadius: wp(2)
    },
    centeredView1: {
        height: hp(50),
        width: wp(95),
        backgroundColor: '#fff',
        alignSelf: 'center',
        marginTop: wp(30),
        borderRadius: wp(2),
        borderWidth: wp(0.3)
    },
    orderDetail: {
        fontSize: wp(6), color: '#000', fontWeight: 'bold', textAlign: 'center'
    },
    orderDetail1: {
        fontSize: wp(6), color: '#000', fontWeight: 'bold', textAlign: 'center', marginTop: wp('5')
    },
    view1: {
        height: hp(0.15), width: wp(100), backgroundColor: '#000', marginTop: wp(2)
    },
    itemText1: {
        flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: wp(5), marginTop: wp(2), marginRight: wp(2)
    },
    itemText: {
        fontSize: wp(5)
    },
    codeDesign: {
        fontSize: wp(5), fontWeight: 'bold'
    },
    lastView: {
        flexDirection: 'row', paddingHorizontal: wp(10), marginTop: wp(3), justifyContent: 'space-between'
    },
    totalItem1: {
        fontSize: wp(5.5), fontWeight: 'bold'
    },
    btnStyle: {
        flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: wp(10), marginTop: wp(4)
    }
    ,
    crossStyle: {
        height: hp(4), width: wp(7.5), backgroundColor: '#fff', marginLeft: wp(1), borderWidth: wp(0.2), borderRadius: wp(1), alignItems: 'center'
    },
    modalFLatList: {
        flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: wp(2), paddingVertical: wp(2)
    },
    View4: {
        height: hp(0.4), width: wp(85), backgroundColor: '#000', alignSelf: 'center', marginTop: wp('4'), marginBottom: wp('10')
    },
    textInputs: {
        height: hp(6), width: wp(80), backgroundColor: '#DDD', borderRadius: wp(0.7), marginTop: wp(5), alignSelf: 'center', paddingHorizontal: wp(4), justifyContent: 'center'
    },
    texts: {
        color: '#000', fontWeight: 'bold', fontSize: wp(5.5),
    },
    mainView: {
        flexDirection: 'row', backgroundColor: '#DDD', borderRadius: wp(1), height: hp(6), width: wp(79), padding: wp(1), alignSelf: 'center'
    },

    textStyle: {
        fontSize: wp(5), alignSelf: 'center', justifyContent: 'center',
    },
    imageHeight: {
        height: hp(5), width: wp(7),
    },
    textInput: {
        height: hp(7), width: wp(60), justifyContent: 'center', alignSelf: 'center', color: '#000', justifyContent: 'center', fontWeight: 'bold', fontSize: wp(5.5)
    }



})