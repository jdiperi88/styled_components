import React, { Component } from "react";
import logo from "./logo.svg";
import styled, { css } from "styled-components";
import { Heading, Button, CancelButton } from "./elements";
import GlobalStyle from "./Global";
const Fake = ({ className }) => (
  <div className={className}>
    <h2>I am a fake component</h2>
  </div>
);

const AppWrapper = styled.div`
  header {
    background: teal;
    &:hover {
      background: red;
    }
  }
  ${Button} {
    margin-bottom: 200px;
  }
`;

const DoubleFake = styled(Fake)`
  h2 {
    color: red;
  }
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <header>
          <Heading>Header</Heading>
          <DoubleFake />
          <Button>Save</Button>
          <CancelButton top={200} type="cancel">
            Cancel
          </CancelButton>
        </header>
        <GlobalStyle />
      </AppWrapper>
    );
  }
}

export default App;
