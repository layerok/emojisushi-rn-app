import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { nw, nh } from './normalize.helper';
const categorySrc = require("./assets/categories/sushi.png")

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#141414',
    height: '100%',
    padding: nw(10)
  },
});

const cardStyles = StyleSheet.create({
  container: {
    backgroundColor: '#1C1C1C',
    width: nw(165),
    height: nh(70),
    borderRadius: nw(10),
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",
    paddingHorizontal: nw(10)
  },
  image: {
    width: nw(40),
    height: nw(40) 
  },
  text: {
    color: 'white',
    paddingLeft: nw(15),
    fontSize: nh(13),
    fontWeight: "300",
  },
});

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={cardStyles.container}>
        <Image style={cardStyles.image} source={categorySrc} />
        <Text style={cardStyles.text}>
          Роли
        </Text>
      </View>
    </View>
  );
}

export default App;
