import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";

import StyledTreeExample from "./StyledTreeExample";

const Title = styled.h2`
  margin-top: 5rem;
  :first-of-type {
    margin-top: 0;
  }
`;

function App() {
  return (
    <div style={{ textAlign: "center", minWidth: '1200px' }}>
      <Title>Styled tree</Title>
      <StyledTreeExample />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
