import React from 'react'
import { FlatList,StyleSheet,View, Text } from 'react-native'


const Onboarding = () => {
  return (
    <View style ={styles.container}>
      <Text>Onboarding </Text>
      <FlatList/>
   </View>
  )
}

export default Onboarding
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'

    }
})