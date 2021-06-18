import firebase from "firebase";

var firebaseConfig = {
  apiKey: "Coloque as informações de firebase aqui",
  authDomain: "#",
  projectId: "#",
  storageBucket: "#",
  messagingSenderId: "#",
  appId: "#"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
