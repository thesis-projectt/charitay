import { View, Text , TextInput , StyleSheet , Image} from 'react-native'

import React from 'react'

const Input = ({value , setvalue , placeholder , secureTextEntry}) => {
  return (
    <View style={styles.container}>
        <TextInput  style={styles.input} placeholder = {placeholder}
        value = {value}
        secureTextEntry={secureTextEntry}
        onChangeText={setvalue}/>
        
        
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    width : '100%',
    padding: 15,
   
    
    borderColor:'#e8e8e8',
    borderWidth:1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical : 5
    
  },
  input:{

  },
});

export default Input