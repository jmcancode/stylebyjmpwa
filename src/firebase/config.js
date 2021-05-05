import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCXvJVMjsFcNYX9ea7wGokH3F70y5nezEI",
  authDomain: "style-by-jm-pwa.firebaseapp.com",
  projectId: "style-by-jm-pwa",
  storageBucket: "style-by-jm-pwa.appspot.com",
  messagingSenderId: "42798726592",
  appId: "1:42798726592:web:9326e017283762007f9c25",
  measurementId: "G-JLV9PQR4YV",
});

export const auth = app.auth();
export const db = app.firestore();
export const analytics = firebase.analytics();

export default app;
