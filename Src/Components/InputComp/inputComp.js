import React, { useState, useEffect } from 'react'
import { Text, View, ScrollView, Image, OS, TextInput, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const inputFun = props => {
    const marginTop = props.marginTop
    return (

        <View style={[styles.mainView, { marginTop: marginTop }]}>
            {/* <Image resizeMode='contain' source={props.image} style={styles.imageHeight} /> */}
            <TextInput
                onChangeText={props.onChangeText}
                keyboardType={'number-pad'}
                style={styles.textInput} placeholder={props.placeholder} placeholderTextColor={"grey"}>
                <Text style={styles.textStyle}>{props.input}</Text>
            </TextInput>
        </View>
    )


}
export default inputFun;

const styles = StyleSheet.create({

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
        height: hp(7), width: wp(60), justifyContent: 'center', alignSelf: 'center', color: '#000', justifyContent: 'center', fontWeight: 'bold', fontSize: wp(7)
    }

})