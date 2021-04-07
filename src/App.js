import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Game from './components/Game';
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'waldo-app-d65d4.firebaseapp.com',
  projectId: 'waldo-app-d65d4',
  storageBucket: 'waldo-app-d65d4.appspot.com',
  messagingSenderId: '38535726111',
  appId: '1:38535726111:web:b2a4d256aa028d68fd812a',
  measurementId: 'G-0DEN6XD1S7',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={() => <Game db={db} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
