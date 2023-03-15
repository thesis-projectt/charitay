import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import { useState, useEffect } from "react";
import Navigation from "./screens/Navigation/Navigation";
import { NativeBaseProvider } from "native-base";

const App = () => {
  const [user, setuser] = useState({});
  const fetchUser = async () => {
    try {
      const value = await AsyncStorage.getItem("user");
      if (value !== null) {
        const jsonValue = JSON.parse(value);
        console.log("=============>", jsonValue.id);
        const userdata = await axios.get(`${volunter}/${jsonValue.id}`);
        console.log("userdata", userdata.data);
        setuser(userdata.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.root}>
        <Navigation />
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
