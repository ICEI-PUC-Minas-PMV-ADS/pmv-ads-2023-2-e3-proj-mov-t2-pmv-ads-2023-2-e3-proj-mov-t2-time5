import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { TextInput, Button, Headline } from 'react-native-paper';
import Container from '../components/container';
import Body from '../components/body';
import { useNavigation } from '@react-navigation/native'
import { useUser } from '../contexts/UserContext'

const Acesso = () => {

const navigation = useNavigation();
const {setSigned} = useUser();

const [email, setEmail] = useState('astormg');
const [password, setPassword] = useState('astormg');

  return (
    <Container>
      <Headline style={styles.textHeader}>CAMPANHA DO KILO</Headline>
      <Headline style={{ color: '#FE7277', marginTop: 10, marginBottom: 50, textAlign: 'center'}}>LOGIN</Headline>
      <Body>
        <TextInput
          style={styles.input}
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          label="Senha"
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <Button
          style={styles.box}
          icon="key"
          buttonColor="#FE7277"
          textColor={'black'}
          mode="outlined"
          onPress={() => setSigned(true)}>
          Entrar
        </Button>
        <Button
          style={styles.box}
          buttonColor="#FE7277"
          textColor={'black'}
          mode="outlined"
          onPress={() => navigation.goBack()}>
          Cancelar
        </Button>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
    box: {
        width: '80%',
        marginTop: 20,
        marginBottom: 10,
      },
  textHeader: {
    marginTop: 30,
    marginBottom: 30,
    textAlign: 'center',
  },
  header: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 12
  },
  input: {
    alignItems: 'center',
    fontSize:20,
    marginTop: 20,
    marginBottom:10,
    height: 50,
    width: 250,
    borderWidth: 1,
    padding: 5,
    color:'#FE7277',
    backgroundColor: '#FFF',
    borderColor:'#FE7277',
},
});

export default Acesso;