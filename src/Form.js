import React, { useState, useEffect } from "react";
import * as yup from "yup"; 
import axios from "axios";





function Form(){
    const [users, setUsers] = useState([]);

    useEffect( () => {
       setUsers( users => [...users])
    }, [])
return(
<form>
    <section>
    <label htmlFor="name">
    Your Name
    <input
      id="name"
      type="text"
      name="name"
    />
    
  </label>
  </section>
  <section>
    <label htmlFor="size">
    Size
    <select is="size" name="size">
        <option value=""> Please Choose Your Size</option>
        <option value="small">Small 10inch</option>
        <option value="medium">Medium 12inch</option>
        <option value="large">Large 14inch</option>
    </select>
    
  </label>
  </section>
  <section>
    <label htmlFor="Toppins">
    Toppings
    <div>
    <input
      type="checkbox"
      name="Toppins"
    />Pepperoni
      <input
      type="checkbox"
      name="Toppins"
    />Green Peppers
    </div>
    <div>
    <input
      type="checkbox"
      name="Toppins"
    />Banana Peppers
      <input
      type="checkbox"
      name="Toppins"
    />Bacon
    </div>
  </label>
  <label>
      Special Instructions
      <div>
      <textArea></textArea>
      </div>
  </label>
  </section>
  <button type="submit">
      Submit your order
  </button>
  {users.map( user => (
    <ul>
      <li>username: {user.name}</li>
      <li>email: {user.size}</li>
      <li>password: {user.Toppins}</li>
    </ul>

   
  ))}  
  </form>
)
}
export default Form