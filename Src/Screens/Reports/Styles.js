import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
    HeaderView: {
        flex: 0.08, marginTop: wp(4),
    },

    toucable: {
        height: hp(5.5), width: wp(12), backgroundColor: '#fff', borderWidth: wp(0.2), borderRadius: wp(1), alignItems: 'center'
    },
    reportText: {
        fontSize: wp(7), fontWeight: 'bold', color: 'red', marginLeft: wp(70)
    },
    redView: {
        height: hp(0.5), width: wp(190), backgroundColor: 'red', marginTop: wp(2)
    },
    lastView: {
        flex: 0.93, marginTop: wp(7)
    },
    innerLastView: {
        height: hp(8), width: wp(190), backgroundColor: '#DDD'
    },
    dateView: {
        flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: wp(5), marginTop: wp(2)
    },
    selecctedDate: {
        fontSize: wp(6), marginLeft: wp(4), fontWeight: 'bold'
    }
    ,
    emailStyle: {
        height: hp(6), width: wp(18), backgroundColor: 'grey', alignItems: 'center', justifyContent: 'center', borderRadius: wp(2)
    },
    CTextStyle:{
    }
})