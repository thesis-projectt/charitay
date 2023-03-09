import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Image } from "react-native-svg";
import AddEvents from "../addEvents";
import Favorite from "../favorite";
import Profile from "../Profile";
import { NavigationContainer } from "@react-navigation/native";
import icons from "../../constant/icons";

import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
         
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            console.log(route)
            if (route.name === "Home") {
              iconName = focused ? "home-outline" : "home";
            } else if (route.name === "favorite") {
              iconName = focused ? "heart-outline" : "heart";
            } else if (route.name === "profile") {
              iconName = focused ? "navigate-outline" : "navigate";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
          headerShown : false
        })}
      >
        <Tab.Screen name="Home" component={AddEvents} />
        <Tab.Screen name="favorite" component={Favorite}/>
        <Tab.Screen name="profile" component={Profile}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
