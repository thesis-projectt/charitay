import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDXuvIOIwIGy76fPbXwe-1H6xIFsf-s84",
  authDomain: "fir-4d4a2.firebaseapp.com",
  projectId: "fir-4d4a2",
  storageBucket: "fir-4d4a2.appspot.com",
  messagingSenderId: "608021405259",
  appId: "1:608021405259:web:61228ed8047cc30ee637ce",
  measurementId: "G-657MDQTEZ9",
};
const app = initializeApp(firebaseConfig);
 export default app
 export  const authentication = getAuth(app);
 export const provider = new GoogleAuthProvider()
export const  storage = getStorage(app,"gs://charity-731e9.appspot.com");
export const database = getFirestore();
