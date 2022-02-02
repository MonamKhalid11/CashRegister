import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  headerView: {
    flex: 0.08,
    marginTop: wp(7),
  },
  htmlView: {
    flex: 0.98,
    marginTop: wp(2),
  },
  innerView: {
    width: wp(95),
    marginTop: wp(10),
    marginLeft: wp(2.5),
    flex: 1,
  },
  image: {
    width: wp('70'),
    height: wp('35'),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});
