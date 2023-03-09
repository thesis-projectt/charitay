
import { useEffect, useState } from 'react'
import { Text, View,Image, StyleSheet } from 'react-native'
import { disable, volunter, associations } from "../../Axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


 const VHome = ()=>{

  const [user , setuser]=useState({})
   const fetchUser = async ()=>{
    try {
      const value = await AsyncStorage.getItem('user')
      if(value !== null) {
        const jsonValue = JSON.parse(value) ;
    console.log("=============>",jsonValue.id);
  const userdata = await axios.get(`${volunter}/${jsonValue.id}`)
  console.log("userdata",userdata.data);
  setuser(userdata.data)
    }
    
    }catch(err){
      console.log(err);
    } 
  }
   useEffect(()=>{
 fetchUser()
   },[])
 return (
  
    <View>
     <Text> welcome as volunter </Text>
    </View>
  );
};

  
export default VHome
