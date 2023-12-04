import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, Alert, TextInput} from 'react-native';
import { Appbar } from 'react-native-paper';
import { SafeAreaProvider  } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native'
import Container from '../components/container';
import Body from '../components/body';
import {register} from '../services/auth.services'; 

const CadastroDoadorPage = () => {

  const navigation = useNavigation();

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')
  const [estado, setEstado] = useState('')
  const [contato, setContato] = useState('')

  const handleCadastrar = () => {
    register({
      email: email,
      name: name,
      password: password,
      bairro: bairro,
      cidade: cidade,
      estado: estado,
      contato: contato
    }).then( res => {
      if(res){
        Alert.alert('ATENÇÃO', 'Usuário cadastrado com Sucesso!', [{
          text: 'OK', onPress: () => navigation.goBack()
        }]);
      }else{
        Alert.alert('ATENÇÃO', 'Usuário não cadastrado!');
      }
    })
  }

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
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.container.input}
        placeholder="Login"
        />
        <TextInput
        value={name}
        onChangeText={(text) => setName(text)}        
        style={styles.container.input}
        placeholder="Nome Completo"
        />
        <TextInput
          value={bairro}
          onChangeText={(text) => setBairro(text)}
          style={styles.container.input}
          placeholder="Bairro"
        />
        <TextInput
          value={cidade}
          onChangeText={(text) => setCidade(text)}
          style={styles.container.input}
          placeholder="Cidade"
        />
        <TextInput
        value={estado}
        onChangeText={(text) => setEstado(text)}
          style={styles.container.input}
          placeholder="Estado"
        />        
        <TextInput
          value={contato}
          onChangeText={(text) => setContato(text)}
          style={styles.container.input}
          placeholder="Contato"
        />
        <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
        style={styles.container.input}
        placeholder="Senha"
        />
    </SafeAreaView>
      <View style={styles.container.buttons}>
        <Button 
          title="Cadastrar"
          color="#FE7277"
          onPress={() => handleCadastrar()}
        />
      </View>
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
    padding: 10,
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