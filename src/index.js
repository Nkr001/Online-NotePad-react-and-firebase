import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');

require('firebase/firestore')
var firebaseConfig = {
  apiKey: "AIzaSyCJQVabjNA8lrRQswtncpculOO4OvFBcl0",
  authDomain: "notepad-284cc.firebaseapp.com",
  databaseURL: "https://notepad-284cc.firebaseio.com",
  projectId: "notepad-284cc",
  storageBucket: "notepad-284cc.appspot.com",
  messagingSenderId: "773454369310",
  appId: "1:773454369310:web:afbf93b9fc255cfb01d40f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
