//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles'
import Cross from 'react-native-vector-icons/Entypo';
import CrossSingle from 'react-native-vector-icons/Entypo';
import BtnComponent from '../../Components/BtnComp/BtnComp'
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP } from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'


// create a component
const AccessModal = (props) => {
    const marginTop = props.marginTop
    return (
        <View>
            <Modal
                {...props}
            >
                <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={styles.centeredView1}>
                        <Text style={styles.orderDetail1}>Enter Access Code</Text>
                        <View style={styles.View4} />
                        <View style={[styles.mainView, { marginTop: marginTop }]}>
                            <TextInput
                                onChangeText={props.onChange}
                                style={styles.textInput}
                                placeholder="Access Code"
                                placeholderTextColor={"grey"}>
                            </TextInput>
                        </View>
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
