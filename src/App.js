import React from 'react';
// import logo from './logo.svg';
import profileImage from './img/headshot.jpg';   //importing image to be used on webpage
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> My Personal Portfolio </h1>
      <h2> Rachel Tieu </h2>
      <img src={profileImage} alt="profile-image" />
    </div>

  );
}

export default App;
