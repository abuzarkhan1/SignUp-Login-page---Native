
import {getApp , getApps , initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB84l_hQE6tYw5guO9WRlqzboAzWA3davo",
    authDomain: "chat-app-7b88b.firebaseapp.com",
    projectId: "chat-app-7b88b",
    storageBucket: "chat-app-7b88b.appspot.com",
    messagingSenderId: "46430737252",
    appId: "1:46430737252:web:24967e33482d9a1aa3e071"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)

const firebaseAuth = getAuth(app);
const fireStoreDB = getFirestore(app);

export {app , firebaseAuth , fireStoreDB};