import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
    HeaderView: {
        flex: 0.08, marginTop: wp(7),
    },
    costStyle: {
        flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: wp(30), marginTop: wp(5)
    },
    flatlistView: {
        flexDirection: 'row', paddingHorizontal: wp(5), justifyContent: 'space-between', paddingVertical: wp(5)
    },
    costStyler: {
        fontSize: wp(6), fontWeight: 'bold',
    },
    checkBoxStyle: {
        height: hp(4.5), width: wp(8), backgroundColor: '#fff', marginLeft: wp(2), borderWidth: wp(0.2), borderRadius: wp(1), alignItems: 'center'
    },
    topText: {
        fontSize: wp(7), fontWeight: 'bold'
    },
    textInputStyle: {
        height: hp(6), width: wp(18), borderRadius: wp(1), borderWidth: wp(0.2), alignItems: 'center', justifyContent: 'center'
    }

})