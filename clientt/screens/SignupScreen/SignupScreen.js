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
import { authentication } from "../firebase";
import { useNavigation } from "@react-navigation/native";
import PhoneInput from "react-native-phone-number-input";
import { createUserWithEmailAndPassword } from "firebase/auth";
import axios from "axios";

const SignupScreen = () => {
  const navigation = useNavigation();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const [confirmepassword, setconfirmepassword] = useState("");
  const [phonenumber, setphonenumber] = useState("");

  const done = async (value) => {
    try {
      await axios.post("http://192.168.1.117:3000/api/volunteer", {
        id: value,
        name: name,
        email: email,
        phoneNumber: phonenumber,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const onsigninpressed = () => {
    if (password !== confirmepassword) {
      alert("check your password");
    } else if (password === confirmepassword) {
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
          } else if (err.code === "auth/invalid-email") {
            alert(" invalid email");
          }
          console.log(err);
        });
    }
  };

  const goback = () => {
    navigation.navigate("Signin");
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}> Create an account</Text>
      <Input placeholder="UseName" setvalue={setname} value={name} />
      <Input placeholder="Email" value={email} setvalue={setemail} />

      <Input
        placeholder="Password"
        value={password}
        setvalue={setpassword}
        secureTextEntry={true}
      />
      <Input
        placeholder="Confirme Password"
        value={confirmepassword}
        setvalue={setconfirmepassword}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.container}>
        <PhoneInput
          onChangeText={(text) => {
            setphonenumber(text);
          }}
        />
      </TouchableOpacity>

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
export default SignupScreen;
