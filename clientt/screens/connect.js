import { View, Text , TouchableOpacity , Image } from 'react-native'
import React from 'react'
import Googelicon from "../assets/googel.png"
import Facebookicon from "../assets/facebook.png"
import Appleicon from "../assets/apple.png"
const Connect = () => {
  return (
    <View style={{flexDirection:'row',justifyContent:'space-between',gap:10}}>
     <TouchableOpacity onPress={()=>{}} style={{borderColor:'#ddd',borderWidth:2,borderRadius:10,paddingHorizontal:30,paddingVertical:10,}}>
<Image source={Googelicon} style={{height:26,width:26}} />
</TouchableOpacity>


<TouchableOpacity onPress={()=>{}} style={{borderColor:'#ddd',borderWidth:2,borderRadius:10,paddingHorizontal:30,paddingVertical:10,}}>
<Image source={Facebookicon} style={{height:26,width:26}} />
</TouchableOpacity>


<TouchableOpacity onPress={()=>{}} style={{borderColor:'#ddd',borderWidth:2,borderRadius:10,paddingHorizontal:30,paddingVertical:10,}}>
<Image source={Appleicon} style={{height:26,width:26}} />
</TouchableOpacity>
    </View>
  )
}

export default Connect