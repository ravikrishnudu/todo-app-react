import firebase from "firebase";


  const firebaseApp = firebase.initializeApp({
            apiKey: "AIzaSyBmlR9skJ4ZnzesBLj9Q2s9TSwpMtrZsTM",
            authDomain: "todo-app-3dd34.firebaseapp.com",
            projectId: "todo-app-3dd34",
            storageBucket: "todo-app-3dd34.appspot.com",
            messagingSenderId: "745203831672",
            appId: "1:745203831672:web:461a19f0d36442b26cae8d",
            measurementId: "G-XXYJKCP99G"
  });

  const db = firebaseApp.firestore();

  export default  db;