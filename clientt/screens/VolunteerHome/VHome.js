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
import {
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app, { storage } from "../firebase";

////

const uploadProfileImage = async (uri,id) => {
  const response = await fetch(uri);
  const blob = await response.blob();
  const filename = uri.substring(uri.lastIndexOf("/") + 1);
  const storageRef = ref(storage, `images/${filename}`);
  const uploadTask = uploadBytesResumable(storageRef, blob, filename);
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(`Upload is ${progress}% done`);
    },
    (error) => {
      console.log(error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("File available at", downloadURL);
        axios.put(`${volunter}/${id}`,{
          image:downloadURL,
        }).then((response)=>{

          console.log("updated successfulyy");
        }).catch((error)=>{
          console.log("error updating image");
          console.log(error);
        })
      });
    }
  );
};
/////

const storageRef = ref(storage, "some-child");
console.log(storage);
//
const Profilev = () => {
  const [id,setId]=useState("");
  console.log(id,'id');
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("user");
      console.log(value, "valueeeeeeeee");

      return JSON.parse(value).id;
    } catch (e) {}
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [password, setPassword] = useState("********");
  const [imageUri, setImageUri] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    getData().then((res) => {
      axios
        .get(`${volunter}/${res}`)
        .then((res) => {
          console.log(res.data.image);
           setId(res.data.id);
          setName(res.data.name);
          setEmail(res.data.email);
          setPhoneNumber(res.data.phoneNumber);
          setPassword(res.data.password);
          setImageUri(res.data.image);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }, []);
  

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
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();
    console.log(result);
    if (!result.cancelled) {
     uploadProfileImage(result.uri,id)
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
 
   
    <View style={styles.container}>
      <TouchableOpacity onPress={handleImagePicker}>
        <Image style={styles.image} source={{ uri: imageUri }} />
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
            value={phoneNumber}
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
  containerUp :{
    fontSize : 45,
    color : "#000",
    fontWeight : 'bold'
  },
  inputContainer : {
    borderWidth : 0.5,
    padding : 15,
    fontSize : 16,
    marginTop : 20,
    borderRadius : 50
  }
});

export default Profilev;
