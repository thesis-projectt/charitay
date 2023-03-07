import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import Map from "./Map1/Map";

// import SigninScreen from "./screens/SigninScreen/SigninScreen";
// import SignupScreen from "./screens/SignupScreen/SignupScreen";

// import ForgetPassword from "./screens/ForgetPassword/ForgetPassword";
// import Navigation from "./screens/Navigation/Navigation";
// import Onboarding from "./components/Onboarding"


const App = () => {
  return (
              

    <SafeAreaView style={styles.root}>
            <Map/>
           {/* //   <Onboarding/> */}
           {/* <SigninScreen/> */}
            
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
