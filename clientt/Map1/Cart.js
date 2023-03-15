// import { Center } from "native-base";
// import React from "react";
// import { View, Text, Image, StyleSheet} from "react-native";

// const Card = ({ name, phone, role, imageUri, oneUser }) => {
//   console.log(oneUser,'===================');

//   return (
//     <View style={styles.card}>
//       <View style={styles.cardHeader}>
//         <Image
//           style={styles.profileImage}
//           source={{
//             uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPyGNr2qL63Sfugk2Z1-KBEwMGOfycBribew&usqp=CAU",
//           }}
//         />
//       </View>
//       <View style={styles.cardBody}>
//         <Text style={styles.name}>
//           Name:                   {oneUser != undefined && oneUser.name}
//         </Text>
//         <Text style={styles.name}>
//           email:                   {oneUser != undefined && oneUser.email}
//         </Text>
//         <Text style={styles.name}>
//           PhoneNumber: {oneUser != undefined && oneUser.phoneNumber}
//         </Text>
//         <Text style={styles.name}>
//           Role:                     {oneUser != undefined && oneUser.role}
//         </Text>

//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: "#EEEEEE",
//     borderRadius: 8,
//     elevation: 4,
//     margin: 50,
//     top: -10,
//   },
//   cardHeader: {
//     backgroundColor: "#3A98B9",
//     borderTopLeftRadius: 8,
//     borderTopRightRadius: 8,
//     padding: 8,
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   profileImage: {
//     width: 60,
//     height: 60,
//     borderRadius: 25,
//     marginRight: 8,
//     alignItems: "center",
//     left: 100,
//   },
//   name: {
//     fontSize: 15,
//     fontWeight: "bold",
//     color: "#3A98B9",
//   },
//   cardBody: {
//     padding: 8,
//   },

// });

// export default Card;
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

export default function Card({ name, phone, role, imageUri, oneUser }) {
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
            email: {oneUser != undefined && oneUser.email}
          </Text>
          <Text style={styles.profileEmail}>
            Num:{oneUser != undefined && oneUser.phoneNumber}
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
    paddingVertical: 48,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  profile: {
    padding: 16,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#e3e3e3",
  },
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 9999,
  },
  profileName: {
    marginTop: 12,
    fontSize: 20,
    fontWeight: "600",
    color: "#090909",
  },
  profileEmail: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: "400",
    color: "#848484",
  },
  profileAction: {
    justifyContent: "space-between",
    backgroundColor: "#3A98B9",
    paddingHorizontal: 20,
    paddingVertical: 0,
    marginHorizontal: 7,
    borderRadius: 5,
    top: 0,
  },

  profileActionText: {
    color: "white",
    fontWeight: "bold",
    alignItems: "center",
  },
});
