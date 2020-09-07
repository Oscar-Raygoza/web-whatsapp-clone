import React from "react";
import "./global.scss";
import "./styles/App.scss";

import Slidebar from "./components/Slidebar";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="App">
      <div className="app__body">
        <Slidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
