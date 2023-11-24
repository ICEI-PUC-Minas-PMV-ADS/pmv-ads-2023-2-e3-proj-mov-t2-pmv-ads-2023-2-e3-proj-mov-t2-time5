import { React, useState } from "react";
import { Text, Alert, View, Image, StyleSheet } from "react-native";
import { Appbar, Button, Checkbox } from 'react-native-paper';
import { SafeAreaProvider  } from 'react-native-safe-area-context';
import Container from '../components/container';
import Body from '../components/body';
import { useNavigation } from '@react-navigation/native';

const Doacao = () => {
  const navigation = useNavigation();
  const [checkedR, setCheckedR] = useState('false');
  const [checkedA, setCheckedA] = useState('false');
  return (
    <SafeAreaProvider>
    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.navigate('ELista')} />
      <Appbar.Content title={'Campanha do Quilo'} />
    </Appbar.Header>    
    <Container>
      <Body>
                <Text style={{fontSize: 18}}>
                  QUE TIPO DE DOAÇÃO VOCÊ DESEJA REALIZAR?
                </Text>
                <View style={styles.container}>
                <View style={{ marginTop: 100 }}>
                <Checkbox
      status={checkedR ? 'unchecked' : 'checked'}
      color="#FE7277"
      onPress={() => {
        setCheckedR(!checkedR);
      }}
    />
    </View>
                    <Image
                    style={{ height: 200, width:200, marginTop: 20 }}
                    source={require('../../assets/roupas.png')}
                    />
             </View>
                <View style={styles.container}>
                <View style={{ marginTop: 100 }}>
                <Checkbox
      status={checkedA ? 'unchecked' : 'checked'}
      color="#FE7277"
      onPress={() => {
        setCheckedA(!checkedA);
      }}
    />
    </View>
                    <Image
                    style={{ height: 200, width:200, marginTop: 20}}
                    source={require('../../assets/alimentos.png')}
                    />
           </View>
           <Button
  style={{ marginTop: 30 }}
  buttonColor="#FE7277"
  mode="contained"
  onPress={() => Alert.alert('Doação realizada com Sucesso!')}>
    Disponibilizar Doação
  </Button>
</Body>
</Container>
</SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 180,
    marginBottom: 30
  },
});

export default Doacao;