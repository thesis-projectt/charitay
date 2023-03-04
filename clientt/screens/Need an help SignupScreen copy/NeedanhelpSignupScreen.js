import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Logo from "../../assets/logo.png";
import Input from "./input";
import Button from "./button";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { authentication } from "../firebase";
import { getAuth, signInWithPhoneNumber } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const NeedanhelpSignupScreen = ({ navigation }) => {
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");

  const done = async (value) => {
    try {
      await axios.post("http://192.168.101.10:3000/api/disable", {
        id: value,
        email: email,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const onsigninpressed = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then((firedata) => {
        done(firedata._tokenResponse.localId);
        return true;
      })
      .then(() => {
        navigation.navigate("Signin");
      })
      .catch((err) => console.log(err));
  };

  const goback = () => {
    navigation.navigate("Signin");
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}> Create an account</Text>

      <Input
        placeholder="email or phonenumber"
        value={email}
        setvalue={setemail}
      />
      <Input
        placeholder="Password"
        value={password}
        setvalue={setpassword}
        secureTextEntry={true}
      />

      <Button text="Register" onpress={onsigninpressed} />
      <Button
        text=" have an account ? Log in "
        onpress={goback}
        type="tertiary"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 10,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 15,
    padding: 15,
  },
  container: {
    backgroundColor: "white",
    width: "100%",
    padding: 15,

    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
});
export default NeedanhelpSignupScreen;
