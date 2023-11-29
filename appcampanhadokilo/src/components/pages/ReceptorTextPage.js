import React from 'react';
import {View, TextInput, Text, Image, Button, StatusBar, StyleSheet, ImageBackground} from 'react-native';

const ReceptorTextPage = () => {
  return(
  <View>
    <StatusBar style="auto"/>
    <Image source={require('../assets/banner.png')} style={styles.image}></Image>
    <View style={styles.container.box}>
      <Text style={styles.container.texto}>DESCREVA ABAIXO A SUA NECESSIDADE E O 
        MOTIVO DE ESTAR PRECISANDO DAS DOAÇÕES
      </Text>
    </View>
      <ImageBackground source={require('../assets/image1.png')} style={styles.backImage}/>
      <TextInput 
        label="Necessidades"
        style={styles.container.input}
        placeholder="Digite aqui..."
        keyboardType="text"
      />
      <View style={styles.container.button}>
        <Button 
            title="Salvar"
            color="#FE7277"
            onPress={() => Alert.alert('Button with adjusted color pressed')}
          />
      </View>
  </View>
  )};

const styles = StyleSheet.create = ({
  container:{
    margin: 5,
    box:{
      flex:1,
      marginTop:20,
      marginBottom:10,
      padding:10,
      background: '#E1F953',
    },
    backImage:{
      marginTop:100,
    },
    texto:{
      marginTop:20,
      marginBottom:20,
      color: '#000',
      textAlign: 'center',
      fontFamily: 'Lexend',
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: 20, /* 125% */
      letterSpacing: 0.25,
    },
    input:{
      padding:10,
      marginTop: 40,
      marginLeft:15,
      border:1,
      borderColor: '#FE7277',
      borderStyle: 'solid',
      borderRadius: 3,
      width: 300,
      height: 150,
    },
    button:{
      marginTop: 20,
      marginLeft:15,
      width: 300,
      borderRadius: 18,
      padding: 10,
      backgroundColor: '#FE7277',
      borderTopLeftRadius: 6,
      borderBottomRightRadius: 6
    },
  },
  image:{
    marginTop:50,
    resizeMode: 'contain',
  }
});

export default ReceptorTextPage;

