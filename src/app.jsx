import React from "react";

// Import the Home page component
import Home from "./pages/home.jsx";

// Import and apply CSS stylesheet
import "./styles/styles.css";
import "./styles/reset.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jogo dos Dados</h1>
        <span className="header__author">Marcos Capella - SIn - Unicap</span>
      </header>
     <Home />
    </div>
  );
}
