import React from "react";
import fetchRequest from "./routes";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = React.useState("Learn React");

  const handleClick = async () => {
    const res = await fetchRequest();
    setData(res.body);
  };
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
          {data}
        </a>
        <div>
          <button onClick={handleClick}> Click Me! </button>
        </div>
      </header>
    </div>
  );
}

export default App;
