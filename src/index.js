import React from "react";
import ReactDOM from "react-dom";

function App() {
  return <div>Hi</div>;
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
