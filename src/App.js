// IMPORTS
import React from "react";
//import logo from "./logo.svg";
import "./App.css";
// import Title from "./components/Title";
// import LightSwitch from "./components/LightSwitch";
import Users from "./components/Users";
import Userboard from "./components/Userboard";
import UserPurpose from "./components/UserPurpose";

function App() {
  return (
    <div className="App">
      {/* <main>
        <Title content="Some Simple Title" />
        <LightSwitch />
      </main> */}
      <Userboard />
      <Users />
      <UserPurpose />
      <header className="App-header">
        {/* <h2>Esvi Codes checks in to learn...</h2>
        <p>React!</p> */}
      </header>
    </div>
  );
}
export default App;
