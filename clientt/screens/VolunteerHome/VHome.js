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

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleImagePicker}>
        <Image style={styles.image} source={{ uri: imageUri }} />
        <View style={styles.imageOverlay}>
          <Text style={styles.imageText}>+</Text>
        </View>
      </TouchableOpacity>

      {isEditing ? (
        <>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={(text) => setName(text)}
            editable={true}
          />
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
            editable={true}
          />
          <TextInput
            style={styles.input}
            value={phoneNumber.toString()}
            onChangeText={(text) => setPhoneNumber(parseInt(text))}
            editable={true}
          />
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            editable={true}
          />
          <Button title="Save Changes" onPress={handleSaveChanges} />
        </>
      ) : (
        <>
          <Text style={styles.info}>Name: {name}</Text>
          <Text style={styles.info}>Email: {email}</Text>
  <Text style={styles.info}>Phone Number: {phoneNumber}</Text>
      <TouchableOpacity style={styles.button} onPress={handleUpdateProfile}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
    </>
  )}
</View>
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
backgroundColor: "#0066cc",
padding: 10,
borderRadius: 5,
marginTop: 20,
},
buttonText: {
color: "#fff",
fontSize: 18,
fontWeight: "bold",
},
});

export default Profilev;

