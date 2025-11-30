
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [input, setInput] = useState("")

  return (
    <div>
      <h1>Select your gender:</h1>
      <label>
        Male: <input type="radio" name="gender" value="male" onChange={(e) => setInput(e.target.value)} />
      </label>
      <label>
        Female: <input type="radio" name="gender" value="female" onChange={(e) => setInput(e.target.value)} />
      </label>

      <h1>Select your dress size:</h1>
      {
        input == "male" ? (
          <select>
            <option>Select size</option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        ) : (
          <select>
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
