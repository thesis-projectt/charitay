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
  StatusBar,
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

const Profile = () => {
  const [user, setuser] = useState({});
  const [id, setid] = useState("");

  const fetchUser = async () => {
    try {
      const value = await AsyncStorage.getItem("user");
      if (value !== null) {
        const jsonValue = JSON.parse(value);

        setid(jsonValue.id);

        const userdata = await axios.get(`${associations}/${jsonValue.id}`);

        setuser(userdata.data);
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
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          <Box alignItems="center" top="0">
            <Box maxW="100%" maxH="690">
              <Box>
                <AspectRatio w="100%" ratio={20 / 15}>
                  <Image
                    resizeMode="contain"
                    source={{ uri: user.image }}
                    alt="image"
                  />
                </AspectRatio>
              </Box>
              <Stack p="3" space={5}>
                <Stack space={3}>
                  <Heading>{user.name}</Heading>
                  <View>
                    <Heading style={{ color: "#525252", fontSize: 20 }}>
                      <MaterialCommunityIcons
                        name="email-receive-outline"
                        size={24}
                        color="#525252"
                      />
                      {user.email}
                    </Heading>
                  </View>
                </Stack>
                <Text style={{ fontSize: 16 }}>{user.description}</Text>
              </Stack>

              <Center>
                <AlertDialog
                  leastDestructiveRef={cancelRef}
                  isOpen={isOpen}
                  onClose={onClose}
                >
                  <AlertDialog.Content>
                    <AlertDialog.CloseButton />
                    <AlertDialog.Header>Delete Account</AlertDialog.Header>
                    <AlertDialog.Body>
                      This will remove account relating to You. This action
                      cannot be reversed. Deleted data can not be recovered.
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
              <View style={{ gap: 10 }}>
                <Button onPress={() => navigation.navigate("demo")}>
                  Events
                </Button>
                <Button onPress={() => navigation.navigate("EditProfileView")}>
                  Edit Profile
                </Button>
                <Button onPress={() => setIsOpen(!isOpen)}>
                  Delete Account
                </Button>
                <Button
                  colorScheme="danger"
                  onPress={() => {
                    logout(), navigation.navigate("Signin");
                  }}
                >
                  logout
                </Button>
              </View>
            </Box>
          </Box>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 20,
  },
});
export default Profile;
