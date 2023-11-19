import React from 'react';
import {StyleSheet, View} from 'react-native';
import {nw} from './normalize.helper';
import {CategoryCard} from './src/components/CategoryCard/CategoryCard';
import { HomeButton } from './src/components/HomeButton/HomeButton';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#141414',
    height: '100%',
    padding: nw(10),
  },
});

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <CategoryCard />
      <HomeButton/>
    </View>
  );
}

export default App;
