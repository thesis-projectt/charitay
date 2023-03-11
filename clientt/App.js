import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import TabNavigator from "./components/Navigator/Navigator";
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from "react";

// import Drawer from "./components/sideBar/sideBar";
// import Navigation from "./screens/Navigation/Navigation";
// import Map from "./Map1/Map";



const App = () => {


  useEffect(()=> {
    checkUser()
  },[])
  
  
  const checkUser = async() => {
    try {
      const value = await AsyncStorage.getItem('user')
      if(value !== null) {
        const jsonValue = JSON.parse(value) ;
    console.log("=============>",jsonValue.id);
  // const userdata = await axios.get(`${volunter}/${jsonValue.id}`)
  
  // console.log("userdata",userdata.data);
  // setuser(userdata.data)
  // console.log();
    }
    
    }catch(err){
      console.log(err);
    } 
  }

  return (
    <SafeAreaView style={styles.root}> 
    <TabNavigator/>
      {/* <Navigation/> */}
      {/* <Drawer/> */}
      {/* <Map/> */}
      {/* <Navigation/> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F9FBFC",
  },
});
export default App;
