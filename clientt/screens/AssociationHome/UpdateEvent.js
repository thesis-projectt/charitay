import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import {
  Box,
  Center,
  Pressable,
  HStack,
  Icon,
  VStack,
  Skeleton,
  Button,
  Input,
  Fab,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { disable, volunter, associations, event } from "../../Axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useNavigation } from "@react-navigation/native"; 
import * as ImagePicker from "expo-image-picker";


const UpdateEvent = ({ route }) => {
  const [image, setimage] = useState(null);
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [date, setdate] = useState("");
  const [name, setname] = useState("");
  const { idd } = route.params;
  const navigation=useNavigation()

  console.log(idd);
  const handleImagePicker = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
      setimage(result.uri);

    }
  };
 

  const Update = () => {
    axios
      .put(`${event}/${idd}`, {
        title: title,
        description: description,
        date: date,
      })
      .then((result) => {
        console.log(result);
        navigation.navigate("Event");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ScrollView>
      <View>
        <HStack
          w="90%"
          maxW="400"
          borderWidth="1"
          space={1}
          rounded="md"
          borderColor="coolGray.400"
          p="140"
          top={79}
          left={5}
        >
        
        </HStack>
        <Button style={{width: 50, height: 50 , borderRadius:50 , top:39, margin:5}} onPress={handleImagePicker}>
            
            <Ionicons name="add" size={24} color="white"  />
                  
                  </Button>
        
        <Image
          resizeMode="contain"
          style={{ width: 340, height: 350, top: -300, left: 35 }}
          source={{
            uri:image
          }}
        />

        <View style={styles.form}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Title"
            onChangeText={settitle}
          />
          <Text style={styles.label}>Last day of Eevent </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Last Day of Eevent "
            onChangeText={setdate}
          />

          <Text style={styles.label}>Descreption</Text>
          <TextInput
            style={styles.inputt}
            underlineColorAndroid="transparent"
            multiline={true}
            numberOfLines={10}
            onChangeText={setdescription}
            placeholder="Enter Descreption"
          />
        </View>
        <Button
          onPress={Update}
          colorScheme="danger"
          top={-200}
          width={100}
          left={150}
        >
          Update
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    width: "80%",
    left: 40,
    top: -250,
  },
  label: {
    marginTop: 25,
    fontSize: 17,
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
  },
  inputt: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 18,
    textAlignVertical: "top",
    padding: 10,
  },
});

export default UpdateEvent;
