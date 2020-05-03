import React from "react";
import Weather from "./Weather";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          Coded by{" "}
          <a href="https://pt.linkedin.com/in/susanavbarbosa" target="_blank">
            SUsana Barbosa{" "}
          </a>{" "}
          and
          <a href="" target="_blank">
            {" "}
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
