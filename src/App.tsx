import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Dashboard from "./components/dashboard/dashboard";

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <Dashboard/>
            <img src={logo} className="App-logo" alt="logo" />
        </header>
    </div>
  );
}

export default App;
