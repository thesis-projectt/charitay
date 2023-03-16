import { View, Text, Image, SafeAreaView, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import {
  Box,
  AspectRatio,
  Center,
  Stack,
  HStack,
  Heading,
  Button,
  AlertDialog,
} from "native-base";
import axios from "axios";
import { disable, volunter, associations, event } from "../../Axios";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons'; 
import AsyncStorage from "@react-native-async-storage/async-storage";

const Events = () => {
  const [data, setdata] = useState([]);
  const navigation = useNavigation();
  const [id, setid] = useState("");
  const [reloed,setreloed]=useState(false)

  const [user, setuser] = useState({});
  const fetchUser = async () => {
    try {
      const value = await AsyncStorage.getItem("user");
      if (value !== null) {
        const jsonValue = JSON.parse(value);
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
    axios
      .get(`${event}`)
      .then((result) => {
        setdata(result.data);
      })
      .catch((err) => {
        console.log(err);
      });

    fetchUser();
  }, [reloed]);

 const handeldelete = (id)=>{
axios.delete(`${event}/${id}`).
then((ressult)=>{console.log(ressult)}).
catch((err)=>{console.log(err)})
 }

  
  console.log(data);
  console.log(user.id);
  return (
    <ScrollView>
      <Box alignItems="center" style={{ gap: 20 }}>
        {data.filter(item=>item.associationId === user.id).map((item, index) => (
          
          <Box key={index}
            maxW="80"
            rounded="lg"
            overflow="hidden"
            borderColor="coolGray.200"
            borderWidth="10"
            _dark={{
              borderColor: "coolGray.600",
              backgroundColor: "gray.700",
            }}
          >
            
            <Box>
          
              <AspectRatio w="100%" ratio={16 / 9}>
                <Image
                  source={{
                    uri: item.picture,
                  }}
                  alt="image"
                />
                
              </AspectRatio>
           
             
            </Box>
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Heading size="md" ml="-1">
                  {item.title}
                </Heading>
                <Text
                  fontSize="xs"
                  _light={{
                    color: "violet.500",
                  }}
                  _dark={{
                    color: "violet.400",
                  }}
                  fontWeight="500"
                  ml="-0.5"
                  mt="-1"
                >
                Create by - {item.association.name}
                </Text>
              </Stack>
              <Text fontWeight="400">{item.description}</Text>
              <HStack
                alignItems="center"
                space={4}
                justifyContent="space-between"
              >
                <HStack alignItems="center">
                  <Text
                    color="coolGray.600"
                    _dark={{
                      color: "warmGray.200",
                    }}
                    fontWeight="400"
                  >
                    {item.date}
                  </Text>
                </HStack>
              </HStack>
            </Stack>
            {/* <Button colorScheme="danger" onPress={()=>{handeldelete(item.id),setreloed(!reloed)}}>Delete</Button>
            <Button
              onPress={() => {setreloed(!reloed),
                navigation.navigate("UpdateEvent", {
                  idd: item.id,
                })}
              }
            >
              Update
            </Button> */}
          </Box>
        ))}
      </Box>
    </ScrollView>
  );
};

export default Events;
