import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Image } from "react-native-svg";
import AddEvents from "../addEvents";
import Favorite from "../favorite";
import Profile from "../Profile";
// import AllEvents from "../AllEvents";
import { NavigationContainer } from "@react-navigation/native";
import icons from "../../constant/icons";
// import Map from "../../Map1/Map";
import { Ionicons } from "@expo/vector-icons";
import Map from "../../Map1/MapDs";
import Profilev from "../../screens/VolunteerHome/VHome";

const Tab = createBottomTabNavigator();

const TabNavigator = ({route}) => {
  const {user}=route.params
  console.log(route.params.userId,"hello user");
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
         
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            
            if (route.name === "Home") {
              iconName = focused ? "home" : "home";
            } else if (route.name === "map") {
              iconName = focused ? "navigate" : "navigate";
              
            } else if (route.name === "profile") {
              iconName = focused ? "person" : "person";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
          headerShown : false,
          tabBarShowLabel : false
        })}
      >
        <Tab.Screen name="Home" component={AddEvents} />
        <Tab.Screen name="map" component={Map}/>
        <Tab.Screen name="profile" component={Profilev}/>
      </Tab.Navigator>
  );
};

export default TabNavigator;
