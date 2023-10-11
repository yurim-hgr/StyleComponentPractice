import styled ,{keyframes} from "styled-components";
import Circle from "./Circle";
import { useState } from "react";



function App() {
  const Container=  styled.div`
    background-color: ${prop=> prop.theme.bgColor};
  `;

  const Title = styled.h1`
    color: ${props => props.theme.textColor};
  `
  return (
    <Container>
      <Title>hi</Title>
    </Container>
  );
}
export default App;