import { useState } from "react";
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
import { useNavigation } from "@react-navigation/native";
import { authentication, provider } from "../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Connect from "../Connect";
import axios from "axios";
import { disable, volunter, associations } from "../../Axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
const SigninScreen = () => {
  const navigation = useNavigation();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('user', jsonValue)
    } catch (e) {
   console.log(e);
    }
  }
  const getuser = (id, email) => {
    axios
      .get(`${disable}/${id}`)
      .then((result) => {
        if (result.data !== null) {
          storeData({id:result.data.id,role:"ds"})
          navigation.navigate("tabNavigator",{userId:id});
        }
        axios
          .get(`${volunter}/${id}`)
          .then((res) => {
            if (res.data !== null) {
          storeData({id:res.data.id,role:"vr"})

              navigation.navigate("tabNavigator",{userId:id});

            }
            axios
              .get(`${associations}/${email}`)
              .then((ar) => {
                if (ar.data !== null) {
          storeData({id:ar.data.email,role:"as"})
                  navigation.navigate("tabNavigator");
                }
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => console.log(err));
  };
  const onsigninpressed = () => {
    signInWithEmailAndPassword(authentication, email, password)
      .then((firedata) => {
        console.log(firedata);
        console.log("gxfgfg",firedata._tokenResponse.localId, firedata._tokenResponse.email);
        getuser(firedata._tokenResponse.localId, firedata._tokenResponse.email);
        console.log(firedata._tokenResponse.localId,"hello im user");
        return true;
      })
      .catch((err) => {
        if (err.code === "auth/user-not-found") {
          alert("incorect email");
        } else if (err.code === "auth/wrong-password") {
          alert("incorect password");
        }
      });
  };
  const onforgetpasswordpressed = () => {
    navigation.navigate("ForgetPassword");
  };
  const onsignup = () => {
    navigation.navigate("Virfy");
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image source={Logo} style={styles.Logo} resizeMode="contain" />
        <Input
          placeholder="Email or phoneNumber"
          value={email}
          setvalue={setemail}
        />
        <Input
          placeholder="Password"
          value={password}
          setvalue={setpassword}
          secureTextEntry={true}
        />
        <Button text="Sign in" onpress={onsigninpressed} />
        <Button
          text="Forget Password ?"
          onpress={onforgetpasswordpressed}
          type="tertiary"
        />
        <Connect />
        <Button
          text="Don't have an account ? Create one "
          onpress={onsignup}
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
    margin: 10,
  },
  Logo: {
    width: "50%",
    margin: -50,
    maxWidth: 400,
  },
});
export default SigninScreen;