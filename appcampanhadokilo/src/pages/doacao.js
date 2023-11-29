import { React, useState, useEffect } from "react";
import { Text, Alert, View, Image, StyleSheet} from "react-native";
import { Appbar, Button, RadioButton } from 'react-native-paper';
import { SafeAreaProvider  } from 'react-native-safe-area-context';
import Container from '../components/container';
import Body from '../components/body';
import { useNavigation } from '@react-navigation/native';
import { insertDoacao, updateDoacao, deleteDoacao } from "../services/GastosServicesBb";

const Doacao = ({route}) => {

  const navigation = useNavigation();
  const { item } = route.params? route.params : {};
  const [checked, setChecked] = useState();

  useEffect(() => {
    if ( item ){
      setChecked(item.tipo);
    }
  }, [item])

  handleSalvar = () => {
    if (item){
      updateDoacao(
        {
          tipo: checked,
          user: 'general',
          cidade: 'SambariLove',
          bairro: 'Emoção',
          status: 0,
          id: item.id
        }
      ).then()
  }else{
    insertDoacao(
      {
        tipo: checked,
        user: 'general',
        cidade: 'Ubatuba',
        bairro: 'Felicidade',
        status: 0
      }
    ).then();
  };
  navigation.goBack();
}

handleExcluir = () => {
  deleteDoacao(item.id).then()
  navigation.goBack()
};

  return (
    <SafeAreaProvider>
    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.navigate('ELista')} />
      <Appbar.Content title={'Campanha do Quilo'} />
      {
        item &&
        <Appbar.Action icon={'trash-can'} onPress={()=> handleExcluir()} />
      }
    </Appbar.Header>    
    <Container>
      <Body>
                <Text style={{fontSize: 18}}>
                  QUE TIPO DE DOAÇÃO VOCÊ DESEJA REALIZAR?
                </Text>
                <View style={styles.container}>
                <View style={{ marginTop: 100 }}>
                <RadioButton
        value={0}
        status={ checked === 0 ? 'checked' : 'unchecked' }
        color="#FE7277"
        onPress={() => setChecked(0)}
      />
    </View>
                    <Image
                    style={{ height: 200, width:200, marginTop: 20 }}
                    source={require('../../assets/roupas.png')}
                    />
             </View>
                <View style={styles.container}>
                <View style={{ marginTop: 100 }}>
                <RadioButton
        value={1}
        status={ checked === 1 ? 'checked' : 'unchecked' }
        color="#FE7277"
        onPress={() => setChecked(1)}
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
  onPress={() => handleSalvar()}>
      Salvar
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