import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyAagmJCqShyEsv-esNz_DiJOKeGW5bvGCQ",
//     authDomain: "fir-22b78.firebaseapp.com",
//     projectId: "fir-22b78",
//     storageBucket: "fir-22b78.appspot.com",
//     messagingSenderId: "836233874985",
//     appId: "1:836233874985:web:6be8cfa6d8e24f16c85638",
//     measurementId: "G-8S0EXDQCEM"
//   };
  const firebaseConfig = {
    apiKey: "AIzaSyDPdtiQPS5sSZG5iAkyShrqWLsI_n-AA1o",
    authDomain: "microblog-a23b4.firebaseapp.com",
    databaseURL: "https://microblog-a23b4-default-rtdb.firebaseio.com",
    projectId: "microblog-a23b4",
    storageBucket: "microblog-a23b4.appspot.com",
    messagingSenderId: "508181336911",
    appId: "1:508181336911:web:48e9322d5fd20698832b3a",
    measurementId: "G-1SKYJ51GKX"
  };

  export default firebase.initializeApp(firebaseConfig)
