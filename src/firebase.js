import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// const firebaseConfig = {
//     apiKey: "AIzaSyB13PntUEDMkFbTt2psiHOZtQih83qrf88",
//     authDomain: "whatsapp-clone-fafc9.firebaseapp.com",
//     databaseURL: "https://whatsapp-clone-fafc9.firebaseio.com",
//     projectId: "whatsapp-clone-fafc9",
//     storageBucket: "whatsapp-clone-fafc9.appspot.com",
//     messagingSenderId: "1027981883218",
//     appId: "1:1027981883218:web:f62f32ffe8e5701f0f2c8b",
//     measurementId: "G-0YMF5ZZL8N"
//   };
const firebaseConfig = {
  apiKey: "AIzaSyDvy65gCqaja-tMAAd-NlW1PKYbz5mgVYk",
  authDomain: "meet-mee-f39cc.firebaseapp.com",
  projectId: "meet-mee-f39cc",
  storageBucket: "meet-mee-f39cc.appspot.com",
  messagingSenderId: "562290777884",
  appId: "1:562290777884:web:796dab1ed3a7e9c594a4d9",
  measurementId: "G-Z39D4P5RGT"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
