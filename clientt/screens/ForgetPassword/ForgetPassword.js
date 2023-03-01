import React, { useState } from "react";
import { View,Text ,Image , StyleSheet , TouchableOpacity ,ScrollView } from "react-native";
import Input from "./input";
import Button from "./button";
import Connect from "../connect";
import { useNavigation } from '@react-navigation/native';


const ForgetPassword = ()=> {

  const navigation = useNavigation()
  const onsigninpressed = ()=> {
    navigation.navigate('Signin')
  }
  const newpassword = ()=> {
    navigation.navigate('ConfirmePassword')
  }

return (
    
<View style = {styles.root}>
 <Text style={styles.title}> Reset your Password </Text>
 <Text style ={{right:173}}> Email*</Text>
 <Input placeholder= 'Enter your Email ' />
<Button onpress={newpassword} text= " sned"/>
<Button onpress={onsigninpressed} text= " Back to sign in "  type='tertiary'/>


</View>

);
};

const styles = StyleSheet.create({
root : {
    alignItems : 'center',
    padding : 10
  }, title : {
    fontSize:30,
    fontWeight:'bold',
 margin:19,
 padding : 25
 
     }
   
});

export default ForgetPassword 