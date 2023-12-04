import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput, Button, Headline } from 'react-native-paper';
import { Appbar } from 'react-native-paper';
import Container from '../components/container';
import Body from '../components/body';

import { useNavigation } from '@react-navigation/native';
import {useUser} from '../contexts/UserContext';

import {login} from '../services/auth.services';

const Login = () => {

  const navigation = useNavigation();
  const {setSigned, setName, setBairro, setCidade, setContato} = useUser();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

   const handleLogin= () => {

    login({
      email: email,
      password: password
    }).then( res => {

      if(res && res.user){
        setSigned(true);
        setName(res.user.name);
        setBairro(res.user.bairro);
        setCidade(res.user.cidade);
        setContato(res.user.contato);
        //AsyncStorage.setItem('@TOKEN_KEY', res.accessToken).then();
      }else{
         Alert.alert('Atenção', 'Usuário ou senha inválidos!');
      }
    });
  }

  return (
    <Container>
    <Appbar.Header>
      <Appbar.Content title={'Campanha do Quilo'} />
    </Appbar.Header>
      <View style={styles.header}>
      <Headline style={styles.textHeader}>LOGIN</Headline>
      </View>
      <Body>
        <TextInput
          style={styles.textInput}
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.textInput}
          label="Senha"
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <Button
          style={styles.button}
          mode="outlined"
          onPress={handleLogin}>
          LOGIN
        </Button>
        <Button
          style={styles.button}
          mode="outlined"
          onPress={() => navigation.goBack()}>
          Cancelar
        </Button>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    marginBottom: 8,
    backgroundColor: '#FE7277',
    width: '80%',
    height: '7%',
    justifyContent: 'center',
  },
  textHeader: {
    textAlign: 'center',
    marginTop: 50,
    color: '#FE7277'
  },
  header: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 12
  },
  textInput: {
    backgroundColor: '#FFF',
    marginBottom:10,
    height: 50,
    width: 300,
    borderWidth: 1,
    padding: 10,
    color:'#00C2FF',
    borderColor:'#FE7277',
    fontSize: 18,
  }
});

export default Login;