import React, { useState, useEffect } from 'react'
import { Text, View, ScrollView, Image, OS, TextInput, StyleSheet, TouchableOpacity, Touchable } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const BtnFunction = props => {
    const marginTop = props.marginTop
    let width = props.width
    let height = props.height
    return (

        <TouchableOpacity
            onPress={props.onPress}
            style={[styles.mainView, { marginTop: marginTop, width: width, height: height }]}>
            {/* <Image source={props.Image} /> */}
            <Text style={styles.textStyle}>{props.Text}</Text>
        </TouchableOpacity>
    )



}
export default BtnFunction;

const styles = StyleSheet.create({
    mainView: {
        borderRadius: wp(2), alignSelf: 'center', justifyContent: 'center', backgroundColor: '#964B00', borderRadius: wp(2)
    },
    textStyle: {
        fontSize: wp(5), alignSelf: 'center', justifyContent: 'center', color: '#fff', marginTop: wp(0.2)
    }
})