import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDSyggmZMZTbsMaWGZtGH7ZAX0ij1XmM8Q",
    authDomain: "recipe-f363d.firebaseapp.com",
    projectId: "recipe-f363d",
    storageBucket: "recipe-f363d.appspot.com",
    messagingSenderId: "600835907922",
    appId: "1:600835907922:web:5a8186dd39608da0961a8b",
    measurementId: "G-J0KL7VVETC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;