import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
<<<<<<< HEAD
import Map from "./Map1/Map";
// import Card from "./Map1/Cart";
// import SigninScreen from "./screens/SigninScreen/SigninScreen";
// import SignupScreen from "./screens/SignupScreen/SignupScreen";

=======
// import Map from "./Map1/Map";

// import SigninScreen from "./screens/SigninScreen/SigninScreen";
// import SignupScreen from "./screens/SignupScreen/SignupScreen";

>>>>>>> 36da7d6f718d4c68fc572554718af663da685242
// import ForgetPassword from "./screens/ForgetPassword/ForgetPassword";
// import Navigation from "./screens/Navigation/Navigation";
// import Onboarding from "./components/Onboarding"


// import SigninScreen from "./screens/SigninScreen/SigninScreen";
// import SignupScreen from "./screens/SignupScreen/SignupScreen";
// import ForgetPassword from "./screens/ForgetPassword/ForgetPassword";
<<<<<<< HEAD
// import Navigation from "./screens/Navigation/Navigation";
// import Onboarding from "./components/Onboarding"
const App = () => {
  return (
              

    <SafeAreaView style={styles.root}>
      {/* <Card/> */}
            <Map/>
           {/* //   <Onboarding/> */}
           {/* <SigninScreen/> */}
            {/* <Navigation/> */}
   </SafeAreaView>
=======
import Navigation from "./screens/Navigation/Navigation";
// import Onboarding from "./components/Onboarding"
import { NativeBaseProvider} from "native-base";
import Eventimage from "./components/Eventimage";
const App = () => {
  return (
              
<NativeBaseProvider>
    <SafeAreaView style={styles.root}>
            {/* <Map/> */}
           {/* //   <Onboarding/> */}
           {/* <SigninScreen/> */}
           {/* <Navigation/> */}
            <Eventimage/>
   </SafeAreaView></NativeBaseProvider>
>>>>>>> 36da7d6f718d4c68fc572554718af663da685242
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F9FBFC",
  },
});
export default App;
