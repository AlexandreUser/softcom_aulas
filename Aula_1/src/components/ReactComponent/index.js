import React from "react";
import logo from "../../logo.svg";
import "./styles.css";

export default function Header(props) {
  return <div>{props.logo({ text: props.text })}</div>;
}
export function Text() {
  return (
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React Component
    </a>
  );
}
export function Logo(props) {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        I'm a component from
        <code className="coding">./src/components/FrontEndComponents</code> Yay
        .
      </p>
      {props.text()}
    </header>
  );
}
