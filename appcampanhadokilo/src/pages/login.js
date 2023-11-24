import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert} from 'react-native';
import { Appbar } from 'react-native-paper';
import { SafeAreaProvider  } from 'react-native-safe-area-context';
import Container from '../components/container';
import Body from '../components/body';

const LoginPage = () => {

  return(
    <SafeAreaProvider>
    <Container>
    <Appbar.Header>
      <Appbar.Content title={'Campanha do Quilo'} />
    </Appbar.Header>
      <Body >
      <Text style={styles.title}>Entrar via Login</Text>
      <View style={styles.access}>
        <Text style={styles.label}>Login</Text>
        <TextInput style={styles.input} />
        <Text style={styles.label}>Senha</Text>
        <TextInput
            style={styles.input}
            secureTextEntry={true}
        />
      </View>
      <Text style={styles.password}>Esqueceu sua senha?</Text>
       <View style={styles.buttons}>
        <Button 
          title="Entrar"
          color="#FE7277"
          onPress={() => Alert.alert('Bora se Logar!')}
        />
      </View>
      <Text style={styles.cadastro} > Não tem conta? 
        <Text style={styles.link}> Cadastre-se</Text>
      </Text>
      </Body>
      </Container>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
    title:{fontSize:18, marginTop: 30, color:'#6D7E92'},
    input: {
      marginBottom:10,
      height: 40,
      width: 280,
      borderWidth: 1,
      padding: 10,
      color:'#00C2FF',
      borderColor:'#00C2FF',
  },
  label:{textAlign:'left', width:240, color:'#00C2FF'},
  cadastro:{color:'#6D7E92', fontSize:14},
  link:{color:'#00A3FF', fontSize:14},
  password:{fontSize:13, color:'#FE7277', width:280, textAlign:'right'},
  buttons:{
      marginTop: 50,
      marginBottom: 50,
      width: 320,
      borderRadius: 5,
      padding: 3,
      backgroundColor: '#FE7277',
      borderTopLeftRadius: 6,
      borderBottomRightRadius: 6
    },
  access:{
    marginTop: 100,
  }
});

export default LoginPage;