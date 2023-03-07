import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
// import SigninScreen from "./screens/SigninScreen/SigninScreen";
// import SignupScreen from "./screens/SignupScreen/SignupScreen";
// import ForgetPassword from "./screens/ForgetPassword/ForgetPassword";
// import ConfirmePassword from "./screens/ConfirmePassword/CofirmePassword";
// import Navigation from "./screens/Navigation/Navigation";
import React,{useState,useEffect} from "react";
import { StatusBar } from "expo-status-bar";
import Onboarding from "./components/Onboarding"
// import  Screen  from "./components/Screen";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { ActivityIndicator } from "react-native";




  const  App = () => {
 


  return (
    <View style={styles.container}>
      {/* {loading ? <Loading/>:view ? <SigninScreen/> : <Onboarding />} */}
      <Onboarding />
            {/* <SigninScreen/> */}
            <StatusBar style="auto"/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems:'center',
    justifyContent:'center',

  },
});
export default App;
