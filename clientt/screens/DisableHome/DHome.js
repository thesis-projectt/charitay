import { useEffect, useState } from 'react'
import { Text, 
  View,
  Image,
   StyleSheet 
   , Button
   ,TextInput
   ,
  TouchableOpacity,} from 'react-native'
import { disable} from "../../Axios";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app, { storage } from "../firebase";
import { signOut } from "@firebase/auth";
import { authentication } from '../firebase';



const uploadProfileImage = async (uri) => {
  
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
        axios.put(`${disable}/${id}`,{
          profileImage:downloadURL,
        }).then((response)=>{
          console.log("updated successfulyy");
        }).catch((error)=>{
          console.log("error updating image");
        })
      });
    }
  );
};


// const updateEmailFirebase =()=>{
//   //thot l function mte3 l update email mel firebase 
// }

// const updatePasswordfirebase =()=>{
//   //thot l function mte3 l update password ..
// }

// const updateProfile =()=>{
//   updateEmailFirebase()
//   //axios put
 
//   if (Password) {
//     updatePasswordfirebase()
//   }
// }//

const storageRef = ref(storage, "some-child");
console.log(storage);

//
 const DHome = ()=>{
  
  const [id,setId]=useState("");
  console.log(id,'id');
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("user");
      console.log(value, "valueeeeeee");

      return JSON.parse(value).id;
    } catch (e) {}
  };
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("********");
  const [imageUri, setImageUri] = useState("");
  const [isEditing, setIsEditing] = useState(false);

   useEffect(()=>{
 getData().then((res)=>{
  axios
  .get(`${disable}/${res}`)
  .then((res)=>{
    console.log(res.data.image);
    setId(res.data.id);
    setEmail(res.data.email);
    setPassword(res.data.password);
    setImageUri(res.data.image);
  })
  .catch((err)=>{
    console.log(err);
  })
 })
   },[])
    
 
   const handleUpdateProfile = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveChanges = async () => {
    setIsEditing(false);

    const user = JSON.parse(await AsyncStorage.getItem("user"));

    const data = { 
      email,
      password,
      imageUri,
    };

    try {
      await axios.put(`${disable}/${user.id}`, data);
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
          
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
            editable={true}
          />
         
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            editable={true}
            placeholder="change password"
          />
          <Button title="Save Changes" onPress={handleSaveChanges} />
        </>
      ) : (
        <>
          
          <Text style={styles.info}>Email: {email}</Text>
          <TouchableOpacity style={styles.button} onPress={handleUpdateProfile}>
            <Text style={styles.buttonText}>Edit Profile</Text>
            
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={LogOut}>
            <Text style={styles.buttonText}>Log Out</Text>
            
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
export default DHome ;
