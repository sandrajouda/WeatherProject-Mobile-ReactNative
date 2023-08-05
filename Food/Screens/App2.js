import React, { useState } from 'react';
import {
  StyleSheet,
  Platform,
  TextInput,
  View,
  ImageBackground,
  Text,
  Image
} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import Header from '../Components/Header';



const App2 = (props) => {
  const [text, settext] = useState('');


  return (
    <View style={styles.container} behavior="padding">

      <ImageBackground source={require('../assest2/heavy-cloud.png')} style={styles.background}>
        <Header />
        <View>
        </View>
        

        <View style={styles.group1}>
          <Text style={[styles.largeText, styles.textStyle]}>San Francisco</Text>
          <Text style={[styles.smallText, styles.textStyle]}>Light Cloud</Text>
          <Text style={[styles.largeText, styles.textStyle]}>24°</Text>
        </View>
        
         
          <TextInput
            autoCorrect={false}
            value={text}
            placeholder="Search any City"
            placeholderTextColor="purple"
            style={styles.textInput}
            onChangeText={settext}
          />
           <View  style={styles.search}>
          <Image source={require('../assest/search.png')}
            onPress={settext}/>
           </View>
          <View style={styles.rr}>
            <Text style={styles.txt}>Do you want delete text ?
            <Text style={styles.ttt} onPress={settext}> Yes </Text>
            <Text  >,</Text>
            <Text onPress={this.text}> No</Text>
          </Text>
        </View>
        

      </ImageBackground>

    </View>
  );
}
export default App2;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    color: '#fff',
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
  textInput: {
    backgroundColor: `#d3d3d3`,
    color: '#666',
    height: 60,
    width: 400,
    marginTop: 70,
    alignSelf: 'center',
    borderRadius: 20,
    padding: 20,

  },
  background: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  clear: {
    borderRadius: RFValue(100),
    height: RFValue(40),
    width: RFValue(40),

  },
  group1: {
    marginTop: 150,
  },
  
  txt:{
    color:'#fff',
    marginTop:35,
    fontSize:18,
    

  },
  rr:{
   alignItems:'center',
  },
  search:{
    marginLeft:300,
   marginTop:-50,
  }
});