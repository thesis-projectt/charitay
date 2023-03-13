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

const EventDetails = ({ route }) => {
  const [data, setdata] = useState([]);
  const { idd } = route.params;
  useEffect(() => {
    axios
      .get(`${event}/${idd}`)
      .then((result) => {
        setdata(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
console.log(idd);
console.log(data);
  return (
    <ScrollView>
      <Box alignItems="center" >
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
          <Box>
            <AspectRatio w="100%" ratio={16 / 9}>
              <Image
                source={{
                  uri: data.picture,
                }}
                alt="image"
              />
            </AspectRatio>
            <Center
              bg="violet.500"
              _dark={{
                bg: "violet.400",
              }}
              _text={{
                color: "warmGray.50",
                fontWeight: "700",
                fontSize: "xs",
              }}
              position="absolute"
              bottom="0"
              px="3"
              py="1.5"
            >
              donation
            </Center>
          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                {data.title}
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
                ghhjyjuyu
              </Text>
            </Stack>
            <Text fontWeight="400">{data.description}</Text>
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
                  {data.date}
                </Text>
              </HStack>
            </HStack>
          </Stack>
        </Box>
      </Box>
    </ScrollView>
  );
};

export default EventDetails;
