import React, { useState, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Button from "./SigninScreen/button";
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
    { label: "Need a help", value: "Need a help" },
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
      </TouchableOpacity>
      <Button onpress={handelclick} text="Next" />
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
    gap: 30,
  },
});
export default Virfy;
