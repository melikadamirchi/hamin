import React from 'react'
import { useState } from 'react'
import FunForm2 from './Components/FunForm2';

function Form2() {
    const [name,setName]=useState("")
  return (
    <div><form action="" onSubmit={FunForm2}>
        <label htmlFor="txt">Name:</label>
        <input type="text" id='txt' value={name} onChange={(e)=>setName(e.target.value)} />
        <input type="submit" name="" id="" />
        </form></div>
  )
}

export default Form2