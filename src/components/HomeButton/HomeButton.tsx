import {Image, StyleSheet, Text, View} from 'react-native';
import {nw, nh} from '../../../normalize.helper';
const HomeButtonIcon = require('./home.png');

const styles = StyleSheet.create({
      container: {
          width: nw(60),
          height: nw(60),
          backgroundColor: '#FFE600',
          borderRadius: nw(60),
          alignItems: 'center',
          justifyContent: 'center'

      },
      img: {
        width: nw(20),
        height: nw(20)
      },
      shadowProp: {
        shadowColor: '#FFE60080',
        //shadowOffset: {width: -2, height: 2},
        //shadowOpacity: 1,
        //shadowRadius: 3,
        elevation: 20,
      }
});

export const HomeButton = () => {
  return (
    <View
      style={[styles.container, styles.shadowProp]}>
      <Image source={HomeButtonIcon}  style={styles.img}/>
    </View>
  );
};
