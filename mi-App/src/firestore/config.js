// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsWwdBc2p9q1whJNnHzU8_LlxbLFCe9wM",
  authDomain: "miapp-ch-43545.firebaseapp.com",
  projectId: "miapp-ch-43545",
  storageBucket: "miapp-ch-43545.appspot.com",
  messagingSenderId: "210180304976",
  appId: "1:210180304976:web:e1797b992c11341728e155"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//
export const initFirestoreApp=()=>{
    return app
}