import React from 'react';
import { ImageBackground, StyleSheet, View, Alert } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { Appbar } from 'react-native-paper';
import { SafeAreaProvider  } from 'react-native-safe-area-context';
import Container from '../components/container';
import Body from '../components/body';
import {useNavigation} from '@react-navigation/native'
import { useUser } from '../contexts/UserContext'

const Cadastro = () => {

const { name, setSigned } = useUser();
  const navigation = useNavigation();
  const handleSair = () => {
    setSigned(false);
  }
  return (
    <SafeAreaProvider>
    <Appbar.Header>
      <Appbar.Content title={'Campanha do Quilo'} />
    </Appbar.Header>
    <Container>
      <Body>
        <ImageBackground
          style={styles.backImage}
          source={require('../../assets/Donation.png')}
          blurRadius={1}
        />
        <View style={styles.box}>
          <Text style={styles.texto}>
            SEJA BEM VINDA(O) AO MUNDO DA CARIDADE, {name}
          </Text>
          <Button
          style={styles.box}
          buttonColor="#FE7277"
          textColor={'black'}
          mode="outlined"
          onPress={() => handleSair()}>
          Sair
        </Button>
        </View>
      </Body>
    </Container>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  backImage: {
    width: '100%',
    height: 300,
  },
  box: {
    marginTop: 20,
    width: '80%',
    marginBottom: 10,
    alignItems: 'center'
  },
  title: {
    marginTop: 10,
    fontFamily: 'Roboto',
    fontWeight: 700,
    lineHeight: 20,
    letterSpacing: 0.25,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
  },
  texto: {
    marginTop: 10,
    fontFamily: 'Roboto',
    fontWeight: 300,
    lineHeight: 20,
    letterSpacing: 0.1,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
  },
});

export default Cadastro;