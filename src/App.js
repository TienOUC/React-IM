// import React, { useState } from 'react';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import useColorSwitch from './hooks/useColorSwitch';


function App () {

  // const [color, setColor] = useState('red')

  // const handleClick = () => {
  //   console.log('this is a button')
  //   setColor('green')
  // }

  const [color, handleClick] = useColorSwitch('red','green')

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button width='500px' onClick={handleClick} label='BUTTON'><p style={{color}}>this is button1</p></Button>
      </header>
    </div>
  );
}

export default App;
