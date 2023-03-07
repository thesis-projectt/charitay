import React, { useState, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Pressable,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import DropDownPicker from "react-native-dropdown-picker";


const Virfy = ({ navigation }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const handelclick = () => {
    if (value === "volunteer") {
      navigation.navigate("SignUp");
      console.log(value);
      return;
    } else if (value === "association") {
      navigation.navigate("Association");
      return;
    } else if (value === "Need a help") {
      navigation.navigate("NeedHelp");
      return;
    }
    navigation.navigate("Virfy");
  };

  const [items, setItems] = useState([
    { label: "volunteer", value: "volunteer" },
    { label: "association", value: "association" },
    { label: "people with special needs", value: "Need a help" },
  ]);

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Verify yourself as what ?</Text>

      <TouchableOpacity style={styles.container}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />

        <Pressable onPress={handelclick} style={[styles.button]}>
          <Text style={styles.text}>Next</Text>
        </Pressable>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontSize: 27,
    fontWeight: "bold",
    margin: 17,
    padding: 25,
    top: 200,
  },

  container: {
    top: 200,
    backgroundColor: "white",
    width: "100%",
    padding: 25,
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    height: 210,
    gap: 40,
  },
  button: {
    width: "104%",
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#3B71F3",
    top: 95,
    left: -6,
  },
  text: {
    fontWeight: "bold",
    color: "white",
  },
});
export default Virfy;
