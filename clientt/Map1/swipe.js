import React, { useRef, useState } from "react";
import {
  View,
  Button,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
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
    height: 70,
    backgroundColor: "#EEEEEE",
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
  },

  button: {
    justifyContent: "space-between",
    backgroundColor: "#3A98B9",
    paddingHorizontal: 25,
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
};
const MyComponent = ({ show, radius, setShow, setRadius, oneUser }) => {
  const [scrollEnabled, setScrollEnabled] = useState(true);

  return (
   
      <View style={styles.container}>
        <Text>Hello world</Text>

        <SlidingUpPanel
          ref={(c) => (this._panel = c)}
          draggableRange={{ top: height / 2, bottom: 120 }}
          animatedValue={this._draggedValue}
          snappingPoints={[0, 500]}
          showBackdrop={false}
          dragEnabled={false}
          onPress={() => this._panel.show()}
        >
          <View style={styles.panel}>
             
            {/* <Button title="Show panel" /> */}
            <Button title="Show panel" onPress={() => this._panel.show()} />
            <View style={styles.panelHeader}>
              <View style={styles.container}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    console.log(radius);
                    setRadius((radius += 1000));
                  }}
                >
                  <Text style={styles.buttonText}>zone +</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    setShow(!show);
                  }}
                >
                  <Text style={styles.buttonText}>eager to help </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    console.log(radius);
                    setRadius((radius -= 1000));
                  }}
                >
                  <Text style={styles.buttonText}>zone -</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Card oneUser={oneUser} />
          </View>
        </SlidingUpPanel>
      </View>
  );
};

export default MyComponent;
