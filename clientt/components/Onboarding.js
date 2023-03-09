import { StatusBar } from 'expo-status-bar'
import React,{useState,useRef} from 'react'
import { View, Text,StyleSheet,FlatList,Animated } from 'react-native'
import OnbordingItem from '../components/OnbordingItem'
import Flesh from '../components/Flesh'
import NextButton from '../components/NextButton'
import slides from '../slides'
import { useNavigation } from "@react-navigation/native";



export default Onboarding = () => { 

  const navigation=useNavigation()
  const [currentIndex,setCurrentIndex]=useState(0);
  const scrollX =useRef(new Animated.Value(0)).current;
  const slidesRef =useRef(null);
  const viewableItemsChanged = useRef (({viewableItems})=>{
    setCurrentIndex(viewableItems[0].index);
  }).current;
  
  const viewConfig=useRef ({viewAreaCoveragePercentThreshold:50}).current; 
  const scrollTo=()=>{
   
    if(currentIndex < slides.length-1){
         slidesRef.current.scrollToIndex({index:currentIndex+1});
        //  setCurrentIndex(currentIndex+1);
       }else{ navigation.navigate('Signin');
       }
  };
 const percentage=(currentIndex+1)*(100/ slides.length);
  return (
    <View style ={styles.container}> 
    <View style={{flex :6}}>
      <FlatList
       data ={slides} renderItem={({item})=> <OnbordingItem item={item}/>}
      horizontal
      showsHorizontalScrollIndicator
      pagingEnabled
      bounces ={false}
      keyExtractor ={(item)=>item.id}
      onScroll={Animated.event([{ nativeEvent:{contentOffset:{x:scrollX}}}],{
      useNativeDriver:false,
        // other actions to be performed on scroll
  })}

      scrollEventThrottle={32}
    onViewableItemsChanged={viewableItemsChanged}
    viewabilityConfig={viewConfig}
    ref={slidesRef}
      />
      <StatusBar style='auto'/>
      </View> 
      <Flesh data={slides} scrollX={scrollX}/>
      < NextButton scrollTo={scrollTo} precentage={percentage}/>
      
    </View>
  )
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        
    }
});
