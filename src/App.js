import React, { Component } from "react";
import Header from "./layouts/Header";
import { Heading, Button, Card } from "./elements";
import GlobalStyle from "./Global";
import { ThemeProvider } from "styled-components";
const theme = {
  colors: {
    primary: "#e54b4b",
    secondary: "blue"
  }
};
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Header />
          <main>
            <Heading>Header</Heading>
            <Card>
              <h2>Card Heading</h2>
              <Card.Button>Save</Card.Button>
            </Card>

            <Button modifiers={["small"]}>Cancel</Button>
          </main>
          <GlobalStyle />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
