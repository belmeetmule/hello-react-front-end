import React from 'react';
import { Greeting } from './components/greeting/Greeting';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Welcome to the Greeting App
        </h1>
        <p> You can see random greeting message by clicking the greeting button</p>
        <Greeting />
      </header>
      
    </div>
  );
}

export default App;
