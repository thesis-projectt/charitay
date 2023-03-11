import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Profile from '../Profile';
import AddEvents from '../addEvents';



const Drawer = createDrawerNavigator()


export default function Drawer1() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={AddEvents} />
          <Drawer.Screen name="profile" component={Profile} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }