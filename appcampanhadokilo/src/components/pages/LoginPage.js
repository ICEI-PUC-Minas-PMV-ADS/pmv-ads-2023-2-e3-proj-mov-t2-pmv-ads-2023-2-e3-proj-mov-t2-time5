import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button} from 'react-native';
import { TextInput } from 'react-native';

const LoginPage = () => {

  return(

    <View style={styles.container}>
      <Text style={styles.container.title}>Entrar via Login</Text>
      <View style={styles.container.access}>
        <Text style={styles.container.label}>Login</Text>
        <TextInput style={styles.container.input} />
        <Text style={styles.container.label}>Senha</Text>
        <TextInput style={styles.container.input} />
      </View>
      <Text style={styles.container.password}>Esqueceu sua senha?</Text>
       <View style={styles.container.buttons}>
        <Button 
          title="Entrar"
          color="#FE7277"
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
      </View>
      <Text style={styles.container.cadastro} > Não tem conta? 
        <Text style={styles.container.link}> Cadastre-se</Text>
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    title:{fontSize:18, marginTop: 30, color:'#6D7E92'},
    input: {
      marginBottom:10,
      height: 40,
      width: 280,
      borderWidth: 1,
      padding: 10,
      color:'#00C2FF',
      borderColor:'#00C2FF',
  },
  label:{textAlign:'left', width:240, color:'#00C2FF'},
  cadastro:{color:'#6D7E92', fontSize:14},
  link:{color:'#00A3FF', fontSize:14},
  password:{fontSize:13, color:'#FE7277', width:280, textAlign:'right'},
  buttons:{
      marginTop: 50,
      marginBottom: 50,
      width: 320,
      borderRadius: 5,
      padding: 3,
      backgroundColor: '#FE7277',
      borderTopLeftRadius: 6,
      borderBottomRightRadius: 6
    },
  access:{
    marginTop: 100,
  }
},
});

export default LoginPage;