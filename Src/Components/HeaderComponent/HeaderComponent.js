import React, { useEffect, useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View, Image, Touchable, TouchableOpacity
} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Feather';



const HeaderComponent = (props) => {
    const [isTab, setIsTab] = useState(false);

    useEffect(()=> {
        setIsTab(DeviceInfo.isTablet())
    })
    return (
        // console.log("response of the header comp=>", props),
        <View style={{ height: hp(10), width: wp(100), }}>

            <View style={{ flexDirection: 'row', paddingHorizontal: wp(5), justifyContent: 'space-between' }}>

                <TouchableOpacity
                    onPress={props.openDrawer}
                    style={{ height: hp(5), width: wp(10), backgroundColor: '#fff', borderWidth: wp(0.2), borderRadius: wp(1), alignItems: 'center', marginLeft: wp(1)}}>
                    <Icon name="menu" size={isTab ? 50 : 30} color="grey" />
                </TouchableOpacity>

                <Text style={{ fontSize: wp(5), fontWeight: 'bold', color: 'red', alignSelf: 'center' }}>
                    {props.CashRegister}
                </Text>
                <TouchableOpacity
                    onPress={props.modal}
                // style={styles.sectionStyle}
                >
                    <View style={{ backgroundColor: props.backgroundColor, borderWidth: props.borderWidth, borderRadius: wp(1), alignItems: 'center', height: hp(5.5), width: wp(12), marginRight: wp(1) }}>
                        <Image source={props.shoppingCart} style={{ height: hp(5), width: wp(8), tintColor: 'grey' }} resizeMode='contain' />
                    </View>
                </TouchableOpacity>

            </View>
            <View style={{ backgroundColor: 'red', height: hp(0.3), width: wp(100), marginTop: wp(3) }} />


        </View>
    )

}
export default HeaderComponent