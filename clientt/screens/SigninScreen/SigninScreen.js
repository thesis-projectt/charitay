import { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Logo from "../../assets/logo.png";
import Input from "./input";
import Button from "./button";
import { useNavigation } from '@react-navigation/native';
import { authentication ,provider } from "../firebase";
import { signInWithEmailAndPassword , sendPasswordResetEmail} from "firebase/auth";
// import { signInWithPopup } from "firebase/auth";
// import Googelicon from "../../assets/googel.png"



const SigninScreen = () => {

    const navigation = useNavigation()
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')


    const onsigninpressed = () => {
        signInWithEmailAndPassword(authentication, email, password)
            .then((result) => {
               
                console.log(result);
                return true
            }).then((res) => { navigation.navigate('home') })

            .catch((err) => {
                if (err.code === "auth/user-not-found") {
                    alert("incorect email")
                } else if (err.code === "auth/wrong-password") {
                    alert("incorect password")
                }
            })}


    const onforgetpasswordpressed = () => {
        navigation.navigate('ForgetPassword')
    }

    const onsignup = () => {
        navigation.navigate('Virfy')
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} >
            <View style={styles.root}>
                <Image source={Logo} style={styles.Logo} resizeMode="contain" />
                <Input placeholder='Email or phoneNumber' value={email} setvalue={setemail} />
                <Input placeholder='Password' value={password} setvalue={setpassword} secureTextEntry={true} />
                <Button text="Sign in" onpress={onsigninpressed} />
                <Button text="Forget Password ?" onpress={onforgetpasswordpressed} type='tertiary' />
                <Button text="Don't have an account ? Create one " onpress={onsignup} type='tertiary' />

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 10,
        margin: 10
    },

    Logo: {
        width: '90%',
        margin: -80,
        maxWidth: 400

    }
})
export default SigninScreen 