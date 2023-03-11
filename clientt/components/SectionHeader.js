import React from 'react'
import {Button , Text , View , StyleSheet} from 'react-native'
import { sizes, spacing } from './theme'


 
const SectionHeader = ({title , onPress , buttonTitle : string = 'Button'})=> {

return (
  
  <View style={styles.container}>
  <Text style={styles.title}>{title}</Text>
  <Button title="Show" onPress={() => {
   alert('clicked')
  }}/>
  </View>
    

)
 

}

const styles = StyleSheet.create({
    container : {
      flexDirection : 'row', 
      justifyContent : 'space-between',
      alignItems : 'center', 
      marginHorizontal : spacing.l,
      marginTop : spacing.l,
      marginBottom : 10
    },

    title : {
        fontSize : sizes.h3,
        fontWeight : 'bold'
    }
}) 


export default SectionHeader