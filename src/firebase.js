import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCKE8CHPrb-mq8nTtC-yaotNb5yuatfaG4",
  authDomain: "wsbtodo.firebaseapp.com",
  projectId: "wsbtodo",
  storageBucket: "wsbtodo.appspot.com",
  messagingSenderId: "99044838429",
  appId: "1:99044838429:web:da132b7d246a5468964af4"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)