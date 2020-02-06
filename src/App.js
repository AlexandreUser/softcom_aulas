import React from "react";
import "./App.css";
import Header, { Text, Logo } from "../src/components/FrontEndComponents";
function App() {
  return (
    <div className="App">
      <Header text={Text} logo={Logo} />
    </div>
  );
}

export default App;
