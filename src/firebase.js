import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA9d5HXuMuo494jBSABXE82S4Pu1VI6DV4",
  authDomain: "clone-a6922.firebaseapp.com",
  projectId: "clone-a6922",
  storageBucket: "clone-a6922.appspot.com",
  messagingSenderId: "778748578059",
  appId: "1:778748578059:web:0dfea4b4334545d51d3a0e",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
