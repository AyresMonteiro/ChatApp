import React from 'react';

import logo from './logo.svg';
import Chat from './components/Chat';
import './App.css';

function App() {
  return (
    <div className="Everything">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Made with React. :)
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
      <Chat />
    </div>
  );
}

export default App;
