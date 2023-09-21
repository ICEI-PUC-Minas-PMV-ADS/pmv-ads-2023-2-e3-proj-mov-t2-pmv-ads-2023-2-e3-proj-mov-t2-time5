import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.container.title}>Campanha do Kilo</Text>
      <Text>Login</Text>
      <TextInput style={styles.container.border} />
      <Text>Senha</Text>
      <TextInput style={styles.container.border} />
      <Text style={styles.container.cadastro}>Não possui login? Clique Aqui</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    title:{fontSize:28},
    border: {borderWidth: 1, borderColor: '#d5d5d5', width: 100,},
    cadastro: {fontSize:8}
  },
});
