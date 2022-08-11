import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({

    firstView: {
        height: hp(23), width: wp(100), borderBottomWidth: wp(2.5), borderBottomColor: 'grey'
    },
    schoolView: {
        padding: hp(2), width: wp('100%'), backgroundColor: '#DDD'
    },
    innerView: {
        alignItems: 'center', justifyContent: 'center'
    },
    innerViewTab: {
        alignItems: 'center', justifyContent: 'center'
    },
    enterSchool: {
        fontSize: wp(4), fontWeight: 'bold'
    },
    melodyView: {
        height: hp(43.5), width: wp(100), marginTop: wp(10), paddingHorizontal: wp(5),
    },
    melodyText1: {
        fontSize: wp(6), fontWeight: 'bold'
    },
    melody2: {
        fontSize: wp(6), fontWeight: 'bold', marginTop: wp(5)
    },
    textInput: {
        height: hp(6), width: wp('80%'), fontSize: wp(5), marginVertical: wp('4'), marginBottom: wp('10'),
    },
    lastView: {
        backgroundColor: 'red', height: hp(10), width: wp('100%'), position: 'absolute', bottom: 0, justifyContent: 'center', alignItems: 'center'
    },
    textPeppermint: {
        textAlign: 'center', fontSize: wp('4'), fontWeight: 'bold'
    }
})