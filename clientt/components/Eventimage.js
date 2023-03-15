import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Stack,
  ScrollView,
  StyleSheet,
} from "react-native";
import { HStack, Box, AspectRatio, Center, Heading } from "native-base";
import { event } from "../Axios";
import axios from "axios";
import EventDetails from "../screens/AssociationHome/EventDetails";

const Eventimage = ({ route }) => {
  const [donation, setDonation] = useState(0);
  const [show, setShow] = useState(false);
  const [data, setdata] = useState([]);
  const [eventdata, seteventdata] = useState([]);
  const { idd, associationId } = route.params;

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

  // useEffect(() => {
  //   axios
  //     .get(`${event}/association/${associationId}`)
  //     .then((result) => {
  //       seteventdata(result.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  console.log("==================>", eventdata);

  const handleDonation = (value) => {
    setDonation(value);
  };

  return (
    <ScrollView>
    <SafeAreaView style={{ flex: 1, margin: 10 }}>
      <View>
        <Image
          source={{ uri: data.picture }}
          style={{ width: "100%", height: 200 }}
        />
        <Text style={{ fontSize: 24, fontWeight: "bold", padding: 16 }}>
          {data.title}
        </Text>
        <Text style={{ fontSize: 16, padding: 16 }}>{data.description}</Text>

        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Donation Amount
          </Text>
          <View style={{ flexDirection: "row", marginTop: 8 }}>
            <TouchableOpacity style={{ marginRight: 8 }}>
              <Text style={{ padding: 8, backgroundColor: "#eee" }}>5$</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginRight: 8 }}>
              <Text style={{ padding: 8, backgroundColor: "#eee" }}>10$</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginRight: 8 }}>
              <Text style={{ padding: 8, backgroundColor: "#eee" }}>20$</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginRight: 8 }}
              onPress={() => setShow(!show)}
            >
              <Text style={{ padding: 8, backgroundColor: "#eee" }}>Other</Text>
            </TouchableOpacity>
          </View>
          {show && (
            <View style={{ marginTop: 8 }}>
              <Text style={{ fontSize: 16 }}>Other Amount:</Text>
              <HStack>
                <TextInput
                  value={donation}
                  onChangeText={handleDonation}
                  keyboardType="numeric"
                  style={{
                    height: 40,
                    borderWidth: 1,
                    borderColor: "black",
                    width: 250,
                    marginTop: 8,
                    padding: 8,
                  }}
                />
                <Text style={{ padding: 8, backgroundColor: "#eee" }}>
                  {donation}
                </Text>
              </HStack>
            </View>
          )}
          <TouchableOpacity
            style={{
              marginTop: 20,
              backgroundColor: "blue",
              padding: 14,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
              Donate Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
     
     
    </SafeAreaView> 
    <EventDetails associationId={associationId} />
    </ScrollView>
  );
};

export default Eventimage;
