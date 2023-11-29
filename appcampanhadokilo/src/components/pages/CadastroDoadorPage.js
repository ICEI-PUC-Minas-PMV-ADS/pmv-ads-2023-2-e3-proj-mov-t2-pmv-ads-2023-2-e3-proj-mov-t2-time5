import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar, Button, TextInput, Linking} from 'react-native';

const CadastroDoadorPage = () => {

  return(

 <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.container.title}>Cadastrar como Doador</Text>
      <SafeAreaView>
        <TextInput 
          label="Nome"
          style={styles.container.input}
          placeholder="Nome Completo"
          keyboardType="text"
        />
        <TextInput
          label="Bairro"
          style={styles.container.input}
          placeholder="Bairro"
          keyboardType="text"
        />
        <TextInput
          label="Cidade"
          style={styles.container.input}
          placeholder="Cidade"
          keyboardType="text"
        />
        <TextInput
          label="Estado"
          style={styles.container.input}
          placeholder="Estado"
          keyboardType="text"
        />        
        <TextInput
          label="Contato"
          style={styles.container.input}
          placeholder="Contato"
          keyboardType="text"
        />
        <TextInput
          label="Senha"
          style={styles.container.input}
          placeholder="Senha"
          keyboardType="password"
        />
    </SafeAreaView>
      <View style={styles.container.buttons}>
        <Button 
          title="Cadastrar"
          color="#FE7277"
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
      </View>
      <Text style={styles.container.question}>Já tem uma conta?</Text>
      <Text style={styles.container.login}
        onPress={() => {
        }}>
        Entrar
      </Text>
 </View>
  );
}
const styles = StyleSheet.create({
  container: {
    question:{
      fontSize: 14,
      justifyContent:'center',
      color: '#6D7E92',
      },
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    border: {borderWidth: 1, borderColor: '#d5d5d5', width: 100,},
    cadastro: {fontSize:8},
    title:{fontSize:18, padding: 10, color:'#6D7E92'},
    buttons:{
      marginTop: 20,
      width: 300,
      borderRadius: 18,
      padding: 10,
      backgroundColor: '#FE7277',
      borderTopLeftRadius: 6,
      borderBottomRightRadius: 6
    },
    input: {
      height: 40,
      width: 280,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      color:'#00C2FF',
      borderColor:'#00C2FF',
  },
    login:{color:'#FE7277', fontSize:14}
   },
});

export default CadastroDoadorPage;