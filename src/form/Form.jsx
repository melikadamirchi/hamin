import { useState } from 'react'
import ReactDOM from 'react-dom/client'

function Form() {
    const [name, setName] = useState("");

    return (
      <form>
        <label>Enter your name:
          <input
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </form>
    )
  }

export default Form