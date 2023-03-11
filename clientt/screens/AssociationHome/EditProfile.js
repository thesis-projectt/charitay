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


const EditProfile = () => {


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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmo5eSEhlXUDcaW-3Fm9d5LLBTEpoWkXBV7A&usqp=CAU"
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
      })
      .then(() => {
        handelchangepassword();
      });
  };

  return (
    <ScrollView  showsVerticalScrollIndicator={false}>
      
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={{
              uri: "data:image/png;base64,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",
            }}
          />
          <TouchableOpacity
            style={styles.changeAvatarButton}
            onPress={() => {}}
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
            numberOfLines={10}
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
      <MaterialIcons onPress={()=>navigation.navigate('AssociationProfile')} style={{top:-700}} name="navigate-before" size={39} color="black" />
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
    fontSize: 15,
    textAlignVertical: "top",
  },
});

export default EditProfile;
