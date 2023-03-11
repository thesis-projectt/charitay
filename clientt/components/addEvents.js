import React , {useState , useEffect} from 'react'
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from "react-native";
import axios from 'axios'
import MainHeader from './MainHeader'
import ScreenHeader from '../components/ScreenHeader'
import { shadow, sizes, spacing } from './theme';
import colors from './colors';
import Icon from './Icon';
import FavoriteButton from './FavoriteButton';
import SectionHeader from './SectionHeader'
import EventsList from './EventsList'
// import Drawer1 from './sideBar/sideBar'



const CARD_WIDTH = sizes.width - 150;
const CARD_HEIGTH = 200;


const AddEvents = ({route}) => {
      const [data , setData] = useState([])
      // console.log("🚀 ~ file: addEvents.js:26 ~ AddEvents ~ data:", data)


      useEffect(() => {
    getHandle()
},[])

    const getHandle = () => {
        axios.get('http://192.168.101.4:3000/api/events')
        .then((response) => {
            setData(response.data)
        })
        .catch((error) => {
            console.log(error);
        })
    }




    return (
     <View styles={styles.container}>
     <MainHeader title="Charity"/>
     <ScreenHeader mainTitle="A charitable" secondTitle="Journey"/>
     <ScrollView horizontal >
      {/* <TopEvents data={data}/> */}
      {data.map((item) => (
        
        <View style = {[styles.card , shadow.dark]} key={item.id}>
         <FavoriteButton style={styles.favorite} data={data}/>
           {/* {console.log("🚀 ~ file: addEvents.js:57 ~ AddEvents ~ data:", data)} */}
           <View style= {styles.imageBox}>
              <Image source={{uri :item.picture}} style={{width : 240 , height : 200  , borderRadius : 20 , resizeMode : 'cover'}} />
          </View> 
           <View style={styles.titleBox}>
            <Text style={styles.title}>{item.association.name}</Text>
           </View>
            </View> 
       
     
      ))} 
   
     </ScrollView>
     <SectionHeader title="All Events" buttonTitle="See All" />
<<<<<<< HEAD
     {/* <EventsList data={data}/> */}
=======
     <EventsList data={data}/>
     
>>>>>>> f00bc8ae67bda31523266ad93e7201e6d02a6cd3
     </View>
  )



}

const styles = StyleSheet.create({
  container : {
    flex :1 
  },
  card : {
    width : CARD_WIDTH,
    height : CARD_HEIGTH,  
    marginVertical : 20
  },
    favorite : {
    position : 'absolute',
    top : spacing.m,
    right : 30,
    zIndex : 1
  },
 
  imageBox : {
    width : CARD_WIDTH,
    height : CARD_HEIGTH,
    borderRadius : sizes.radius,
    overflow : 'hidden'
  },

  titleBox : {
    position : 'absolute',
    top : CARD_HEIGTH -80 ,
    left : 16
  },
  title : {
    fontSize : 50,
    fontWeight : 'bold',
    color : colors.white
  }

})



export default AddEvents

