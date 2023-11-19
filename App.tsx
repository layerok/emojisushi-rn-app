import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
const categorySrc = require("./assets/categories/sushi.png")

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#141414',
    height: '100%',
    padding: 10
  },
});

const cardStyles = StyleSheet.create({
  container: {
    backgroundColor: '#1C1C1C',
    width: 165,
    height: 70,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",
    paddingHorizontal: 10
  },
  image: {
    width: 40,
    height: 40,
  },
  text: {
    color: 'white',
    paddingLeft: 15,
    fontSize: 13,
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
