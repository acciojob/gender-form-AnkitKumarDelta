
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [input, setInput] = useState("")
  const[size, setSize] = useState("");

  function handleInput(e){
    setInput(e.target.value);
    setSize("");
  }

  function handleSize(e){
    setSize(e.target.value);
  }
  return (
    <div>
      <h2>Select your gender:</h2>
      <label>
        <input type="radio" name="gender" value="male" onChange={(e) => handleInput(e)}/>
        Male
      </label>
      <label>
        <input type="radio" name="gender" value="female" onChange={(e) => handleInput(e)} />
        Female
      </label>
      <h2>Select your dress size:</h2>
      {
        input == "male" ? (
          <select value={size} onChange={(e)=>handleSize(e)}>
            <option>Select size</option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        ) : (
          <select value={size} onChange={(e)=>handleSize(e)}>
            <option>Select size</option>
            <option>2</option>
            <option>4</option>
            <option>6</option>
          </select>
        )
      }
    </div>
  )
}

export default App
