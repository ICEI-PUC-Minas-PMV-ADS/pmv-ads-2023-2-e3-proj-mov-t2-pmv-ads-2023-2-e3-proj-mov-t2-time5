import React from 'react';
import {View, TextInput, Text, Image, Button, StatusBar, StyleSheet} from 'react-native';

const ReceptorTextPage = () => {
  return(
  <View>
    <StatusBar style="auto"/>
    <Image source={require('../assets/Donation.png')} style={styles.image}></Image>
    <View>
      <Text style={styles.container}>Testando</Text>
    </View>
  </View>
  )};

const styles = StyleSheet.create = ({
  container:{
    margin: 5,
  },
  image:{
    width:359,
    height:73,
    marginTop:50,
    resizeMode: 'stretch',
  }
});

export default ReceptorTextPage;

