import { useEffect, useState, useRef } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Touchable,
  ScrollView,
  TouchableOpacity,
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
  Icon,
  Flex,
} from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Events from "./Events";
import { Entypo } from "@expo/vector-icons";
import { signOut } from "firebase/auth";

const Profile = ({ route }) => {
  const [user, setuser] = useState({});
  const [id, setid] = useState("");
  const [confirmm, setConfirmm] = useState(false);

  useEffect(() => {
    if (route.params != null) {
      setConfirmm(route.params.confirmm);
    }
  }, []);
  console.log(confirmm);
  const fetchUser = async () => {
    try {
      const value = await AsyncStorage.getItem("user");
      if (value !== null) {
        const jsonValue = JSON.parse(value);
        console.log(jsonValue.id);
        setid(jsonValue.id);
        if (route.params.idd != null) {
          const userdata = await axios.get(
            `${associations}/${route.params.idd}`
          );
          console.log("profile", userdata.data);
          setuser(userdata.data);
          console.log(user);
        } else {
          const userdata = await axios.get(`${associations}/${jsonValue.id}`);
          console.log("profile===============", userdata.data);
          setuser(userdata.data);
          console.log(user);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);

  const deletee = () => {
    axios
      .delete(`${associations}/${id}`)
      .then(() => {
        deletefromLocalStorage();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handeldelete = () => {
    const userr = authentication.currentUser;
    deleteUser(userr)
      .then((result) => {
        deletee();
        return true;
      })
      .then(() => {
        navigation.navigate("Signin");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deletefromLocalStorage = async () => {
    try {
      await AsyncStorage.removeItem("user");
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    signOut(authentication)
      .then(() => {
        deletefromLocalStorage();
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
      <Box alignItems="center" top="1">
        <Box maxW="100%" maxH="690" backgroundColor={"#fdf4ff"}>
          <Box>
            <AspectRatio w="100%" ratio={20 / 15}>
              <Image
                resizeMode="contain"
                source={{ uri: user.image }}
                alt="image"
              />
            </AspectRatio>
          </Box>
          <Stack p="5" space={6}>
            <Stack space={4}>
              <Heading>{user.name}</Heading>
              <View
                style={{
                  // backgroundColor: "#f5f5f5",
                  width: 300,
                  height: 35,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    margin: 1,
                    color: "#525252",
                    left: -33,
                  }}
                >
                  <MaterialCommunityIcons
                    name="email-receive-outline"
                    size={24}
                    color="#525252"
                  />
                  {user.email}
                </Text>
              </View>
            </Stack>
            <Text style={{ fontSize: 16 }}>{user.description}</Text>
          </Stack>

          <Center>
            {!confirmm && (
              <>
                <Button
                  onPress={() => setIsOpen(!isOpen)}
                  style={{ right: 135, top: -15 }}
                >
                  Delete Account
                </Button>
                <Button
                  onPress={() => navigation.navigate("EditProfileView")}
                  style={{ width: 100, left: 150, top: -55 }}
                >
                  Edit Profile
                </Button>
                <Button
                  onPress={() => navigation.navigate("demo")}
                  style={{ width: 100, left: 15, top: -97 }}
                >
                  Events
                </Button>
              </>
            )}
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
                    <Button
                      colorScheme="danger"
                      onPress={() => {
                        handeldelete();
                      }}
                    >
                      Delete
                    </Button>
                  </Button.Group>
                </AlertDialog.Footer>
              </AlertDialog.Content>
            </AlertDialog>
          </Center>
        </Box>
      </Box>
      <View></View>

    </View>
    
  );
};
export default Profile;
