import React, { Component } from "react";
import logo from "../logo.svg";
import styled from "styled-components";
import { purple } from "../utilties";
import { Elevation, fixed, serif } from "../utilties";
export default class Header extends Component {
  render() {
    return (
      <AppHeader>
        <img src={logo} alt="logo" className="logo" />
        <h1>Test</h1>
      </AppHeader>
    );
  }
}

const AppHeader = styled.header`
  background: ${purple};
  ${Elevation[2]}
  padding: 10px;
  width: 100%;
  ${serif}
  ${fixed({ x: 0, y: 0 })}
  .logo {
    width: 60px;
  }
`;
