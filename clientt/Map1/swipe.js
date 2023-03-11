import React, { useRef, useState } from "react";
import {
  View,
  Button,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import SlidingUpPanel from "rn-sliding-up-panel";
import Card from "./Cart";

const { height } = Dimensions.get("window");

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#add7f6",
    alignItems: "center",
    justifyContent: "center",
  },
  panel: {
    flex: 1,
    backgroundColor: "#97BFB4",
    position: "relative",
    
  },
  panelHeader: {
    height: 120,
    backgroundColor: "#EEEEEE",
    alignItems: "center",
    justifyContent: "center",
  },
  // favoriteIcon: {
  //   position: 'absolute',
  //   top: -24,
  //   right: 24,
  //   backgroundColor: '#00a8e8',
  //   width: 48,
  //   height: 48,
  //   padding: 8,
  //   borderRadius: 10,
  //   zIndex: 7
  // },
  // animButton:{
  //   marginLeft:15,
  //   top:20,
  //   backgroundColor:'#e63946',
  //   paddingHorizontal:10,
  //   paddingVertical:5,
  //   borderRadius:0,
  //   elevation:10,
  //   shadowColor:'#000',
  //   shadowOffset:{
  //       width:10,
  //       height:10
  //   },
  //   shadowOppacity:0.25,
  //   shadowRadius:10,
  // },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
    
  },

  button: {
    justifyContent: "space-between",
    backgroundColor: "#5D9C59",
    paddingHorizontal: 25,
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
};
const MyComponent = ({ show, radius, setShow, setRadius }) => {
  const [scrollEnabled, setScrollEnabled] = useState(true);
  return (
    <View style={styles.container}>
      {/* <Text>Hello world</Text> */}
      <SlidingUpPanel
        ref={(c) => (this._panel = c)}
        draggableRange={{ top: height / 1.75, bottom: 120 }}
        animatedValue={this._draggedValue}
        snappingPoints={[0, 500]}
        showBackdrop={false}
        dragEnabled={false}
        
      >
        <View style={styles.panel}>
          <View style={styles.panelHeader}>
            {/* <Text style={{color: '#FFF'}}>Bottom Sheet Peek</Text> */}

            {/* <TouchableOpacity
              style={[styles.animButton,{backgroundColor:'#81b29a'}]}
              onPress={()=>{
                setShow(!show)
                if (true){

                    swingAnimRef.current.swing(2000);
                }
              }}
              >
                <Text style={styles.animButtonText} > volunteer</Text>

              </TouchableOpacity> */}
            <View style={styles.container}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  console.log(radius);
                  setRadius((radius += 1000));
                }}
              >
                <Text style={styles.buttonText}>R+</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setShow(!show);
                }}
              >
                <Text style={styles.buttonText}>all valanteer</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  console.log(radius);
                  setRadius((radius -= 1000));
                }}
              >
                <Text style={styles.buttonText}>R-</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Card />
        </View>
      </SlidingUpPanel>
    </View>
  );
};

export default MyComponent;
