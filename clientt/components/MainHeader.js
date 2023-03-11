import React from 'react'
import {Text , View ,StyleSheet} from 'react-native'
import Icon from './Icon.js'


const MainHeader = ({title}) => {


    return (
    <View style={styles.container}>
    <Icon icon="Hamburger" onPress={() => {}}/>
    <Text style={styles.title}>{title}</Text>
    <Icon icon="Notification" onPress={() => {}}/>
    </View>
    )
}

const styles = StyleSheet.create({
    container : {
       flexDirection : 'row',
       justifyContent : 'space-between',
       alignItems : 'center',
       paddingHorizontal : 20
    },
    title : {
       fontSize : 25 ,
       fontWeight : 'bold'
    }
})

export default MainHeader 