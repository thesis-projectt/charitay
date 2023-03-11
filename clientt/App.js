import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import MapDs from "./Map1/MapDs";
import MapVal from "./Map1/MapVal"
import { useState,useEffect } from "react";
// import Card from "./Map1/Cart";
// import SigninScreen from "./screens/SigninScreen/SigninScreen";
// import SignupScreen from "./screens/SignupScreen/SignupScreen";

// import ForgetPassword from "./screens/ForgetPassword/ForgetPassword";
// import Navigation from "./screens/Navigation/Navigation";
// import Onboarding from "./components/Onboarding"


// import SigninScreen from "./screens/SigninScreen/SigninScreen";
// import SignupScreen from "./screens/SignupScreen/SignupScreen";
// import ForgetPassword from "./screens/ForgetPassword/ForgetPassword";
import Navigation from "./screens/Navigation/Navigation";
// import Onboarding from "./components/Onboarding"
import { NativeBaseProvider} from "native-base";
import Eventimage from "./components/Eventimage";
const App = () => {
    const [user , setuser]=useState({})
   const fetchUser = async ()=>{
    try {
      const value = await AsyncStorage.getItem('user')
      if(value !== null) {
        const jsonValue = JSON.parse(value) ;
    console.log("=============>",jsonValue.id);
  const userdata = await axios.get(`${volunter}/${jsonValue.id}`)
  console.log("userdata",userdata.data);
  setuser(userdata.data)
    }
    
    }catch(err){
      console.log(err);
    } 
  }
   useEffect(()=>{
 fetchUser()
   },[])
  return (
              

    <SafeAreaView style={styles.root}>
      {/* <Navigation/> */}
    {/* <MapDs/> */}
    <MapVal/>
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
