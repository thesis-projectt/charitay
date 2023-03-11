import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { sizes, spacing } from "./theme";
import { useNavigation } from "@react-navigation/native";
// import Navigation from '../screens/Navigation/Navigation';

const SectionHeader = ({ title, onPress, buttonTitle: string = "Button" }) => {
  const navigation = useNavigation();
  console.log(navigation.navigate('AllEvents'));
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Button
        title="Show"
        onPress={() => {
          //  alert('clicked')
          navigation.navigate("AllEvents");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: spacing.l,
    marginTop: spacing.l,
    marginBottom: 10,
  },

  title: {
    fontSize: sizes.h3,
    fontWeight: "bold",
  },
});

export default SectionHeader;
