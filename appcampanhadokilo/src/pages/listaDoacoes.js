import React from 'react';
import { StyleSheet, FlatList, Alert } from 'react-native';
import Container from '../components/container';
import Body from '../components/body';
import { Appbar, Text, List, FAB} from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const DATA = [
    {
        id: 1,
        data: '15/08/2023',
        tipo: 0,
        user: 'John',
        cidade: 'Belo Horizonte',
        bairro: 'Sagrada Familia',
        status: '1',
    },
    {
        id: 2,
        data: '19/08/2023',
        tipo: 1,
        user: 'astormg',
        cidade: 'Belo Horizonte',
        bairro: 'Luxemburgo',
        status: '0',
      },
      {
        id: 3,
        data: '29/08/2023',
        tipo: 0,
        user: 'astormg',
        cidade: 'Contagem',
        bairro: 'Eldorado',
        status: '0',
      }
  ];

const SobreNos = () => {

    const navigation = useNavigation();

    const Item = ({item}) => (
        <List.Item
        title= {item.tipo == 0 ? "Roupas" : "Alimentos"}
        description={'Doado dia: ' + item.data}
        left={props => <List.Icon {...props} icon={ item.tipo == 0 ? 'human' : 'food'} />}
        right={props => <Text style={{alignSelf:'center', textAlign: 'right'}}> {item.cidade} {'\n'} {item.bairro} </Text>}
      />
      );

  return (
    <SafeAreaProvider>
    <Appbar.Header>
      <Appbar.Content title={'Campanha do Quilo'} />
      <Appbar.Action icon={'magnify'} onPress={()=> {}} />
    </Appbar.Header>
    <Container>
      <Body>
        <Text style={styles.menu}>Doações Disponíveis</Text>
        <FlatList
        style={{width:'90%'}}
        data={DATA}
        renderItem={Item}
        keyExtractor={item => item.id}
      />
        <FAB
    icon="plus"
    style={styles.fab}
    onPress={() => navigation.navigate('EDoacao')} //Alert.alert('Solicitar Doação!')
  />
      </Body>
    </Container>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
    menu: { fontSize: 26,
        color: '#FE7277', 
        textAlign: 'center', 
        fontWeight: 900, 
        lineHeight: 30, 
        paddingBottom: 20},
    container: {
        flex: 1,
        marginTop: 5,
      },
      item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },
      fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
      }
});

export default SobreNos;