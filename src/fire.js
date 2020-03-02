import * as firebase from "firebase";
import "@firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB9-_--3deCY1AWUkF-j0o57MvU81qiOuc",
    authDomain: "vant4ge-todo-69453.firebaseapp.com",
    databaseURL: "https://vant4ge-todo-69453.firebaseio.com",
    projectId: "vant4ge-todo-69453",
    storageBucket: "vant4ge-todo-69453.appspot.com",
    messagingSenderId: "554180825237",
    appId: "1:554180825237:web:22159c4bbaecb08d890b9c",
    measurementId: "G-7W74R6Q3RD"
};

const myFirebase = firebase.initializeApp(firebaseConfig);

export default myFirebase