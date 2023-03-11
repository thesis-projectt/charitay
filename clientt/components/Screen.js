// import React from 'react'
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export default  Screen =() => {
//     const clearOnbording=async()=>{
//         try{
//           await AsyncStorage.removeItem('view');
//         } catch(err){
//           console.log('Error @clearOnbording',err);
//         } 
//     }
//   return (
//     <View style ={styles.container}>
//       <Text>Screen</Text>
//       <TouchableOpacity onPress={clearOnbording}>
//         <Text> Clear Onboarding</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         justifyContent:'center',
//         alignItems:'center',
//     }
// })