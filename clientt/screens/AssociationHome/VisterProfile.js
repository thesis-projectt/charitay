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
import { associations } from "../../Axios";

import axios from "axios";
import { useNavigation } from "@react-navigation/native";

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

const VisterProfile = ({ route }) => {
  const [id, setid] = useState("");
  const idd = route.params;
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get(`${associations}/${idd}`)
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
                    source={{ uri: data.image }}
                    alt="image"
                  />
                </AspectRatio>
              </Box>
              <Stack p="3" space={5}>
                <Stack space={3}>
                  <Heading>{data.name}</Heading>
                  <View>
                    <Heading style={{ color: "#525252", fontSize: 20 }}>
                      <MaterialCommunityIcons
                        name="email-receive-outline"
                        size={24}
                        color="#525252"
                      />
                      {data.email}
                    </Heading>
                  </View>
                </Stack>
                <Text style={{ fontSize: 16 }}>{data.description}</Text>
              </Stack>
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

export default VisterProfile;
