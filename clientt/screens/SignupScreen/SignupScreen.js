import React, { useState } from "react";
import { View,Text ,Image , StyleSheet , TouchableOpacity ,ScrollView } from "react-native";
import Logo from "../../assets/logo.png";
import Input from "./input";
import Button from "./button";
import Connect from "../connect";

import { useNavigation } from '@react-navigation/native';
import PhoneInput from "react-native-phone-number-input";


const SignupScreen = ()=> {

    const navigation = useNavigation()
    const [username,setusername]=useState('')
    const [password,setpassword]=useState('')

    const onsigninpressed = ()=> {
       
    }
   

    const onsignup = ()=> {
         navigation.navigate('Signin')
    }

return (
    <ScrollView showsVerticalScrollIndicator={false} >
<View style = {styles.root}>
<Text style = {styles.title}> Create an account</Text>
<Input placeholder= 'UseName'/>
 <Input placeholder= 'Email' value={username} setvalue={setusername}/>
 
 <Input placeholder= 'Password'value={password} setvalue={setpassword} secureTextEntry={true}/>
 <Input placeholder= 'Confirme Password'value={password} setvalue={setpassword} secureTextEntry={true}/>



<TouchableOpacity style={styles.container}>
<PhoneInput   />
</TouchableOpacity>
<Button text= "Register" onpress={onsigninpressed}/>
<Connect/>
<Button  text= " have an account ? Log in " onpress={onsignup} type='tertiary'/>

</View>
</ScrollView>
);
};

const styles = StyleSheet.create({
root : {
    alignItems : 'center',
    padding : 10
  },
     
    
    title : {
   fontSize:30,
   fontWeight:'bold',
margin:15,
padding : 15
    }, 
    container : {
        backgroundColor: 'white',
        width : '100%',
        padding: 15,
       
        
        borderColor:'#e8e8e8',
        borderWidth:1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical : 5
    }
})
export default SignupScreen 