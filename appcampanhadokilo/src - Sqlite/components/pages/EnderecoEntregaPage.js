import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');

  const handleButtonClick = () => {
    // Aqui você pode enviar os dados do endereço e do contato
    console.log('Endereço:', address);
    console.log('Contato:', contact);
  };

  return (
    <View style={styles.container}>
      <View style={styles.greenBackground} />
      <View style={styles.content}>
        <View style={styles.locationContainer}>
          <View style={styles.circularImageContainer}>
            <Image
              source={require('../assets/MoneyImagePNG.png')}
              style={styles.circularImage}
            />
          </View>
          <Text style={styles.locationText}>LOCALIZAÇÃO</Text>
        </View>
        <View style={styles.whiteBox}>
          <Text style={styles.labelText}>ENDEREÇO:</Text>
          <TextInput
            style={styles.input}
            value={address}
            onChangeText={(text) => setAddress(text)}
          />
          <Text style={styles.labelText}>CONTATO:</Text>
          <TextInput
            style={styles.input}
            value={contact}
            onChangeText={(text) => setContact(text)}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={handleButtonClick}
        >
          <Text style={styles.buttonText}>IREI REALIZAR A MINHA DOAÇÃO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  greenBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '50%',
    backgroundColor: '#E1F953',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationContainer: {
    marginTop: 100, // Espaço para acomodar a localização e imagem
    alignItems: 'center',
  },
  circularImageContainer: {
    // backgroundColor: '#FFF',
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circularImage: {
    width: 90,
    height: 90,
  },
  locationText: {
    color: '#000',
    fontFamily: 'Lexend',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20,
    letterSpacing: 0.25,
  },
  whiteBox: {
    margin: 20,
    borderRadius: 9,
    borderColor: '#FF9EA2',
    borderWidth: 1,
    backgroundColor: '#FFF',
    padding: 60,
  },
  labelText: {
    color: '#000',
    fontFamily: 'Lexend',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20,
    letterSpacing: 0.25,
    marginTop: 20,
  },
  input: {
    color: '#000',
    fontFamily: 'Lexend',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  button: {
    width: 281,
    height: 42,
    borderRadius: 5,
    backgroundColor: '#FE7277',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#FFF',
    fontFamily: 'Lexend',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
    letterSpacing: 0.25,
  },
});

export default App;
