import React, { useState, useEffect } from "react";
import MapView, {
  Callout,
  Circle,
  Marker,
  Polyline,
  PROVIDER_GOOGLE,
 
} from "react-native-maps";


import MyComponent from './swipe'
import SlidingUpPanel from 'rn-sliding-up-panel';
import { StyleSheet, View, Image, Text, Animated,ScrollView,TouchableOpacity,Button} from "react-native";
import * as Location from "expo-location";
import { getPreciseDistance, getDistance } from "geolib";
import dummyy from "./dummy.js";
import MapViewDirections from "react-native-maps-directions";
// import  { GOOGLE_MAPS_KEY } from "@env";
const Map = () => {
  const [grouppin, setGrouppin] = useState(dummyy);
  const [radius, setRaduis] = useState(3000);
  const [destination, setDestination] = useState({
    // latitude: 36.88784160689139,
    // longitude:10.198178751583558,
  });


  const [pin, setPin] = useState({
    latitude: 36.894252,
    longitude: 10.186974,
  });
  const [directions, setDirections] = useState({
    latitude: 36.88784160689139,
    longitude: 10.198178751583558,
  });
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
    })();
  }, []);
  const calculatePreciseDistance = (element) => {
    var pdis = getPreciseDistance(pin, element);
    return pdis;
    //  console.log(pdis);
  };
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
              source={require("../assets/help.jpg")}
              style={styles.MarkerImage}
            />
          </View>
          <Callout>
            <Text>i need help</Text>
          </Callout>
        </Marker>
        {grouppin
          .filter((e) => calculatePreciseDistance(e) <= radius)
          .map((cor) => {
            // console.log("reight distence",cor)
            return (
              <Marker
                key={cor.latitude}
                coordinate={cor}
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
          apikey
          strokeWidth={5}
          strokeColor="#0096FF"
        />
        {/* <Polyline coordinates={[pin, directions]} strokeWidth={4}strokeColor="red" /> */}

        <Circle center={pin} radius={radius} />
       
    
      </MapView>

      <MyComponent/>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  panel: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
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
    position:'absolute', 
    paddingHorizontal:10
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
});
export default Map;
