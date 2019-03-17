import React, { Component } from "react";
import logo from "../logo.svg";
import styled from "styled-components";

const Header = ({ className }) => {
  return (
    <Header className={className}>
      <img src={logo} alt="logo" className="logo" />
    </Header>
  );
};

export default styled(Header)`
  background: #524763;
  padding: 10px 5%;
  .logo {
    width: 60px;
  }
`;
