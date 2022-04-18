import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
  Touchable,
  TouchableOpacity,
  useWindowDimensions,
  Image,
} from 'react-native';
import HeaderComponent from '../../Components/HeaderComponent/HeaderComponent';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import styles from './Styles';
import RenderHtml from 'react-native-render-html';
import {useDispatch, useSelector} from 'react-redux';
import Logo from '../../Assets/logo.png';
import Logo2 from '../../Assets/givingtree.png';
const AboutUs = ({navigation}) => {
  const {toggleDrawer} = navigation; // <-- drawer's navigation (not from stack)
  const tokenChecked = useSelector(state => state?.listing?.tokenChecked);
  const {width} = useWindowDimensions();
  const [first, setFirst] = useState(false);

  useEffect(() => {
    if (tokenChecked == 'peppermint') {
      setFirst(true);
    } else if (tokenChecked == 'givingtree') {
      setFirst(false);
    }
  }, []);

  const source = {
    html: `
      <p style='text-align:center;font-size:20px;font-weight:'bold';>
      Peppermint Lane is an in-school shopping program that offers gift items at reasonable prices for everyone on a child's shopping list. Our goal is to provide quality merchandise and superior customer service for your Holiday Shop. Please contact us for more information at 631-804-2762 or
        <a href="url">mkarusch@gmail.com</a>
      </p>`,
  };
  const source2 = {
    html: `
      <p style='text-align:center;font-size:20px;font-weight:'bold';>
      The Giving Tree is an in-school shopping program that offers gift items at reasonable prices for everyone on a child's shopping list. Our goal is to provide quality merchandise and superior customer service for your Holiday Shop. Please contact us for more information at 502-592-5325 or
        <a href="url">JoysGifts4Kids@aol.com</a>
      </p>`,
  };

  return (
    <ScrollView bounces={0}>
      <View style={{flex: 1}}>
        <View style={styles.headerView}>
          <HeaderComponent
            CashRegister={'About Us'}
            openDrawer={toggleDrawer}
          />
        </View>
        <View style={styles.htmlView}>
          <View style={styles.innerView}>
            <RenderHtml
              contentWidth={width}
              source={first ? source : source2}
            />
            {first ? (
              <Image source={Logo} style={styles.image} />
            ) : (
              <Image source={Logo2} style={styles.image} />
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default AboutUs;
