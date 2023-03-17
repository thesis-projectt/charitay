import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import MainHeader from "./MainHeader";
import ScreenHeader from "../components/ScreenHeader";
import { shadow, sizes, spacing } from "./theme";
import colors from "./colors";
import Icon from "./Icon";
import FavoriteButton from "./FavoriteButton";
import SectionHeader from "./SectionHeader";
import EventsList from "./EventsList";
// import Drawer1 from './sideBar/sideBar'
import { event, associations } from "../../clientt/Axios";
import { useNavigation } from "@react-navigation/native";
import TabNavigator from "./Navigator/Navigator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Box } from "native-base";

const CARD_WIDTH = sizes.width - 150;
const CARD_HEIGTH = 200;

const AddEvents = ({ route }) => {
  const [data, setData] = useState([]);
  const [association, setAssociation] = useState([]);
  const [id, setid] = useState("");
  console.log(
    "🚀 ~ file: addEvents.js:29 ~ AddEvents ~ association:",
    association
  );
  // console.log("🚀 ~ file: addEvents.js:26 ~ AddEvents ~ data:", data)
  const navigation = useNavigation();

  const getuser = async () => {
    try {
      const value = await AsyncStorage.getItem("user");
      if (value !== null) {
        const jsonValue = JSON.parse(value);
        setid(jsonValue.id);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getHandle();
    getAssociation();
    getuser();
  }, []);

  const getHandle = () => {
    axios
      .get("http://192.168.104.12:3000/api/events")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getAssociation = () => {
    axios
      .get("http://192.168.104.12:3000/api/associations")
      .then((response) => {
        setAssociation(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View styles={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <MainHeader title="Charity" />
          <ScreenHeader mainTitle="A charitable" secondTitle="Journey" />
          <SafeAreaView>
            <ScrollView horizontal>
              {/* <TopEvents data={data}/> */}
              {association.map((item) => (
                <TouchableOpacity
                  onPress={() => {
                    if (item.email === id) {
                      navigation.navigate("AssociationProfile", {
                        
                      });
                    } else {
                      navigation.navigate("VisterProfile", {
                        
                        idd: item.email,
                      });
                    }
                  }}
                >
                  <View style={[styles.card, shadow.dark]} key={item.id}>
                    <FavoriteButton style={styles.favorite} data={data} />

                    <View style={styles.imageBox}>
                      <Image
                        source={{ uri: item.image }}
                        style={{
                          width: 240,
                          height: 200,
                          borderRadius: 20,
                          resizeMode: "cover",
                        }}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </SafeAreaView>
          <SectionHeader title="All Events" buttonTitle="See All" />
          <EventsList data={data} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGTH,
    marginVertical: 2,
    left:10
  },
  favorite: {
    position: "absolute",
    top: spacing.m,
    right: 30,
    zIndex: 1,
  },

  imageBox: {
    width: CARD_WIDTH,
    height: CARD_HEIGTH,
    borderRadius: sizes.radius,
    overflow: "hidden",
  },

  titleBox: {
    position: "absolute",
    top: CARD_HEIGTH - 80,
    left: 16,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: colors.white,
  },
});
const styless = StyleSheet.create({
  cardContainer: {
    marginLeft: spacing.l,
    marginBottom: spacing.l,
  },

  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGTH,
    backgroundColor: colors.white,
    borderRadius: sizes.radius,
  },

  imageBox: {
    width: CARD_WIDTH,
    height: CARD_HEIGTH - 60,
    borderTopLeftRadius: sizes.radius,
    borderTopRightRadius: sizes.radius,
    overflow: "hidden",
  },

  image: {
    width: CARD_WIDTH,
    height: CARD_HEIGTH - 60,
    resizeMode: "cover",
  },

  footer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
    marginLeft: 16,
    marginRight: 10,
  },
  titleBox: {
    flex: 1,
  },
  title: {
    marginVertical: 4,
    fontSize: sizes.body,
    fontWeight: "bold",
    color: colors.primary,
  },

  description: {
    fontSize: sizes.body,
    color: colors.light,
  },
});

export default AddEvents;
