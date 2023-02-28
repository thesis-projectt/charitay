
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import SigninScreen from './screens/SigninScreen/SigninScreen' ;
const App = ()=> {
  return (
    <SafeAreaView style={styles.root}>
            <SigninScreen/>
    </SafeAreaView>
   
     
  );
}
const styles = StyleSheet.create({
  root : {
    flex:1,
    backgroundColor : '#F9FBFC'
    
  }
})
export default App
