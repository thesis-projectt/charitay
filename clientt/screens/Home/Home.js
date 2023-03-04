import React from 'react'
import { Text, View , StyleSheet } from 'react-native'
import Button from './button'
import { authentication } from '../firebase'
import { getAuth, signOut } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';

 const Home = ()=>  {


   const navigation = useNavigation()
   
const logout = ()=>{
    signOut(authentication). 
    then((result) => {console.log(result)} , navigation.navigate('Signin'))
    .catch((err)=>{console.log(err);})
}

    return (
      <View style = {styles.root}>
        <Text> helllo from your home  </Text>
        <Button text='Log out ' onpress={logout}/>
        
      </View>
    )
  }
  const styles = StyleSheet.create({
    root : {
        alignItems : 'center',
        padding : 10,
         margin:10
      }
         
      
    })

export default Home
