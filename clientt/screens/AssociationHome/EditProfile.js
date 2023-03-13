import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import axios from "axios";
import { disable, volunter, associations } from "../../Axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { authentication } from "../firebase";
import { getAuth, updateEmail, updatePassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons'; 
import * as ImagePicker from "expo-image-picker";


const EditProfile = () => {
  const handleImagePicker = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
      setAvatar(result.uri);

    }
  };

  const navigation = useNavigation();
  const [id, setid] = useState("");

  const [user, setuser] = useState({});
  const fetchUser = async () => {
    try {
      const value = await AsyncStorage.getItem("user");
      if (value !== null) {
        const jsonValue = JSON.parse(value);
        console.log("=============>", jsonValue.id);
        setid(jsonValue.id);
        const userdata = await axios.get(`${associations}/${jsonValue.id}`);
        console.log("userdata", userdata.data);
        setuser(userdata.data);

      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {  
    fetchUser();
  }, []);

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [bio, setBio] = useState(user.description);
  const [avatar, setAvatar] = useState(
    user.image
  );
  const [password, setPassword] = useState("");

  const handlechangeemail = () => {
    const userr = authentication.currentUser;
    updatePassword(userr, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handelchangepassword = () => {
    updateEmail(authentication.currentUser, email)
      .then(() => {
        handlechangeemail();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handelclick = () => {
    axios
      .put(`${associations}/${id}`, {
        name: name,
        email: email,
        description: bio,
        image:avatar
      })
      .then(() => {
        handelchangepassword();
      });
  };
  
console.log(avatar);
  return (
    <ScrollView  showsVerticalScrollIndicator={false}>
      
      <View style={styles.container}>
    
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={{
              uri:avatar,
            }}
          />

          <TouchableOpacity
            style={styles.changeAvatarButton}
            onPress={handleImagePicker}
          >
            <Text style={styles.changeAvatarButtonText}>Change Avatar</Text>
          </TouchableOpacity>
        </View>
      
        <View style={styles.form}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Name"
            onChangeText={setName}
           
          />
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            onChangeText={setEmail}
           
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            onChangeText={setPassword}
          />

          <Text style={styles.label}>Descreption</Text>
          <TextInput
            style={styles.inputt}
            underlineColorAndroid="transparent"
            multiline={true}
            numberOfLines={100}
            placeholder="Enter Bio"
            onChangeText={setBio}
          
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handelclick(), navigation.navigate("Signin");
            }}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
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
    padding: 1,
    top: 15,
    margin: 17,
  },
  form: {
    width: "80%",
  },
  label: {
    marginTop: 20,
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#1E90FF",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  avatarContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  changeAvatarButton: {
    marginTop: 10,
  },
  changeAvatarButtonText: {
    color: "#1E90FF",
    fontSize: 18,
  },
  inputt: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 18,
    textAlignVertical: "top",
    padding: 15,

  },
});

export default EditProfile;
