import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({

    firstView: {
        height: hp(23), width: wp(100), borderBottomWidth: wp(2.5), borderBottomColor: 'grey'
    },
    schoolView: {
        height: hp(8), width: wp(100), backgroundColor: '#DDD'
    },
    innerView: {
        alignSelf: 'center', justifyContent: 'center', width: wp(25), marginTop: wp(2)
    },
    enterSchool: {
        fontSize: wp(4), fontWeight: 'bold'
    },
    melodyView: {
        height: hp(36.5), width: wp(100), marginTop: wp(10), paddingHorizontal: wp(5),
    },
    melodyText1: {
        fontSize: wp(7), fontWeight: 'bold'
    },
    melody2: {
        fontSize: wp(7), fontWeight: 'bold', marginTop: wp(5)
    },
    textInput: {
        height: hp(8), width: wp(80), fontSize: wp(7), marginTop: wp(5)
    },
    lastView: {
        backgroundColor: 'red', height: hp(10), width: wp(100), position: 'absolute', bottom: 0, justifyContent: 'center', alignItems: 'center'
    },
    textPeppermint: {
        textAlign: 'center', fontSize: 25, fontWeight: 'bold'
    }

})