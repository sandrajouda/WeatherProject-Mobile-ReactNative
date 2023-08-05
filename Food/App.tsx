import React from "react";
import { View ,StyleSheet} from "react-native";
import App2 from "./Screens/App2";
//import App1 from "./Screens/App1";

const App=()=>{
return(
<View style={styles.container}>
  <App2/>
</View>
);
}
export default App;

const styles = StyleSheet.create({
container:{
  flex:1,
}
})