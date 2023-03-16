import { View, Text } from "react-native";
import React from "react";
import {
  Box,
  Center,
  Pressable,
  HStack,
  Icon,
  VStack,
  Skeleton,
  Button,
} from "native-base";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
const Bar = () => {
  const navigation = useNavigation();

  return (
    <Center w="100%">
      <HStack
        w="90%"
        maxW="400"
        borderWidth="1"
        space={5}
        rounded="md"
        borderColor="coolGray.400"
        p="4"
        top={395}
      >
        <Skeleton flex="1" h="150" rounded="md" />
        <VStack flex="3" space="4">
          <Skeleton />
          <Skeleton.Text />
          <HStack space="2" alignItems="center">
            <Skeleton size="5" rounded="full" />
            <Skeleton h="3" flex="2" rounded="full" />
            <Skeleton h="3" flex="1" rounded="full" />
          </HStack>
        </VStack>
      </HStack>
      <HStack
        w="90%"
        maxW="400"
        borderWidth="1"
        space={5}
        rounded="md"
        borderColor="coolGray.400"
        p="4"
      >
        <Skeleton flex="1" h="150" rounded="md" />
        <VStack flex="3" space="4">
          <Skeleton />
          <Skeleton.Text />
          <HStack space="2" alignItems="center">
            <Skeleton size="5" rounded="full" />
            <Skeleton h="3" flex="2" rounded="full" />
            <Skeleton h="3" flex="1" rounded="full" />
          </HStack>
        </VStack>
      </HStack>

      <Button
        onPress={() => navigation.navigate("AddEvent")}
        top={231}
        left={100}
      >
        Create an Events
      </Button>
      <Button
        onPress={() => navigation.navigate("Event")}
        top={190}
        left={-100}
      >
        Check your Events
      </Button>
    </Center>
  );
};

export default Bar;
