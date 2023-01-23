import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/counter/Counter";
import { AppProvider } from "./providers/appProvider";
import { MuiMode } from "./components/mui/mui-mode";

function App() {
  return (
    <AppProvider>
      <div className="App">
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        <MuiMode />
        <Counter />
      </div>
    </AppProvider>
  );
}

export default App;
