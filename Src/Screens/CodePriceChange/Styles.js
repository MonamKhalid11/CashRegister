import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
    HeaderView: {
        flex: 1, marginTop: wp(7),
    },
    costStyle: {
        flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: wp(20), marginLeft: wp(15), marginRight: wp(5)
    },
    flatlistView: {
        flexDirection: 'row', paddingHorizontal: wp(5), justifyContent: 'space-between', paddingVertical: wp(5)
    },
    costStyler: {
        fontSize: wp(5.5), fontWeight: 'bold',
    },
    checkBoxStyle: {
        // height: hp(4.5), width: wp(8), backgroundColor: '#fff', marginLeft: wp(2), borderRadius: wp(1), alignItems: 'center', 
        marginTop: wp(0.5)
    },
    topText: {
        fontSize: wp(5.5), fontWeight: 'bold', color: 'grey'
    },
    textInputStyle: {
        height: hp(5.5), width: wp(26), borderRadius: wp(1), borderWidth: wp(0.2), alignItems: 'center', justifyContent: 'center', fontSize: wp(5), fontWeight: 'bold', padding: wp(1)
    }

})