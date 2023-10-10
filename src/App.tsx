import styled ,{keyframes} from "styled-components";
const Father = styled.div`
  display: flex;
`;


const rotateAnimation = keyframes`
  0%{
    transform: rotate(0deg);
    border-radius:0px;
  }
  50%{
    border-radius:100px;
  }
  100%{
    transform: rotate(360deg);
    
    border-radius:0px;
  }
`

const Emoji = styled.span`
  font-size: 36px;
  `;

// const Box = styled.div`
//   background-color: ${(props) => props.bgcolor};
//   width: 100px;
//   height: 100px;
//   animation: ${rotateAnimation} 1s linear infinite;
//   display: flex;
//   justify-content: center;
//   align-items: center;
  
//   ${Emoji}:hover {
//     font-size: 55px;
//   }
  
  
  
// `;
// const Circle = styled(Box)`
//   border-radius: 50px;
// `;
const Btn = styled.button`

  background-color: tomato;
  border: 0;
  border-radius : 15px;
  color: white;
  `;

const Input = styled.input.attrs({required:true})`
  background-color: pink;
`

const Title = styled.h1`
  color: ${props => props.theme.textColor};
  `;

const Wrapper = styled.div`
 display: flex;
 height: 100vh;
 width: 100ww;
 justify-content: center;
 align-items: center;
 background-color: ${props => props.theme.backgroundColor};
 `

function App() {
  return (
    <Wrapper>
      
      <Title>Hello</Title>
    </Wrapper>
  );
}
export default App;