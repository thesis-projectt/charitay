import React from 'react'
import {View , Text , StyleSheet} from 'react-native'
import { sizes, spacing } from './theme'



const ScreenHeader = ({mainTitle , secondTitle}) => {

 return (

    <View style={Styles.container}>
    <Text style={Styles.mainTitle}>{mainTitle}</Text>
    <Text style={Styles.secondTitle}>{secondTitle}</Text>
    </View>

 )


}

const Styles = StyleSheet.create({
    container : {
        paddingHorizontal : spacing.l,
        paddingVertical : spacing.l,
    },
    mainTitle : {
     fontSize : sizes.title,
     fontWeight : 'bold'

    },
    secondTitle : {
     fontSize : sizes.title,
     
    }
})

export default ScreenHeader