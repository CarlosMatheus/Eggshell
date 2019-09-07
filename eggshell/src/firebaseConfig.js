import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCB_DXLxA43cLwbSfLQjZFnev3nOU5DLg4",
    authDomain: "eggshell-ffe2b.firebaseapp.com",
    databaseURL: "https://eggshell-ffe2b.firebaseio.com",
    projectId: "eggshell-ffe2b",
    storageBucket: "eggshell-ffe2b.appspot.com",
    messagingSenderId: "919797288773",
    appId: "1:919797288773:web:4f240d2e0a30c27acb382c"
  };

  export const firebaseImpl = firebase.initializeApp(config);
  export const firebaseDatabase = firebase.database();