import { useEffect, useState, useRef } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Touchable,
} from "react-native";
import { disable, volunter, associations } from "../../Axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { getAuth, deleteUser } from "firebase/auth";
import { authentication } from "../firebase";
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
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Profile = () => {
  const [user, setuser] = useState({});
  const [id , setid]=useState("")
  const fetchUser = async () => {
    try {
      const value = await AsyncStorage.getItem("user");
      if (value !== null) {
        const jsonValue = JSON.parse(value);
        setid(jsonValue.is)
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

const deletee = () =>{
axios.delete(`${associations}/${id}`).then(()=>{
localStorage.removeItem("user")
}).catch((err)=>{console.log(err);})
}


  const handeldelete = () => {
    const userr = authentication.currentUser;
    deleteUser(userr)
      .then((result) => {
       deletee()
       return true
      }).then(()=>{
         navigation.navigate("Signin")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef(null);
  const navigation = useNavigation();

  return (
    <View>
      <Box alignItems="center" top="90">
        <Box
          maxW="100%"
          maxH="690"
          backgroundColor={"#fdf4ff"}
          
        
         
        
        >
          <Box>
            <AspectRatio w="100%" ratio={26 / 19} >
              <Image 
              resizeMode="contain"
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmo5eSEhlXUDcaW-3Fm9d5LLBTEpoWkXBV7A&usqp=CAU",
                }}
                alt="image"
              />
            </AspectRatio>
          </Box>
          <Stack p="7" space={7}>
            <Stack space={6}>
              <Heading>The Garden City</Heading>
              <View
                style={{
                  // backgroundColor: "#f5f5f5",
                  width: 300,
                  height: 35,
                  alignItems: "center",
                }}
              >
                 
                <Text style={{ fontSize: 20, margin: 1, color: "#525252", left:-49 }}>
               <MaterialCommunityIcons name="email-receive-outline" size={24} color="#525252"  />
                  Charity@gmail.com
                </Text>
              </View>
            </Stack>
            <Text style={{ fontSize: 16 }}>
              The Board of Directors (BoD) are often volunteers with a limited
              term and limited time to devote to the association’s business. If
              there is a problem with service delivery, it is the BoD’s
              responsibility to take care of it. That is what the membership
              expects them to do when the membership elects them to that role.
              The Board makes decisions that are in the best interest of the
              membership and association.
            </Text>
          </Stack>

          <Center>
            <Button
              colorScheme="danger"
              onPress={() => setIsOpen(!isOpen)}
              style={{ right: 115 , top:-15}}
            >
              Delete Account
            </Button>
           
            <AlertDialog
              leastDestructiveRef={cancelRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <AlertDialog.Content>
                <AlertDialog.CloseButton />
                <AlertDialog.Header>Delete Account</AlertDialog.Header>
                <AlertDialog.Body>
                  This will remove account relating to You. This action cannot
                  be reversed. Deleted data can not be recovered.
                </AlertDialog.Body>
                <AlertDialog.Footer>
                  <Button.Group space={2}>
                    <Button
                      variant="unstyled"
                      colorScheme="coolGray"
                      onPress={onClose}
                      ref={cancelRef}
                    >
                      Cancel
                    </Button>
                    <Button colorScheme="danger" onPress={()=>{handeldelete()}}>
                      Delete
                    </Button>
                  </Button.Group>
                </AlertDialog.Footer>
              </AlertDialog.Content>

            </AlertDialog>
          <Button onPress={()=>navigation.navigate("EditProfileView")} style={{width:100,left:130,top:-55}} >Edit Profile</Button>
          </Center>
         
        </Box>
       
      </Box>
      <View>
      
      </View>
    </View>
  );
};
export default Profile;
