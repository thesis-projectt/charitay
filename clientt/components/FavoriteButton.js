import React from 'react'
import {View} from 'react-native'
import colors from './colors'
import Icon from './Icon'
import { shadow } from './theme'
import {useState , useEffect} from 'react'
// import Favorite from './favorite'





const FavoriteButton = ({active , style, data }) => {

    const [fav , setFav] = useState([])
console.log("fav items" , fav);

    return (
    
    <View style={[
        {
         backgroundColor : colors.white,
         padding : 4 ,
         borderRadius : 20,
    },
    shadow.light,
    style,
    
    ]} >
    {fav.includes(data) ? (
        <Icon icon="Favorite" size={24} onPress={() => {
            setFav(fav.filter((x) => x.id != data.id))
        }}/>

    ) : (
        <Icon icon="Favorite" size={24} onPress={() => setFav([...fav , data])}  />

    ) }
        
        
    </View>
    )
    
}



export default FavoriteButton