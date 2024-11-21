import { useState } from 'react';
import React from 'react';



export default function MyForm() {
  const [nameError, setNameError] = useState("");

const [ingredients, setingredients ] = useState("");
const [tempIngredients, setTempIngredients] = useState(""); 
 

  

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isNameValid = name_validator(tempIngredients);

  
    if (isNameValid) {
      setingredients(tempIngredients);
      setTempIngredients("");
     
      // Proceed with form submission
      console.log("Form submitted:");
    }
    else{
      console.log("error")
    }
    
   
  }
  
  const name_validator = (value:string) => {
     
    
     const regex = /^\d+$/;
     if(!regex.test(value)){
       setNameError("Ingredients can have only spaces and letters with no numbers or special chars");
   
       return false; 

     }
     else{
      setNameError("")
      return true;
     }
     
    

  };













  return (
    <form onSubmit={handleSubmit}>
      <label>Enter a number:
        <input 
          type="text" 
          value={tempIngredients}
          onChange={(e) => setTempIngredients(e.target.value)}
          
        />
      </label>
      {nameError && <div className="error-message">{nameError}</div>}

      <br></br>
      <button type="submit" style={{ margin: "10px 0" }}>
        Save
      </button>
     
    
      <input type="text" value={ingredients} readOnly />
      
    </form>
    
  )
  
};


// based on example from https://www.w3schools.com/react/react_forms.asp