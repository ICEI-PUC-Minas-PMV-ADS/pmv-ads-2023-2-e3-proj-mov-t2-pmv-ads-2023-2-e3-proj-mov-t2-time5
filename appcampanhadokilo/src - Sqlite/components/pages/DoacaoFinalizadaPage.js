import React from 'react';
import { Image, StyleSheet, Text, View, StatusBar, Button, TouchableOpacity} from 'react-native';


const DoacaoFinalizadaPage = () => {
  return(

 <View style={styles.container}>
      <StatusBar style="auto" />
      <Image source={require('../assets/banner.png')} style={styles.backImage} blurRadius={0}>
      </Image>
      <View style={styles.container.box}>
        <Text style={styles.container.text}> Obrigado por contribuir com os cuidados básicos de milhares de familias.</Text>
      </View>
      <View style={styles.container.buttons}>
        <Text style={styles.buttonsText}> REALIZAR NOVA DOAÇÃO </Text>
      </View>
      <View style={styles.container.buttons}>
        <Text style={styles.buttonsText}> VOLTAR PARA HOME </Text>
      </View>
 </View>
 
  );


}

const styles = StyleSheet.create({
  backImage: {
    position: 'absolute',
    top: 40,
    left: 0,
    width: '100%',
    height: '10%',
      
    },
  container: {
    text: {
      alignContent: 'center',
      padding: 70,
      textAling: 'center',
      fontSize: 20,
      fontFamily: 'lexend',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: 20, 
      letterSpacing: 0.85,    
    },
    
    box:{
      marginBottom: 30,
      marginTop: 90,
      backgroundColor: '#E1F953',
      width: '100%', 
      height: 311,
      justifyContent:'center',
      color: '#6D7E92',
      },
   
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
    buttons: {
      width: 281,
      height: 42,
      borderRadius: 5,
      backgroundColor: '#FE7277',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
      color: '#FFFF',
      
  },

  
   },
});

export default DoacaoFinalizadaPage;

