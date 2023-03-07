import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    ScrollView,
    TouchableOpacity,
    Dimensions,
  } from "react-native";
  import React , {useState , useEffect} from "react"
  import axios from 'axios'
import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from "./colors";

  
const HomeScreen = () => {

  const [data , setData] = useState('')
  // console.log("🚀 ~ file: HomeScreen.js:19 ~ HomeScreen ~ data:", data)

  useEffect(() => {
    getHandle()
  }, [])


const getHandle = () => {
  axios.get('http://192.168.104.4:3000/api/events')
  .then((response) => {
    setData(response.data)
  })
  .catch((error) => {
    console.log(error);
  })
}


  return (
   <View style={styles.container}>
    <Text>hello</Text>
   </View>
  )
}


const styles = StyleSheet.create({
  container : {
    flex : 1 ,
    // backgroundColor : colors.light
  }
})

export default HomeScreen
