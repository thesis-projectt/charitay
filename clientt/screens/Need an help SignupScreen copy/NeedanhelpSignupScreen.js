import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import Input from "./input";
import Button from "./button";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { authentication } from "../firebase";
import { getAuth, signInWithPhoneNumber } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { disable } from "../../Axios";

const NeedanhelpSignupScreen = ({ navigation }) => {
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");

  const done = (value) => {
    axios
      .post(`${disable}`, {
        id: value,
        email: email,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onsigninpressed = () => {
    if (password !== confirmpassword) {
      alert("check your password");
    } else if (password === confirmpassword) {
      createUserWithEmailAndPassword(authentication, email, password)
        .then((firedata) => {
          done(firedata._tokenResponse.localId);
          return true;
        })
        .then(() => {
          navigation.navigate("Signin");
        })
        .catch((err) => {
          if (err.code === "auth/weak-password") {
            alert(" Password should be at least 6 characters");
          }
        });
    }
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
      <Input
        placeholder="confirmePassword"
        value={confirmpassword}
        setvalue={setconfirmpassword}
        secureTextEntry={true}
      />

      <Button
        text="Register"
        onpress={() => {
          onsigninpressed();
        }}
      />
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
    margin: 30,
    padding: 20,
    color: "#3B71F3",
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
