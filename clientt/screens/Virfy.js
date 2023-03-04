import React, { useState } from 'react'
import { Text, View ,StyleSheet , TouchableOpacity ,SafeAreaView} from 'react-native'
import RNPickerSelect from "react-native-picker-select";
import Button from './SigninScreen/button';
import { useNavigation } from '@react-navigation/native';


const Virfy =() => {

    const navigation = useNavigation()

 const handelclick = ()=>{
   
    if (valuee === "volunteer") {
        navigation.navigate("SignUp")
        console.log(valuee);
        return
    }
    else if (valuee === "association"){
        navigation.navigate("Association")
        return
    }

    else if (valuee === "Need a help"){
    
        navigation.navigate("NeedHelp")
   return
    }
    navigation.navigate("Virfy")
 }


 const [valuee,setvaluee]=useState("")
    return (
      <View style = {styles.root}> 
      
      <Text style = {styles.title}>Verify yourself as what ?</Text>
       <TouchableOpacity style={styles.container}>
       
 <RNPickerSelect 
    onValueChange={(value) =>{setvaluee(value)}}
  items={[
 { label: "Need a help", value: "Need a help" },
 { label: "volunteer", value: "volunteer" },
 { label: "association", value: "association" }, ]}/>
 <Button  onpress={handelclick}  text= "Next"  />
</TouchableOpacity>

      </View>
    )
  }
  const styles = StyleSheet.create({
    root : {
        alignItems : 'center',
        padding : 10,
    
      },
      title : {
        fontSize:27,
        fontWeight:'bold',
     margin:17,
     padding : 25,
     top:200,

     
         },
    
        container : {
            top:200,
            backgroundColor: 'white',
            width : '100%',
            padding: 25,
            borderColor:'#e8e8e8',
            borderWidth:1,
            borderRadius: 5,
            paddingHorizontal: 10,
            marginVertical : 5,
            gap:30
            
        }
    })
export default Virfy
