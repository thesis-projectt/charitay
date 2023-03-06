import React , {useState , useEffect} from 'react'
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput
} from "react-native";
import axios from 'axios'
import {BlurView} from 'expo-blur'
import {Ionicons} from '@expo/vector-icons'
import colors from './colors'



const AddEvents = () => {

const [data ,setData] = useState([])
console.log("🚀 ~ file: addEvents.js:9 ~ AddEvents ~ data:", data)
const [query , setQuery] = useState("")



useEffect(() => {
  getEvents()
}, [])

const getEvents = () => {
  axios.get("http://192.168.104.13:3000/api/events/getAllEvents").then
  ((response) => {
    setData(response.data)
  })
  .catch((error) => {
    console.log(error);
  })
}








  

  
  
  
  
  
    return (
      <SafeAreaView>
        <ScrollView
          style={{
            padding: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{
                borderRadius: 10,
                overflow: "hidden",
                width: 10 * 4,
                height: 10 * 4,
              }}
            >
              <BlurView
                style={{
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons
                  name="menu"
                  size={10 * 2.5}
                  color={colors.secondary}
                />
              </BlurView>
            </TouchableOpacity>
            <View
              style={{
                width: 10 * 4,
                height: 10 * 4,
                overflow: "hidden",
                borderRadius: 10,
              }}
            >
              <BlurView
                style={{
                  height: "100%",
                  padding: 10 / 2,
                }}
              >
                <Image
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: 10,
                  }}
                  
                />
              </BlurView>
            </View>
          </View>
          <View style={{ width: "80%", marginVertical: 10 * 3 }}>
            <Text
              style={{
                color: colors.dark,
                fontSize: 10 * 3.5,
                fontWeight: "600",
              }}
            >
            AAMEL L KHIR W ANSEH
            </Text>
          </View>
          <View
      style={{
        borderRadius: 10,
        overflow: "hidden",
      }}
    >
      <BlurView
        intensity={30}
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextInput
          style={{
            width: "100%",
            color: colors.dark,
            fontSize: 10 * 1.7,
            padding: 10,
            paddingLeft: 10 * 3.5,
          }}
          placeholder="Search for Event ..."
          placeholderTextColor={colors.light}
          onChange={(text) => {setQuery(text)}}
        />
        <Ionicons
          style={{
            position: "absolute",
            left: 10,
          }}
          name="search"
          color={colors.light}
          size={10 * 2}
        />
      </BlurView>
    </View>
          </ScrollView>


 
    {data.map((item , index) => {
      
        return (
            <View key= {index} style={{
              
            }}>
                <Text style={{
                  fontSize : 25
                }}>{item.association.name}</Text>
                <Image 
                source = {{uri : `${item.picture}`}}
                style  = {{width:90, height :  40 , borderRadius : 5}}
                />  
                <Text>{item.picture}</Text>
                <Text>{item.title}</Text>
                <Text>{item.description}</Text>
            </View>
        )
    })}
    
  </SafeAreaView>
  )



}



export default AddEvents


