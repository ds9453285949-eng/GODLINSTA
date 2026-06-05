import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, collection, addDoc, serverTimestamp, query, orderBy, onSnapshot } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDJSmirvoIwieTr25NQUOtAHF-v_aTINoM",
  authDomain: "godlinsta.firebaseapp.com",
  projectId: "godlinsta",
  storageBucket: "godlinsta.firebasestorage.app",
  messagingSenderId: "808932933868",
  appId: "1:808932933868:web:098b5e9cb0fd4e856065c9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, collection, addDoc, serverTimestamp, query, orderBy, onSnapshot };
