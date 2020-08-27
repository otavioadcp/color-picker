import React from "react";
import ReactDOM from "react-dom";
import ColorPicker from "./ColorPicker";
import { GlobalStyle } from "./GlobalStyle";
import styled from "styled-components";

const AppWrapper = styled.div`
  height: 100vh;
  display: grid;
  align-items: center;
  justify-items: center;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <ColorPicker />
      </AppWrapper>
    </>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
