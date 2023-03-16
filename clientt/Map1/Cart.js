
import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";

export default function Card({  oneUser }) {
  return (
    
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f6f6f6" }}>
      <View style={styles.container}>
        <View style={styles.profile}>
          <Image
            alt=""
            source={{
              uri: oneUser.image,
            }}
            style={styles.profileAvatar}
          />
          <Text style={styles.profileName}>
            {oneUser != undefined && oneUser.name}
          </Text>

          <Text style={styles.profileEmail}>
             {oneUser != undefined && oneUser.email}
          </Text>
          <Text style={styles.profileEmail}>
           {oneUser != undefined && oneUser.phoneNumber}
          </Text>

          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}
          >
            <View style={styles.profileAction}>
              <Text style={styles.profileActionText}>chat</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f6f6",
    padding: 16,
  },
  profile: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 16,
  },
  profileAvatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  profileName: {
    fontSize: 24,
    fontWeight: "600",
    color: "#090909",
    marginBottom: 8,
    textAlign: "center",
  },
  profileEmail: {
    fontSize: 16,
    fontWeight: "400",
    color: "#848484",
    marginBottom: 16,
    textAlign: "center",
  },
  profileAction: {
    backgroundColor: "#3A98B9",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 4,
  },
  profileActionText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});




