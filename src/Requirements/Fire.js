import firebase from 'firebase';

var firebaseConfig = {
    
    apiKey: "AIzaSyCaVyTPypw8WSUcQAXyvMil39G-GoW5ZTM",
    authDomain: "academy-c8db5.firebaseapp.com",
    projectId: "academy-c8db5",
    storageBucket: "academy-c8db5.appspot.com",
    messagingSenderId: "693648105703",
    appId: "1:693648105703:web:34a771f851ddbb8b238242",
    measurementId: "G-C38XCRV9W6"
  
  };

  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;