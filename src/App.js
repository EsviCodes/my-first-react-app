// IMPORTS
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <main>
        <Title content="Some Simple Title" />
      </main>

      <header className="App-header">
        <h2>Esvi Codes checks in to learn...</h2>
        <p>React!</p>
      </header>
    </div>
  );
}
export default App;
