import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDSLaVmztIWDksvlSnZBeQ0br3_ZiEWzlo",
    authDomain: "cosa-lo.firebaseapp.com",
    projectId: "cosa-lo",
    storageBucket: "cosa-lo.appspot.com",
    messagingSenderId: "214893818785",
    appId: "1:214893818785:web:c274b626ec995f5a8291e0"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;