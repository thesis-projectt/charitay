import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { volunter } from "../../Axios";
import axios from "axios";
import { ScrollView } from "native-base";
import { authentication } from "../firebase";
import { signOut } from "@firebase/auth";

const Profilev = () => {
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("user");
      console.log(value, "valueeeeeeeeeeeeeeeeeeee");

      return JSON.parse(value).id;
    } catch (e) {}
  };

  useEffect(() => {
    getData().then((res) => {
      axios
        .get(`${volunter}/${res}`)
        .then((res) => {
          setName(res.data.name);
          setEmail(res.data.email);
          setPhoneNumber(res.data.phoneNumber);
          setPassword(res.data.password);
          setImageUri(res.data.imageUri);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [password, setPassword] = useState("********");
  const [imageUri, setImageUri] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdateProfile = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveChanges = async () => {
    setIsEditing(false);

    const user = JSON.parse(await AsyncStorage.getItem("user"));

    const data = {
      name,
      email,
      phoneNumber,
      password,
      imageUri,
    };

    try {
      await axios.put(`${volunter}/${user.id}`, data);
    } catch (error) {}
  };

  const handleImagePicker = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
      setImageUri(result.uri);
    }
  };

  const LogOut = () => {
    signOut(authentication).then(() => {
      localStorage.removeItem("user")
      .catch((error) => {
        console.log(error);
      })
    })
  }

  return (
    <ScrollView>
    <View>
    <View style={{padding : 10 , width : '100%' , backgroundColor : '#000' , height : 150 }}>
    
      <TouchableOpacity onPress={handleImagePicker}>
      <View style={{alignItems : 'center'}}>
        <Image style={styles.image} source={{ uri: imageUri }} />
        <Text style= {{fontSize : 25 , fontWeight : 'bold' , }}>{name}</Text>
        </View>
        <View style={styles.imageOverlay}>
          <Text style={styles.imageText}>+</Text>
          
        </View>
      </TouchableOpacity>

      {isEditing ? (
        <>
        <View style={styles.containerUp}>
          <TextInput
            style={styles.inputContainer}
            value={name}
            onChangeText={(text) => setName(text)}
            editable={true}
          />
          <TextInput
            style={styles.inputContainer}
            value={email}
            onChangeText={(text) => setEmail(text)}
            editable={true}
          />
          <TextInput
            style={styles.inputContainer}
            value={phoneNumber.toString()}
            onChangeText={(text) => setPhoneNumber(parseInt(text))}
            editable={true}
          />
          <TextInput
            style={styles.inputContainer}
            value={password}
            placeholder={"Change your password"}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            editable={true}
          />
          
          <TouchableOpacity style={styles.button} onPress={handleSaveChanges}  >
          <Text style={styles.buttonText}>Save Changes</Text>
          </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
       <View style={styles.text}>
        <Text style={{fontSize : 15 , fontWeight : 'bold' , color  : 'white'}}>{phoneNumber}</Text>
        </View>
        <View style={styles.text}>
          <Text style={{color : 'white' , fontWeight : 'bold' , fontSize : 15}}>{email}</Text>
          </View>
      <TouchableOpacity style={styles.button} onPress={handleUpdateProfile}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1} onPress={LogOut}>
        <Text style={styles.buttonText}>LogOut</Text>
      </TouchableOpacity>
    
    </>
  )}
</View>
</View>
</ScrollView>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
alignItems: "center",
justifyContent: "center",
backgroundColor: "#fff",
},
image: {
width: 200,
height: 200,
borderRadius: 100,
marginBottom: 20,
},
imageOverlay: {
position: "absolute",
bottom: 0,
right: 0,
backgroundColor: "#000",
width: 50,
height: 50,
borderRadius: 25,
alignItems: "center",
justifyContent: "center",
},
imageText: {
color: "#fff",
fontSize: 30,
},
input: {
borderWidth: 1,
borderColor: "#ddd",
borderRadius: 5,
padding: 10,
marginVertical: 10,
width: "80%",
fontSize: 18,
},
info: {
fontSize: 18,
marginBottom: 10,
},
button: {
alignSelf : 'center' , 
flexDirection : 'row',
justifyContent : 'center',
backgroundColor : '#fff',
backgroundColor : '#777',
width : '50%',
padding : 20,
paddingBottom : 22,
borderRadius : 10,
shadowOpacity : 50,
elevation : 15,
marginTop : 20,
marginBottom : 40,
backgroundColor : '#000'
},
button1: {
  alignSelf : 'center' , 
  flexDirection : 'row',
  justifyContent : 'center',
  backgroundColor : '#fff',
  backgroundColor : '#777',
  width : '50%',
  padding : 20,
  paddingBottom : 22,
  borderRadius : 10,
  shadowOpacity : 50,
  elevation : 15,
  marginTop : 20,
  marginBottom : 40,
  backgroundColor : '#000',
  marginTop : -20
  },
buttonText: {
color: "#fff",
fontSize: 18,
fontWeight: "bold",
},
text : {
  alignSelf : 'center',
  flexDirection : 'row',
  justifyContent : 'center',
  backgroundColor : '#601A17',
  width : '90%',
  padding : 20,
  borderRadius : 10,
  shadowOpacity : 50,
  elevation : 15,
  marginTop : 30

}, 
containerUP : {
  fontSize : 45,
  color : '#000',
  fontWeight : 'bold'
},
inputContainer : {
  borderWidth : 0.5,
  padding : 15,
  fontSize : 16,
  marginTop : 20,
  borderRadius : 50,

}


});

export default Profilev;

