import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

const Heading = styled.h1`
  font-size: 10rem;
`;

const Button = styled.button`
  background: indigo;
  padding: 5px 10px;
  border-radius: 4px;
  color: white;
  font-size: 2rem;
  border: none;
  ${props => props.type === "cancel" && "background: tomato;"}
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading>Header</Heading>
        <Button>Save</Button>
        <Button type="cancel">Cancel</Button>
      </div>
    );
  }
}

export default App;
