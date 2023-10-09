import React from 'react';
import { ImageBackground, StyleSheet, Text, View, StatusBar, Button} from 'react-native';

const AccessPage = () => {

  return(

 <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground source={require('../assets/Donation.png')} style={styles.backImage} blurRadius={1}>
      </ImageBackground>
      <Text style={styles.container.title}>Entre ou Cadastre-se</Text>
      <View style={styles.container.box}>
        <Text style={styles.container.box}>Para Prosseguir com a Doação você precisa entrar ou se cadastrar.</Text>
      </View>
      <View style={styles.container.buttons}>
        <Button 
          title="Cadastrar"
          color="#FE7277"
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
      </View>
      <View style={styles.container.buttons}>
        <Button 
          title="Entrar"
          color="#FE7277"
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
      </View>
 </View>
  );
}
const styles = StyleSheet.create({
  backImage: {
      width: 300, 
      height: 200,
      },
  container: {
    box:{
      fontSize: 14,
      marginLeft: 35,
      marginRight: 22,
      justifyContent:'center',
      color: '#6D7E92',
      },
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    border: {borderWidth: 1, borderColor: '#d5d5d5', width: 100,},
    cadastro: {fontSize:8},
    title:{fontSize:20, padding: 10, color:'#000'},
    buttons:{
      marginTop: 20,
      width: 180,
      borderRadius: 18,
      padding: 10,
      backgroundColor: '#FE7277',
      borderTopLeftRadius: 6,
      borderBottomRightRadius: 6
    }
   },
});

export default AccessPage;