import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
// import Map from "./Map1/Map";

// import AddEvents from "./components/addEvents";
// import SigninScreen from "./screens/SigninScreen/SigninScreen";
// import SignupScreen from "./screens/SignupScreen/SignupScreen";
// import ForgetPassword from "./screens/ForgetPassword/ForgetPassword";

// import SigninScreen from "./screens/SigninScreen/SigninScreen";
// import SignupScreen from "./screens/SignupScreen/SignupScreen";
// import ForgetPassword from "./screens/ForgetPassword/ForgetPassword";
// import MainNavigator from './Navigations/MainNavigator.js'
// import Navigation from './screens/Navigation/Navigation'
import Navigator from './components/Navigator/Navigator'

 


const App = () => {

  return (
              

    <SafeAreaView style={styles.root}>
            {/* <Map/> */}
           {/* //   <Onboarding/> */}
           {/* <SigninScreen/> */}
           {/* <AddEvents/> */}
           {/* <MainNavigator/> */}
           <Navigator/>
           
           
            
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
