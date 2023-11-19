import {Image, StyleSheet, Text, View} from 'react-native';
const HomeButtonIcon = require('./home.png');

const styles = StyleSheet.create({});

export const HomeButton = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
      }}>
      <Image source={HomeButtonIcon} />
    </View>
  );
};
