import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDapR3bnv6mAfXUpbXfQUaWkuNkKdB2Evs",
  authDomain: "pizza-app-606f2.firebaseapp.com",
  projectId: "pizza-app-606f2",
  storageBucket: "pizza-app-606f2.appspot.com",
  messagingSenderId: "884951680753",
  appId: "1:884951680753:web:e02efcd39b6f1b00004b50"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

 
