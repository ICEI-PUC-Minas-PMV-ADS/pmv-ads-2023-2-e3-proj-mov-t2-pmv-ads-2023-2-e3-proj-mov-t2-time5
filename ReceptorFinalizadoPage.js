import React from 'react';
import {View, Text, Image, Button, StatusBar, StyleSheet} from 'react-native';

const ReceptorFinalizadoPage = () => {
  return(
<View>
    <StatusBar style="auto"/>
    <Image source={require('../assets/banner.png')} style={styles.image}></Image>
    <View style={styles.container.box}>
      <Text style={styles.container.texto}>OBRIGADO POR FINALIZAR O SEU CADASTRO!
EM BREVE, ALGUNS DOADORES ENTRARAM EM CONTATO, PARA COMBINAR A ENTREGA DAS SUAS DOAÇÕES
      </Text>
    </View>
      <View style={styles.container.button}>
        <Button 
            title="VOLTAR PARA A HOME"
            color="#FE7277"
            onPress={() => Alert.alert('Button with adjusted color pressed')}
          />
      </View>
  </View>
  )};

const styles = StyleSheet.create({
  container: { 
    margin: 5,
    box:{
    flex:1,
    marginTop:60,
    marginBottom:10,
    padding:10,
    background: '#E1F953',
  },
  texto:{
    marginTop:20,
    marginBottom:20,
    color: '#000',
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 20, /* 125% */
    letterSpacing: 0.25,
  },
  button:{
    marginTop: 100,
    marginLeft: 70,
    width: 190,
    borderRadius: 18,
    padding: 10,
    backgroundColor: '#FE7278',
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 6
  },
  },
  image:{
    marginTop: 10,
    resizeMode: 'contain',
  }
});
export default ReceptorFinalizadoPage;

