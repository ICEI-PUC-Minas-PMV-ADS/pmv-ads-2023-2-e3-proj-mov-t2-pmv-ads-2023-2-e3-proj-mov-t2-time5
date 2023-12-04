import React from 'react';
import { StyleSheet, View } from 'react-native';
import Container from '../components/container';
import Body from '../components/body';
import { Appbar, Text } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const SobreNos = () => {
  return (
    <SafeAreaProvider>
    <Container>
    <Appbar.Header>
      <Appbar.Content title={'Campanha do Quilo'} />
    </Appbar.Header>
      <Body>
        <Text style={styles.title}>SOBRE NÓS</Text>
        <View style={styles.box}>
          <Text style={styles.texto}>
          Acreditamos que todos podem fazer a diferença no mundo, mesmo com pequenas ações. É por isso que criamos a Campanha do Quilo, 
          um aplicativo de doação que torna fácil e conveniente ajudar quem precisa.
          Com a Campanha do Quilo, você pode doar alimentos, roupas e outros itens para quem precisa.
          A Campanha do Quilo é uma maneira fácil de fazer a diferença no mundo.
          </Text>
        </View>
      </Body>
    </Container>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
    title: { fontSize: 26, color: '#FE7277', textAlign: 'center', fontWeight: 900, lineHeight: 30, paddingTop: 20},
    box: { Width: '100%', borderWidth: 1, margin: 20, borderColor: '#FE7277' },
    texto: { fontSize: 24, textAlign: 'justify', margin: 10, lineHeight: 30}
});

export default SobreNos;
