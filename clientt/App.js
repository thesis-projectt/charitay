import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';

export default function App() {
  return (
     <View style={styles.container}>
      <Text>hello from client side </Text>
      <StatusBar style="auto" />
     </View>
     
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
// const style = StyleSheet.create({
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
// });
