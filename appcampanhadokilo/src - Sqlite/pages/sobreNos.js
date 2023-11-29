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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut
            posuere turpis, vitae luctus lacus Morbi sodales ultrices enim, a
            porttitor risus aliquam ac. Nullam dictum metus vel pharetra
            interdum. Donec eu lacus ac nisi suscipit hendrerit placerat ornare
            lectus. Nulla fringilla at nulla non varius. Cras pulvinar venenatis
            volutpat. Sed eu velit nec erat vulputate finibus quis at mi. Nullam
            quis ligula sed urna lacinia bibendum at in lectus. Proin quis
            semper est.
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
