import React, { Component } from "react";
import Header from "./layouts/Header";
import styled, { css } from "styled-components";
import { Heading, Button, CancelButton } from "./elements";
import GlobalStyle from "./Global";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Heading>Header</Heading>
        <Button>Save</Button>
        <CancelButton top={200} type="cancel">
          Cancel
        </CancelButton>
        <GlobalStyle />
      </div>
    );
  }
}

export default App;
