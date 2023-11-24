import React from 'react';
import { ImageBackground, StyleSheet, View, Alert } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { Appbar } from 'react-native-paper';
import { SafeAreaProvider  } from 'react-native-safe-area-context';

import Container from '../components/container';
import Body from '../components/body';

const Cadastro = () => {

  return (
    <SafeAreaProvider>
    <Container>
    <Appbar.Header>
      <Appbar.Content title={'Campanha do Quilo'} />
    </Appbar.Header>
      <Body>
        <ImageBackground
          style={styles.backImage}
          source={require('../../assets/Donation.png')}
          blurRadius={1}
        />
        <View style={styles.box}>
          <Text style={styles.title}>Entre ou Cadastre-se </Text>
          <Text style={styles.texto}>
            Para Prosseguir você precisa entrar ou se cadastrar.
          </Text>
        </View>
        <Button
          style={styles.box}
          buttonColor="#FE7277"
          textColor={'black'}
          mode="outlined"
          onPress={() => Alert.alert('Preste Atenção!', 'Teste do botão Cadastrar')}>
          Cadastrar
        </Button>
        <Button
          style={styles.box}
          icon="key"
          buttonColor="#FE7277"
          textColor={'black'}
          mode="outlined"
          onPress={() => Alert.alert('Preste Atenção!','Teste do Botão Entrar')}>
          Entrar
        </Button>
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
    width: '80%',
    marginBottom: 10,
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