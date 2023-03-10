import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authentication } from "../firebase";
import Input from "./input";
import Button from "./button";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { associations } from "../../Axios";

const AssociationSignupScreen = () => {
  const navigation = useNavigation();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmepassword, setconfirmepassword] = useState("");
  const [Descreption, setDescreption] = useState("");
  const [name, setname] = useState("");

  const done = async () => {
    try {
      await axios.post(`${associations}`, {
        name: name,
        email: email,
        description: Descreption,
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
        .then((res) => {
          done();
          console.log(res);
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
    <ScrollView showsVerticalScrollIndicator={false}> 
    <View style={styles.root}>
      <Text style={styles.title}> Create an account</Text>

      <Input placeholder="Association Name" value={name} setvalue={setname} />
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

      <View style={styles.container}>
        <TextInput
          style={styles.textAreaContainer}
          placeholder="descreption about your Association "
          onChangeText={(textt)=>{setDescreption(textt)}}
          underlineColorAndroid="transparent"
          multiline={true}
          numberOfLines={10}
        />
      </View>

      <Button text="Register" onpress={onsigninpressed} />

      <Button
        text=" have an account ? Log in "
        onpress={goback}
        type="tertiary"
      />
    </View>
    </ScrollView>
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
    padding: 10,
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  textAreaContainer: {
    height: 100,
    justifyContent: "flex-start",
    textAlignVertical: "top",
    fontSize: 19,
  },
});
export default AssociationSignupScreen;
