import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";

function App() {
  return (
    <>
      <div className="Main-Container-Wrapper">
        <div className="Main-Wrapper">
          <Sidebar />
          <Main />
        </div>
      </div>
    </>
  );
}

export default App;
