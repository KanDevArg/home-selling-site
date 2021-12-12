import React from 'react';
import logo from './logo.svg';
import './App.scss';
import UniversalSearch from "./components/universal-search/universal-search";

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <UniversalSearch/>
            <img src={logo} className="App-logo" alt="logo" />
        </header>
    </div>
  );
}

export default App;
