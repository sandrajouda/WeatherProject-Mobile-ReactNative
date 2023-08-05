import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const App1 =()=> {
  
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assest2/clear.png')}  style={styles.background}>
        <View style={styles.text} ></View>
        <Text  style={{ color: 'red' }}> Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        </ImageBackground>
      </View>
    );
  }
export default App1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
},
text: {
  textAlign:'center',
  marginTop:350,
},
});