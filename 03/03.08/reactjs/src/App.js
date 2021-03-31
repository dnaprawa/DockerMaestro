import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ip from 'ip';

function App() {

  const [message, setIpAddress] = useState();

  useEffect(() => {
    let hostIP = ip.address();
    setIpAddress(hostIP);
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello from: {message}
        </p>


      </header>
    </div>
  );
}

export default App;
