import React from 'react';
// import logo from './logo.svg';
import profileImage from './img/headshot.jpg';   //importing image to be used on webpage
import './App.css';

function App() {
  return (
    <div className="App">
      // <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      // </header>
      <h1> My Personal Portfolio </h1>
      <h2> Rachel Tieu </h2>
      <img src={profileImage} alt="profile.image" />
    </div>

  );
}

export default App;
