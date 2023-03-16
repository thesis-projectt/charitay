import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
} from "react";
// import { TouchableOpacity, Text, View } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import {
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot,
} from "firebase/firestore";
// import { signOut } from "firebase/auth";
import { authentication, database } from "../screens/firebase";
console.log("🚀 ~ file: chatRoom.js:18 ~ authentication:", authentication);

export default function Chat({ route }) {
  const [messages, setMessages] = useState([]);
  // const name = route.params;

  // const onSignOut = () => {
  //   signOut(auth).catch((error) => console.log("Error logging out: ", error));
  // };

  useLayoutEffect(() => {
    const collectionRef = collection(database, "chats");
    const q = query(collectionRef, orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      console.log("querySnapshot unsusbscribe");
      setMessages(
        querySnapshot.docs.map((doc) => ({
          _id: doc.data()._id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user,
        }))
      );
    });
    return unsubscribe;
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    // setMessages([...messages, ...messages]);
    const { _id, createdAt, text, user } = messages[0];
    addDoc(collection(database, "chats"), {
      _id,
      createdAt,
      text,
      user,
    });
  }, []);

  return (
    // <View></View>

    <GiftedChat
      messages={messages}
      showAvatarForEveryMessage={false}
      showUserAvatar={false}
      onSend={(messages) => onSend(messages)}
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
  );
}
