import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({

    viewTextInput: {
        height: hp(50), width: wp(90), borderRadius: 10, borderWidth: 5, borderColor: 'grey', marginTop: wp(20), alignSelf: 'center',
    },
    placeHolderText: {
        height: 60, width: wp(80), fontSize: wp(5), marginTop: wp(2), marginLeft: wp(5)
    },
    btnStyle: {
        height: 60, width: wp(70), alignSelf: 'center', justifyContent: 'center', backgroundColor: '#36454F',
        marginTop: wp(12)
    },
    btnText: {
        color: '#fff', fontSize: 30, textAlign: 'center', fontWeight: 'bold'
    },
    lastView: {
        backgroundColor: 'red', height: '13%', width: '100%', position: 'absolute', bottom: 0, alignItems: 'center', justifyContent: 'center'
    },
    textHoliday: {
        textAlign: 'center', fontSize: 25, fontWeight: 'bold'
    },
    viewForget: {
        backgroundColor: 'grey', height: hp(8), width: wp(88), justifyContent: 'center'
    },
    forgetText: {
        color: '#000', textAlign: 'center', fontWeight: 'bold', fontSize: wp(5)
    }

})