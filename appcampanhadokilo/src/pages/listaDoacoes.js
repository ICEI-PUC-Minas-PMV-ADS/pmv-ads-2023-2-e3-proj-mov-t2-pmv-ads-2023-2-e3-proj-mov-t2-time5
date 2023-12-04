import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import Container from '../components/container';
import Body from '../components/body';
import { Appbar, Text, List, FAB} from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { getDoacoes } from '../services/GastosServicesBb';
import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';

const SobreNos = () => {

    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const [itens, setItens] = useState([]);

    useEffect(() => {
      getDoacoes().then((doacao)=>{
        setItens(doacao);
      });
    }, [isFocused])

    const Item = ({item}) => (
        <List.Item
        title= {item.tipo == 0 ? "Roupas" : "Alimentos"}
        description={item.historico}
        left={props => <List.Icon {...props} icon={ item.tipo == 0 ? 'human' : 'food'} />}
        right={props => <Text style={{alignSelf:'center', textAlign: 'right'}}> {item.cidade} {'\n'} {item.bairro} </Text>}
        onPress={() => navigation.navigate('EDoacao', {item})}
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
        data={itens}
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