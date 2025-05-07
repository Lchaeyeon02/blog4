import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FB_apiKey,
    authDomain: import.meta.env.VITE_FB_authDomain,
    projectId: import.meta.env.VITE_FB_projectId,
    storageBucket: import.meta.env.VITE_FB_storageBucket,
    messagingSenderId: import.meta.env.VITE_FB_messagingSenderId,
    appId: import.meta.env.VITE_FB_appId,

}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export {firebase, firebaseApp, db}