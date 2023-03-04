import React, { useState } from "react";
import { View,Text ,Image , StyleSheet , TouchableOpacity ,ScrollView } from "react-native";
import Logo from "../../assets/logo.png";
import Input from "./input";
import Button from "./button";
import Connect from "../connect";
import { useNavigation } from '@react-navigation/native';


const SigninScreen = ()=> {

    const navigation = useNavigation()
    const [username,setusername]=useState('')
    const [password,setpassword]=useState('')

    const onsigninpressed = ()=> {
        console.warn("sign in ");
    }
    const onforgetpasswordpressed = ()=> {
        navigation.navigate('ForgetPassword')
    }

    const onsignup = ()=> {
       navigation.navigate('Virfy')
    }

return (
    <ScrollView showsVerticalScrollIndicator={false} >
<View style = {styles.root}>
<Image source={Logo} style={styles.Logo} resizeMode = "contain"/>
 <Input placeholder= 'Email or phoneNumber' value={username} setvalue={setusername}/>
 <Input placeholder= 'Password'value={password} setvalue={setpassword} secureTextEntry={true}/>
<Button text= "Sign in" onpress={onsigninpressed}/>
<Button  text= "Forget Password ?" onpress={onforgetpasswordpressed} type='tertiary'/>

<Connect/>
<Button  text= "Don't have an account ? Create one " onpress={onsignup} type='tertiary'/>

</View>
</ScrollView>
);
};

const styles = StyleSheet.create({
root : {
    alignItems : 'center',
    padding : 10,
margin:10
  },
     
    Logo : { 
  width: '90%',
  margin:-80,
  maxWidth : 400
 
    }
})
export default SigninScreen 