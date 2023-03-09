import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import TabNavigator from "./components/Navigator/Navigator";
// import Navigation from "./screens/Navigation/Navigation";

const App = () => {

  return (
    <SafeAreaView style={styles.root}> 
    <TabNavigator/>
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
