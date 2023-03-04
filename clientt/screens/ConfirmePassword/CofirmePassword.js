import React, { useState } from "react";
import { View,Text ,Image , StyleSheet , TouchableOpacity ,ScrollView } from "react-native";
import Input from "./input";
import Button from "./button";
import { useNavigation } from '@react-navigation/native';

const ConfirmePassword = ()=> {

  const [code,setcode]=useState("")
  const [newpassword , setnewpassword]=useState("")
  const navigation = useNavigation()

  const onsigninpressed = ()=> {
    navigation.navigate('Signin')
  }

return (
    
<View style = {styles.root}>
 <Text style={styles.title}> Reset  your Password </Text>
 <Text style ={{right:120}}>  Confirmation Code *</Text>
 <Input placeholder= 'Enter your Confirmation Code  ' />

<Text style ={{right:150}}> Password *</Text>
 <Input placeholder= 'Enter your new password ' />
 <Button text= " Submit"/>
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

export default ConfirmePassword 