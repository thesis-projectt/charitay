import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Box, Center, HStack, AspectRatio , Stack ,Heading} from "native-base";
import axios from "axios";
import { disable, volunter, associations, event } from "../../Axios";

const EventDetails = ({ associationId }) => {
  const [data, setdata] = useState([]);
 
  useEffect(() => {
    axios
      .get(`${event}/association/${associationId}`)
      .then((result) => {
        setdata(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log("aziz",data);

  return (
   
    <ScrollView >
       <Box alignItems="center" style={{ gap: 20 }}>
      {data.map((item)=>(
         
      <Box alignItems="center"  >
        <Box 
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
          <Box >
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
        </Box>
      </Box>
      ))}
      </Box>
    </ScrollView>
  );
};

export default EventDetails;
