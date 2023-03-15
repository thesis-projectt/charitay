import React, { useLayoutEffect, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { useState, useEffect } from "react";
import { signOut } from "@firebase/auth";
import { authentication, database } from "../screens/firebase";
import {
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot,
} from "@firebase/firestore";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  //   const onSignOut = () => {
  //     signOut(authentication).catch((error) => {
  //       console.log(error);
  //     });
  //   };

  useLayoutEffect(() => {
    const collectionRef = collection(database, "chats");
    const q = query(collectionRef, orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      console.log("snapshot", snapshot.docs);
      setMessages(
        snapshot.docs.map((doc) => {
          console.log(
            "test",
            _id
          )({
            _id: doc._id,
            createdAt: doc.data().createdAt,
            text: doc.data().text,
            user: doc.data().user,
          });
        })
      );
    });
    return () => unsubscribe();
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );

    const { _id, createdAt, text, user } = messages[0];
    // addDoc(collection(database, "chats"), {
    //   _id,
    //   createdAt,
    //   text,
    //   user,
    // });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: authentication?.currentUser?.email,
        }}
        messagesContainerStyle={{
          backgroundColor: "#fff",
        }}
      />
    </View>
  );
};

export default Chat;
