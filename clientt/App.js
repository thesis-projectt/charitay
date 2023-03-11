import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import Navigation from "./screens/Navigation/Navigation";
// import Onboarding from "./components/Onboarding"
import { NativeBaseProvider} from "native-base";
// import AHome from "./screens/AssociationHome/AHome";
import EditProfileView from "./screens/AssociationHome/EditProfile";
import Events from "./screens/AssociationHome/Events";
import EditProfile from "./screens/AssociationHome/EditProfile";
import Bar from "./screens/AssociationHome/Bar";
import AddEvent from "./screens/AssociationHome/AddEvent";

const App = () => {
  return (
              
<NativeBaseProvider>
    <SafeAreaView style={styles.root}>
        <Navigation/>
           
   </SafeAreaView>
   </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F9FBFC",
  },
});
export default App;
