import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { widthPercentageToDP as w, heightPercentageToDP as h, widthPercentageToDP } from 'react-native-responsive-screen';

import Desktop from 'react-native-vector-icons/AntDesign';
import User from 'react-native-vector-icons/Entypo';
import Tag from 'react-native-vector-icons/AntDesign';
import Key from 'react-native-vector-icons/FontAwesome5';
import Report from 'react-native-vector-icons/Entypo';
import Inform from 'react-native-vector-icons/AntDesign';
import FileText from 'react-native-vector-icons/AntDesign';







class Setting extends Component {
    render() {
        return (
            <ScrollView contentContainerStyle = {styles.container}>
            <View style={styles.container}>

                <View style={styles.LinksContiner}>
                    <View style={{ flexDirection: 'row', }}>
                        <Desktop name="iconfontdesktop" size={33} color="#fff" style={{ marginRight: widthPercentageToDP(3) }} />
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('MainScreen')}
                        >
                            <Text style={styles.Btnlabel}>Cash Register</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ backgroundColor: 'red', height: h(0.4), width: w(60), marginTop: w(3) }} />

                    <View style={{ flexDirection: 'row', marginTop: widthPercentageToDP(5), }}>
                        <User name="user" size={33} color="#DDD" style={{ marginRight: widthPercentageToDP(3) }} />

                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('ProfileScreen')}
                            style={styles.Btn} >
                            <Text style={styles.Btnlabel}>Our Profile</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: widthPercentageToDP(5), }}>
                        <User name="tag" size={33} color="#DDD" style={{ marginRight: widthPercentageToDP(3) }} />
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('CodePriceChange')}
                            style={styles.Btn} >
                            <Text style={styles.Btnlabel}>Code Price Change</Text>
                        </TouchableOpacity>

                    </View>


                    <View style={{ flexDirection: 'row', marginTop: widthPercentageToDP(5), }}>
                        <Key name="key" size={33} color="#DDD" style={{ marginRight: widthPercentageToDP(3) }} />
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('ForgetPassword')}
                            style={styles.Btn} >
                            <Text style={styles.Btnlabel}>Change Password</Text>
                        </TouchableOpacity>
                    </View>



                    <View style={{ flexDirection: 'row', marginTop: widthPercentageToDP(5), }}>
                        <Report name="bar-graph" size={33} color="#DDD" style={{ marginRight: widthPercentageToDP(3) }} />
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Reports')}
                            style={styles.Btn} >
                            <Text style={styles.Btnlabel}>Report</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={{ flexDirection: 'row', marginTop: widthPercentageToDP(5), }}>
                        <Inform name="infocirlce" size={33} color="#DDD" style={{ marginRight: widthPercentageToDP(3) }} />
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('AboutUs')}
                            style={styles.Btn} >
                            <Text style={styles.Btnlabel}>About Us</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={{ flexDirection: 'row', marginTop: widthPercentageToDP(5), }}>
                        <FileText name="filetext1" size={33} color="#fff" style={{ marginRight: widthPercentageToDP(3) }} />
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('AboutUs')}
                            style={styles.Btn} >
                            <Text style={styles.Btnlabel}>Instructions</Text>
                        </TouchableOpacity>
                    </View>

                </View>


            </View>
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#696969',
    },
    header:
    {
        height: h('25%'),
        // backgroundColor: '#ada',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img:
    {
        width: w('50%'),
        height: h('20%'),
        backgroundColor: '#aaa3',
        borderRadius: h('10%'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    LinksContiner:
    {
        paddingLeft: h('2%'),
        marginTop: w(15)
    },
    Btn:
    {
        marginTop: h('1%')
    },
    Btnlabel:
    {
        fontSize: h('2.8%'),
        color: '#fff',
        fontWeight: 'bold', marginRight: w(19), width: w(50)
    }
});

//make this component available to the app
export default Setting;

