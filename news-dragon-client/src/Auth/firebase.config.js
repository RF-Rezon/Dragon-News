// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYiAZC0t6wNZe1K50vwWUB3Wv9lrWRwRw",
  authDomain: "news-dragon-client-65105.firebaseapp.com",
  projectId: "news-dragon-client-65105",
  storageBucket: "news-dragon-client-65105.appspot.com",
  messagingSenderId: "850495545310",
  appId: "1:850495545310:web:3da475cd83a52a054c874f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;