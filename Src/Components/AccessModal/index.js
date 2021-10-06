//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import styles from './styles'
import Cross from 'react-native-vector-icons/Entypo';
import CrossSingle from 'react-native-vector-icons/Entypo';
import AppInput from '../../Components/InputComp/inputComp'
import BtnComponent from '../../Components/BtnComp/BtnComp'
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP } from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'


// create a component
const AccessModal = (props) => {

    return (
        <View>
            <Modal
                {...props}
            >
                <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>

                    <View style={styles.centeredView1}>
                        {/* <TouchableOpacity onPress={() => setAccessModalVisible(!AccessModalVisible)} style={{ width: wp(12), alignSelf: 'flex-end', marginTop: wp(2) }}>
                            <Cross name="circle-with-cross" size={42} color="grey" />
                        </TouchableOpacity> */}
                        <Text style={styles.orderDetail1}>Enter Access Code</Text>
                        <View style={styles.View4} />
                        <AppInput
                            placeholder={"Access Code"}
                            marginTop={wp(5)}
                            onChangeText={props.onChange}
                        // placeholderTextColor={"black"}
                        />
                        <BtnComponent
                            Text={"Submit"}
                            width={wp(70)}
                            height={hp(6)}
                            marginTop={wp(15)}
                            onPress={props.onPress}
                        />
                    </View>
                </KeyboardAwareScrollView>
            </Modal>
        </View>

    );
};

//make this component available to the app
export default AccessModal;
