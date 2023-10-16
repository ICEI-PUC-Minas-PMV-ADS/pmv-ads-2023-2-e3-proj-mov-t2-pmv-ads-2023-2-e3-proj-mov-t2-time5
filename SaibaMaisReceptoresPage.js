import React from 'react';
import {View, Text, Image, Button, StatusBar, StyleSheet, } from 'react-native';

const SaibaMaisReceptoresPage = () => {
  return(
     <View style={styles.container}>
       <Image source={require('../assets/image1.png')} style={styles.backImage}/>
      <StatusBar style="auto" />
      <Text style={styles.container.title}>Julia Andrade</Text>
      <View style={styles.container.box}>
        <Text style={styles.container.more}> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut posuere turpis, vitae luctus lacus Morbi sodales ultrices enim, a porttitor risus aliquam ac. Nullam dictum metus vel pharetra interdum. Donec eu lacus ac nisi suscipit hendrerit placerat ornare lectus. Nulla fringilla at nulla non varius. Cras pulvinar venenatis volutpat. Sed eu velit nec erat vulputate finibus quis at mi. Nullam quis ligula sed urna lacinia bibendum at in lectus. Proin quis semper est.
        </Text>
      </View>
      <Button
        title="DOE AGORA"
        color="#FE7277"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  backImage: {
width: 88,
height: 77,
 },
  container: {
    box: {borderWidth: 1, margin: 20, borderColor: '#FE7277'},
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    title:{fontSize:16,color: '#FE7277',},
    border: {borderWidth: 1, borderColor: '#d5d5d5', width: 100,},
    more: {
      display: "flex",
      textAlign: "Justify",
      fontWeight: "500",
      letterSpacing: 1,
      alignItems: "center",
      fontSize:16, 
      width: 284, 
      height: 323,
      margin: 15
  },
 
}});

export default SaibaMaisReceptoresPage;

