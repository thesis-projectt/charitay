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


const UpdateEvent = () => {
  const [image, setimage] = useState(null);
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [date, setdate] = useState("");
  const [name, setname] = useState("");
  const navigation=useNavigation()
  const [user, setuser] = useState({});
  const [id, setid] = useState("");
  const fetchUser = async () => {
    try {
      const value = await AsyncStorage.getItem("user");
      if (value !== null) {
        const jsonValue = JSON.parse(value);
        setid(jsonValue.id);
        const userdata = await axios.get(`${associations}/${jsonValue.id}`);
        console.log("userdata", userdata.data);
        setuser(userdata.data);
        setid(userdata.data.id);
        setname(userdata.name);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  console.log(name);

  const Update = () => {
    axios
      .put(`${event}/${id}`, {
        nameassociation: name,
        title: title,
        description: description,
        associationId: id,
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
          <Fab
            renderInPortal={false}
            colorScheme="danger"
            shadow={2}
            size="sm"
            icon={<Ionicons name="add" size={24} color="white" />}
          />
        </HStack>
        <Image
          resizeMode="contain"
          style={{ width: 340, height: 350, top: -240, left: 35 }}
          source={image}
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
