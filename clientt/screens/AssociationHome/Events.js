import { View, Text , Image , SafeAreaView} from 'react-native'
import React , {useState , useEffect}from 'react'
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
import axios from 'axios';
import { disable, volunter, associations, event } from "../../Axios";




const Events = () => {

  const [data,setdata]=useState([])


useEffect (()=>{

  axios.get(`${event}`).then((result)=>{
   
    console.log(result.data); 
    setdata(result.data)
  }).catch((err)=>{console.log(err);})


},[])







  return (
   
    <SafeAreaView>
    
    <Box alignItems="center">
      <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="10" top={110} _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700"
    }} >
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image source={{
            uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
          }} alt="image" />
          </AspectRatio>
          <Center bg="violet.500" _dark={{
          bg: "violet.400"
        }} _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" bottom="0" px="3" py="1.5">
            donation
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              The Garden City
            </Heading>
            <Text fontSize="xs" _light={{
            color: "violet.500"
          }} _dark={{
            color: "violet.400"
          }} fontWeight="500" ml="-0.5" mt="-1">
              The Silicon Valley of India.
            </Text>
          </Stack>
          <Text fontWeight="400">
            Bengaluru (also called Bangalore) is the center of India's high-tech
            industry. The city is also known for its parks and nightlife.
          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }} fontWeight="400">
                6 mins ago
              </Text>
            </HStack><Button colorScheme="danger">Delete</Button>
            <Button >Update</Button>
          </HStack> 
        </Stack>
       
      </Box>
    </Box>
    </SafeAreaView>
  )
}

export default Events