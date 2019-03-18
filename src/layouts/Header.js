import React, { Component } from "react";
import logo from "../logo.svg";
import styled from "styled-components";
import { purple } from "../utilties";
import { Elevation } from "../utilties";

export default class Header extends Component {
  render() {
    return (
      <AppHeader>
        <img src={logo} alt="logo" className="logo" />
      </AppHeader>
    );
  }
}

const AppHeader = styled.header`
  background: ${purple};
  ${Elevation[2]}
  padding: 10px;
  .logo {
    width: 60px;
  }
`;
