// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9YcwFIjYDISIRJlM2LVxKSJzzLb9_Ips",
  authDomain: "warehouse-management-6faac.firebaseapp.com",
  projectId: "warehouse-management-6faac",
  storageBucket: "warehouse-management-6faac.appspot.com",
  messagingSenderId: "1059369302541",
  appId: "1:1059369302541:web:69173e90d3faaaf39d7344"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;