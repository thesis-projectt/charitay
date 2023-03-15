import React, { useState, useEffect } from "react";
import MapView, {
  Callout,
  Circle,
  Marker,
  Polyline,
  PROVIDER_GOOGLE,
} from "react-native-maps";

import MyComponent from "./swipe";
import SlidingUpPanel from "rn-sliding-up-panel";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Animated,
  ScrollView,
  TouchableOpacity,
  Button,
} from "react-native";
import * as Location from "expo-location";
import { getPreciseDistance, getDistance } from "geolib";
import dummyy from "./dummy.js";
import MapViewDirections from "react-native-maps-directions";
import Card from "../Map1/Cart";
import itemData from "./itemData.js";
// import  { GOOGLE_MAPS_KEY } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { url } from "../Axios";
import axios from "axios";

const Map = () => {
  // const [grouppin, setGrouppin] = useState(dummyy);
  const [arr, setArr] = useState([]);
  const [radius, setRadius] = useState(2000);
  const [destination, setDestination] = useState({
    // latitude: 36.88784160689139,
    // longitude:10.198178751583558,
  });

  const [loc, setLocation] = useState(false);
  const [show, setShow] = useState(false);
  const [token, setToken] = useState(null);
  const [role, setRole] = useState("vr");
  const [pin, setPin] = useState({
    latitude: 36.894252,
    longitude: 10.186974,
  });
  const [directions, setDirections] = useState({
    latitude: 36.88784160689139,
    longitude: 10.198178751583558,
  });
  const getData = async (alt, long) => {
    try {
      const value = await AsyncStorage.getItem("user");
      // const role = await AsyncStorage.getItem("role");
      const jsonValue = JSON.parse(value);
      console.log("======>>>>>amiiiiiiiiiiiin", jsonValue.id);
      console.log("======>>>>>rjaaaaaaaaab", jsonValue.role);
      console.log("phhhhhh", jsonValue.phoneNumber);
      setToken(jsonValue);
      setRole(jsonValue.role);
      // console.log(JSON.parse(value).id,JSON.parse(value).role, "valueeeeeeeeeeeeeeeeeeee");
      if (jsonValue.role === "vr") {
        // console.log("qqqqqqqqq", alt,long);
        axios
          .put(`${url}/api/volunteer/${jsonValue.id}`, {
            latitude: alt,
            longitude: long,
          })
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log("errer comming from put rq", err);
          });
      } else if (jsonValue.role === "ds") {
        axios
          .put(`${url}/api/disable/${jsonValue.id}`, pin)
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err, "err");
          });
      }
      return jsonValue;
    } catch (e) {
      console.log(e, "rrrrrrrr");
    }
  };
  // useEffect(() => {
  //   getData();
  // }, [loc]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      // console.log(location);
      setPin({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      setLocation(!loc);
      getData(location.coords.altitude, location.coords.longitude);
    })();
  }, []);
  useEffect(() => {
    DataOfMap();
  }, []);
  const calculatePreciseDistance = (element) => {
    if (element.longitude != null && element.latitude != null) {
      console.log("kkkkkk", element);
      var pdis = getPreciseDistance(pin, {
        latitude: element.latitude,
        longitude: element.longitude,
      });
      console.log(">>>>>>", pdis);
      return pdis;
    }
  };

  const DataOfMap = () => {
    getData()
      .then((res) => {
        console.log(res.role, "roleeee");
        return res.role;
      })
      .then((role) => {
        
        if (role=='vr') {
          
          axios.get(`${url}/api/${"disable"}`).then((response) => {
            
            setArr(response.data);
          }, []);
        } else {
          axios.get(`${url}/api/${"volnteer"}`).then((response) => {
            setArr(response.data);
          }, []);
        }
      });
  };

  if (role == "ds") {
    console.log(jsonValue);
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: 36.894252,
            longitude: 10.186974,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}
          onUserLocationChange={(e) => {
            console.log("onUserLocationChange", e.nativeEvent.coordinate);
            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
          }}
        >
          <Marker
            coordinate={pin}
            description="i need help plz"
            draggable={true}
            onDragStart={(e) => {
              console.log("drag start", e.nativeEvent);
              setPin({
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude,
              });
            }}
          >
            <View>
              <Image
                source={require("../assets/help.png")}
                style={styles.MarkerImage}
              />
            </View>
            <Callout>
              <Text>i need help</Text>
            </Callout>
          </Marker>
          {show &&
            arr
              .filter(
                (e) =>
                  calculatePreciseDistance(e) <= radius &&
                  e.latitude &&
                  e.longitude
              )
              .map((cor) => {
                console.log("reight distence", cor);
                return (
                  <Marker
                    key={cor.id}
                    coordinate={{
                      latitude: cor.latitude,
                      longitude: cor.longitude,
                    }}
                    tappable={true}
                    onPress={(e) => {
                      console.log("amine tapping", e.nativeEvent.coordinate);
                      setDestination(e.nativeEvent.coordinate);
                    }}
                  >
                    <Image
                      source={require("../assets/val.png")}
                      style={styles.MarkerImage}
                    />
                  </Marker>
                );
              })}
          <MapViewDirections
            origin={pin}
            destination={destination}
            apikey={"AIzaSyB3gw78dU8-sOg2nzSiHi4-7LUgEedSasM"}
            strokeWidth={5}
            strokeColor="#0096FF"
          />
          {/* <Polyline coordinates={[pin, directions]} strokeWidth={4}strokeColor="red" /> */}
          <Circle center={pin} radius={radius} />
        </MapView>
        <MyComponent
          show={show}
          setShow={setShow}
          radius={radius}
          setRadius={setRadius}
        />
      </View>
    );
  } else if (role == "vr") {
    console.log(role, "vr");
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: 36.894252,
            longitude: 10.186974,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}
          onUserLocationChange={(e) => {
            console.log("onUserLocationChange", e.nativeEvent.coordinate);
            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
          }}
        >
          <Marker
            coordinate={pin}
            description="eager to help"
            draggable={true}
            onDragStart={(e) => {
              console.log("drag start", e.nativeEvent);
              setPin({
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude,
              });
            }}
          >
            <View>
              <Image
                source={require("../assets/val.png")}
                style={styles.MarkerImage}
              />
            </View>
            <Callout>
              <Text>eager to help</Text>
            </Callout>
          </Marker>
          {show &&
            arr
              .filter(
                (e) =>
                  calculatePreciseDistance(e) <= radius
              )
              .map((cor) => {
                console.log("reight di          stence", cor);
                return (
                  <>
                    
                    <Marker
                      key={cor.id}
                      coordinate={{
                        latitude: cor.latitude,
                        longitude: cor.longitude,
                      }}
                      tappable={true}
                      onPress={(e) => {
                        console.log("amine tapping", e.nativeEvent.coordinate);
                        setDestination(e.nativeEvent.coordinate);
                      }}
                    >
                      <Image
                        source={require("../assets/help.jpg")}
                        style={styles.MarkerImage}
                      />
                    </Marker>
                    <MapViewDirections
                      origin={pin}
                      destination={destination}
                      apikey={"AIzaSyB3gw78dU8-sOg2nzSiHi4-7LUgEedSasM"}
                      strokeWidth={5}
                      strokeColor="#0096FF"
                    />
                  </>
                );
              })}
          
          {/* <Polyline coordinates={[pin, directions]} strokeWidth={4}strokeColor="red" /> */}
          <Circle center={pin} radius={radius} />
        </MapView>
        <MyComponent
          show={show}
          setShow={setShow}
          radius={radius}
          setRadius={setRadius}
        />
      </View>
    );
  }

  //  return (
  //     <View style={styles.container}>
  //       <MapView
  //         provider={PROVIDER_GOOGLE}
  //         style={styles.map}
  //         initialRegion={{
  //           latitude: 36.894252,
  //           longitude: 10.186974,
  //           latitudeDelta: 0.0922,
  //           longitudeDelta: 0.0421,
  //         }}
  //         showsUserLocation={true}
  //         onUserLocationChange={(e) => {
  //           console.log("onUserLocationChange", e.nativeEvent.coordinate);
  //           setPin({
  //             latitude: e.nativeEvent.coordinate.latitude,
  //             longitude: e.nativeEvent.coordinate.longitude,
  //           });
  //         }}
  //       >
  //         <Marker
  //           coordinate={pin}
  //           description="i need help plz"
  //           draggable={true}
  //           onDragStart={(e) => {
  //             console.log("drag start", e.nativeEvent);
  //             setPin({
  //               latitude: e.nativeEvent.coordinate.latitude,
  //               longitude: e.nativeEvent.coordinate.longitude,
  //             });
  //           }}
  //         >
  //           <View>
  //             <Image
  //               source={require("../assets/help.png")}
  //               style={styles.MarkerImage}
  //             />
  //           </View>
  //           <Callout>
  //             <Text>i need help</Text>
  //           </Callout>
  //         </Marker>
  //         {show &&
  //           arr
  //             .filter((e) => calculatePreciseDistance(e) <= radius&& e.latitude && e.longitude)
  //             .map((cor) => {
  //               console.log("reight distence",cor)
  //               return (
  //                 <Marker
  //                   key={cor.id}
  //                   coordinate={{
  //         latitude: cor.latitude,
  //         longitude: cor.longitude,
  //       }}
  //                   tappable={true}
  //                   onPress={(e) => {
  //                     console.log("amine tapping", e.nativeEvent.coordinate);
  //                     setDestination(e.nativeEvent.coordinate);
  //                   }}
  //                 >
  //                   <Image
  //                     source={require("../assets/val.png")}
  //                     style={styles.MarkerImage}
  //                   />
  //                 </Marker>
  //               );
  //             })}
  //         <MapViewDirections
  //           origin={pin}
  //           destination={destination}
  //           apikey={'AIzaSyB3gw78dU8-sOg2nzSiHi4-7LUgEedSasM'}
  //           strokeWidth={5}
  //           strokeColor="#0096FF"
  //         />
  //         {/* <Polyline coordinates={[pin, directions]} strokeWidth={4}strokeColor="red" /> */}
  //         <Circle center={pin} radius={radius} />
  //       </MapView>
  //       <MyComponent
  //         show={show}
  //         setShow={setShow}
  //         radius={radius}
  //         setRadius={setRadius}
  //       />
  //     </View>
  //   );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  panel: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  MarkerImage: {
    width: 50,
    height: 50,
  },
  scrollView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  chipsScrollView: {
    position: "absolute",
    paddingHorizontal: 10,
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
});
export default Map;
