import firebase from "firebase";
import "firebase/auth";

export const auth = firebase.initializeApp({

        apiKey: "AIzaSyDmn99gye-dWCy6V-lsNP6N62TY4SWsTDQ",
        authDomain: "chatroom-a1645.firebaseapp.com",
        projectId: "chatroom-a1645",
        storageBucket: "chatroom-a1645.appspot.com",
        messagingSenderId: "617421866667",
        appId: "1:617421866667:web:d36e295d98285dc62399ee"

}).auth();