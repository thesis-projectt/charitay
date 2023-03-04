import React, { useState } from "react";
import { View,Text ,Image , StyleSheet , TouchableOpacity ,ScrollView } from "react-native";
import Input from "./input";
import Button from "./button";
import { authentication } from "../firebase";
import { signInWithEmailAndPassword , sendPasswordResetEmail} from "firebase/auth";
import { useNavigation } from '@react-navigation/native';


const ForgetPassword = ()=> {



  const navigation = useNavigation()


  const onsigninpressed = ()=> {
    navigation.navigate('Signin')
  }


 const [email, setemail] = useState('')


const newpassword = ()=>{
  sendPasswordResetEmail(authentication,email).then(()=>{
    
    alert("check your email to change password")
  }).then
  (()=>{
    navigation.navigate('Signin')
  }).catch((err)=>{
    console.log(err);
  })


}
return (
    
<View style = {styles.root}>
 <Text style={styles.title}> Reset your Password </Text>
 <Text style ={{right:173}}> Email*</Text>
 <Input  placeholder= 'Enter your Email '  value={email} setvalue={setemail}/>
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