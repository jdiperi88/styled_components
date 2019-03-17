import React, { Component } from "react";
import logo from "./logo.svg";
import styled, { css } from "styled-components";
import GlobalStyle from "./Global";
const sizes = {
  small: 400,
  med: 960,
  large: 1140
};

const above = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

const below = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

const Fake = ({ className }) => (
  <div className={className}>
    <h2>I am a fake component</h2>
  </div>
);

//CSS helper
const fixedTop = css`
  position: fixed;
  top: ${({ top }) => top + "px"};
  left: 0;
`;

const Heading = styled.h1`
  font-size: 10rem;
  ${above.med`
  color:blue`}
`;
const color = "indigo";
const Button = styled.button`
  background: ${color};
  padding: 5px 10px;
  border-radius: 4px;
  color: white;
  font-size: 2rem;
  border: none;
  background: tomato;
`;

const CancelButton = styled(Button)`
  background: purple;
  ${fixedTop}
`;

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
