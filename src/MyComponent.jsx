import React,{useState} from 'react';
function MyComponent()
{ 
   const [name,setName]=useState("Lalit");
   const [age,setAge]=useState(0);
   const [isEmployed,setIsEmployed]=useState(false);
   const handleClick=()=>
   {
    setName("Bob");
   }
   const updateAge=()=>
   {
    setAge(age+1);
   }
   const updateisEmployed=()=>
   {
     setIsEmployed(!isEmployed);
   }
  return(
    <div>
        <p>Name:{name}</p>
        <button onClick={handleClick}>Click Me</button>

        <p>Age:{age}</p>
        <button onClick={updateAge}>Increament Age</button>

        <p>Employed:{isEmployed ? 'yes' : 'no'}</p>
        <button onClick={updateisEmployed}>Toggle Employment</button>
    </div>
  )
}
export default MyComponent;