
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import SigninScreen from './screens/SigninScreen/SigninScreen' ;
import SignupScreen from './screens/SignupScreen/SignupScreen';
import ForgetPassword from './screens/ForgetPassword/ForgetPassword';
import ConfirmePassword from './screens/ConfirmePassword/CofirmePassword';
import Navigation from './screens/Navigation/Navigation';
const App = ()=> {
  return (


    <SafeAreaView style={styles.root}>
    <Navigation/>
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
