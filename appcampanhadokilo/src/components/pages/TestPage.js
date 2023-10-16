// TestPage.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TestPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Esta é a página de teste do React Native!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default TestPage;
