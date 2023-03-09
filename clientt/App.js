import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import Map from "./Map1/Map";
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
  return (
              
<NativeBaseProvider>
    <SafeAreaView style={styles.root}>
            {/* <Map/> */}
           {/* //   <Onboarding/> */}
           {/* <SigninScreen/> */}
           {/* <Navigation/> */}
            <Eventimage/>
   </SafeAreaView></NativeBaseProvider>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F9FBFC",
  },
});
export default App;
