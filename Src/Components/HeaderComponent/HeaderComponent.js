import React, { useEffect } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View, Image, Touchable, TouchableOpacity
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Feather';



const HeaderComponent = (props) => {

    return (
        // console.log("response of the header comp=>", props),
        <View style={{ height: hp(15), width: wp(100) }}>

            <View style={{ flexDirection: 'row', paddingHorizontal: wp(5), justifyContent: 'space-between' }}>

                <TouchableOpacity
                    onPress={props.openDrawer}
                    style={{ height: hp(5.5), width: wp(12), backgroundColor: '#fff', borderWidth: wp(0.2), borderRadius: wp(1), alignItems: 'center' }}>
                    <Icon name="menu" size={30} color="grey" style={{ marginTop: wp(1.5) }} />
                </TouchableOpacity>

                <Text style={{ fontSize: wp(7), fontWeight: 'bold', color: 'red' }}>
                    {props.CashRegister}
                </Text>
                <TouchableOpacity
                    onPress={props.modal}
                // style={styles.sectionStyle}
                >
                    <View style={{ backgroundColor: props.backgroundColor, borderWidth: props.borderWidth, borderRadius: wp(1), alignItems: 'center', height: hp(6), width: wp(13) }}>
                        <Image source={props.shoppingCart} style={{ height: hp(6), width: wp(9), tintColor: 'grey' }} resizeMode='contain' />
                    </View>
                </TouchableOpacity>

            </View>
            <View style={{ backgroundColor: 'red', height: hp(0.3), width: wp(100), marginTop: wp(3) }} />


        </View>
    )

}
export default HeaderComponent