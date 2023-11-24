import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, Alert, TextInput} from 'react-native';
import { Appbar } from 'react-native-paper';
import { SafeAreaProvider  } from 'react-native-safe-area-context';
import Container from '../components/container';
import Body from '../components/body';

const CadastroDoadorPage = () => {

  return(
    <SafeAreaProvider>
    <Container>
    <Appbar.Header>
      <Appbar.Content title={'Campanha do Quilo'} />
    </Appbar.Header>
      <Body>
      <Text style={styles.container.title}>NOVO CADASTRO</Text>
      <SafeAreaView>
        <TextInput 
        style={styles.container.input}
        placeholder="Nome Completo"
        />
        <TextInput
          style={styles.container.input}
          placeholder="Bairro"
        />
        <TextInput
          style={styles.container.input}
          placeholder="Cidade"
        />
        <TextInput
          style={styles.container.input}
          placeholder="Estado"
        />        
        <TextInput
          style={styles.container.input}
          placeholder="Contato"
        />
        <TextInput
        secureTextEntry={true}
        style={styles.container.input}
        placeholder="Senha"
        />
    </SafeAreaView>
      <View style={styles.container.buttons}>
        <Button 
          title="Cadastrar"
          color="#FE7277"
          onPress={() => Alert.alert('Cadastro Efetuado com Sucesso!')}
        />
      </View>
      <Text style={styles.container.question}>Já tem uma conta?</Text>
      <Text style={styles.container.login}
        onPress={() => {
        }}>
        Entrar
      </Text>
 </Body>
 </Container>
 </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    question:{
      fontSize: 14,
      justifyContent:'center',
      color: '#6D7E92',
      },
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
    backgroundColor:'#fff',
    height: 40,
    width: 280,
    margin: 12,
    borderWidth: 1,
    borderColor:'#00C2FF',
  },
    login:{color:'#FE7277', fontSize:14}
   },
});

export default CadastroDoadorPage;