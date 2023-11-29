import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, ImageBackground, Button} from 'react-native';

const EscolhaDoação1 = () => {
  return(

<View>
  <View style={styles.clothesImageContainer}>
    <View style={styles.foodImageContainer}>
      <View style={styles.container.button1}>
        <View style={styles.container.button2}>
          <View style={styles.container.box}>
            <StatusBar style="auto" />
            <Text style={styles.container.texto}>QUE TIPO DE DOAÇÃO VOCÊ DESEJA RECEBER?</Text>
          </View>  
    <Image
      source={require('./assets/roupas.png')}
      style={styles.foodImage}
    />
  </View>
      <Image
        source={require('./assets/alimentos.png')}
        style={styles.foodImage}
      />
    </View>   
        <Button 
          title="Roupas"
          color="#FE7277"
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
      </View>
          <Button 
            title="Alimentos"
            color="#FE7277"
            onPress={() => Alert.alert('Button with adjusted color pressed')}
          />
        </View>
</View>
  );
}
const styles = StyleSheet.create = ({
  container:{
    box:{
      marginTop:20,
      marginBottom:50,
      padding:15,
      background: '#E1F953',
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
    button1:{
      marginTop: 5,
      width: 330,
      borderRadius: 2,
      padding: 10,
    },
}});

export default EscolhaDoação1;