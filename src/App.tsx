import styled ,{keyframes} from "styled-components";
import Circle from "./Circle";
import { useState } from "react";



function App() {
  const [value, setValue] = useState("");
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {currentTarget : {value}} = e;
    console.log(value)
    setValue(value);
  }

  const onSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("hello"+ value)
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="username" onChange={onChange} value={value}>
        </input>
        <button>Login</button>
      </form>
    </>
  );
}
export default App;