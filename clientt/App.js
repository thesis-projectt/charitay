import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import { useState, useEffect } from "react";
import Navigation from "./screens/Navigation/Navigation";
import { NativeBaseProvider } from "native-base";
import { LogBox } from "react-native";
import Pay from "./components/Pay";
// import ChatRoom from "./components/chatRoom";
LogBox.ignoreLogs(["Warning: ..."]);
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.root}>
        {/* <Pay/> */}
        <Navigation />
        {/* <TabNavigator/> */}
        {/* <MapDs/> */}
        {/* <MapVal/> */}
        {/* <ChatRoom /> */}
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
