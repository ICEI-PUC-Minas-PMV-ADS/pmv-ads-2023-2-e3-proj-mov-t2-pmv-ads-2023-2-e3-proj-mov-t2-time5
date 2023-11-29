import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.container.title}>SOBRE NÓS</Text>
      <View style={styles.container.box}>
        <Text style={styles.container.sobreNs}> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut posuere turpis, vitae luctus lacus Morbi sodales ultrices enim, a porttitor risus aliquam ac. Nullam dictum metus vel pharetra interdum. Donec eu lacus ac nisi suscipit hendrerit placerat ornare lectus. Nulla fringilla at nulla non varius. Cras pulvinar venenatis volutpat. Sed eu velit nec erat vulputate finibus quis at mi. Nullam quis ligula sed urna lacinia bibendum at in lectus. Proin quis semper est.
        </Text>
      </View>
      <Button
        title="DOE AGORA"
        color="#FE7277"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    box: {borderWidth: 1, margin: 20, borderColor: '#FE7277'},
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    title:{fontSize:16, color: '#FE7277',},
    border: {borderWidth: 1, borderColor: '#d5d5d5', width: 100,},
    sobreNs: {
      display: "flex",
      textAlign: "Justify",
      fontWeight: "700",
      letterSpacing: 1,
      alignItems: "center",
      fontSize:16, 
      width: 294, 
      height: 363,
      margin: 10
  },
}});