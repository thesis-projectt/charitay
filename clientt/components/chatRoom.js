// import React, { useLayoutEffect, useCallback } from "react";
// import { StyleSheet, Text, View } from "react-native";
// import { GiftedChat } from "react-native-gifted-chat";
// import { useState, useEffect } from "react";
// import { signOut } from "@firebase/auth";
// import { authentication, database } from "../screens/firebase";
// import {
//   collection,
//   addDoc,
//   orderBy,
//   query,
//   onSnapshot,
// } from "@firebase/firestore";

// const Chat = () => {
//   const [messages, setMessages] = useState([]);

//   //   const onSignOut = () => {
//   //     signOut(authentication).catch((error) => {
//   //       console.log(error);
//   //     });
//   //   };

//   useLayoutEffect(() => {
//     const collectionRef = collection(database, "chats");
//     const q = query(collectionRef, orderBy("createdAt", "desc"));

//     const unsubscribe = onSnapshot(q, (snapshot) => {
//       console.log("snapshot", snapshot.docs);
//       setMessages(
//         snapshot.docs.map((doc) => {
//           console.log(
//             "test",
//             _id
//           )({
//             _id: doc._id,
//             createdAt: doc.data().createdAt,
//             text: doc.data().text,
//             user: doc.data().user,
//           });
//         })
//       );
//     });
//     return () => unsubscribe();
//   }, []);

//   const onSend = useCallback((messages = []) => {
//     setMessages((previousMessages) =>
//       GiftedChat.append(previousMessages, messages)
//     );

//     const { _id, createdAt, text, user } = messages[0];
//     addDoc(collection(database, "chats"), {
//       _id,
//       createdAt,
//       text,
//       user,
//     });
//   }, []);

//   return (
//     <View style={{ flex: 1 }}>
//       <GiftedChat
//         messages={messages}
//         onSend={(messages) => onSend(messages)}
//         user={{
//           _id: authentication?.currentUser?.email,
//         }}
//         messagesContainerStyle={{
//           backgroundColor: "#fff",
//         }}
//       />
//     </View>
//   );
// };

// export default Chat;

import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
} from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

import {
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot,
} from "firebase/firestore";
import { authentication, database } from "../screens/firebase";
import { useNavigation } from "@react-navigation/native";

import { LogBox } from "react-native";

export default function Chat() {
  LogBox.ignoreAllLogs();
  const [messages, setMessages] = useState([]);
  const [messagesLength, setMessagesLength] = useState(0);

  useEffect(() => {
    const collectionRef = collection(database, "chats");
    const q = query(collectionRef, orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      console.log("querySnapshot unsusbscribe");
      setMessages(
        querySnapshot.docs.map((doc, i) => {
          i - 1 ? setMessagesLength(messages.length) : undefined;
          return {
            _id: doc.data()._id,
            createdAt: doc.data().createdAt.toDate(),
            text: doc.data().text,
            user: doc.data().user,
          };
        })
      );
    });
    return unsubscribe;
  }, [messagesLength, messages.length]);

  const onSend = useCallback((messages) => {
    //alert(JSON.stringify(messages))
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    setMessagesLength(messages.length);

    setMessages([...messages, ...messages]);
    const { _id, createdAt, text, user } = messages[0];
    addDoc(collection(database, 'chats'), {
      _id,
      createdAt,
      text,
      user
    });
  }, []);

  return (
    // <View>
    //         {messages && messages.map((message) => (
    //   <Text key={message}>{message.text}</Text>
    // ))}
    // </View>
    // <>
    //   {messages.map(message => (
    //     <Text key={message._id}>{message.text}</Text>
    //   ))}
    // </>
    <>
      {console.log(messagesLength, "mehdiiiiiiiiiiiiiiiiiiiiiiiiiiii")}

      <GiftedChat
        messages={messages}
        showAvatarForEveryMessage={true}
        showUserAvatar={false}
        keyboardShouldPersistTaps="never"
        //  onSend={messages => onSend(messages)}
        messagesContainerStyle={{
          backgroundColor: "#fff",
        }}
        textInputStyle={{
          backgroundColor: "#fff",
          borderRadius: 20,
        }}
        user={{
          _id: authentication?.currentUser?.email,
          avatar: "https://i.pravatar.cc/300",
        }}
      />
    </>
  );
}
