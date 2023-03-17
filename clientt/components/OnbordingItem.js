import React from 'react'
import { View, Text, StyleSheet,Image,useWindowDimensions } from 'react-native'


export default  OnbordingItem=({item})=> {
  const {width}=useWindowDimensions();
  return (
    <View style={[styles.container,{width}]}>
      <Image source={item.image} style={[styles.image,{width,resizeMode:'contain'}]}/>
      <View style ={{flex:0.3}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
}
const styles =StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        margin:1
    },
    image :{
      flex:0.7,
      justifyContent:'center',
      margin : 40,
      top:15,
     
    //  width:"100%",
     
    },
    title:{
      fontWeight:700,
      fontSize:28,
      marginBottom:10,
      color:'#493d8a',
      textAlign:'center',
      fontWeight: "bold",
      top: -25
     
    },
    description:{
      fontWeight :300,
      color:'#62656b',
      textAlign :'center',
      paddingHorizontal:20,
      fontWeight: "bold",
      fontSize:15,
      top: -10,
      margin:-1
    }, 
});
