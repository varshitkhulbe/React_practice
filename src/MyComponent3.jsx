import React,{useState} from 'react'

function MyComponent3() {
  const [car,setcar]=useState({year:2004,make:"Ford",model:"Mustang"});
  const handleYear=(event)=>{
    setcar(c=>({...c,year:event.target.value}))
  }
  const handleMake=(event)=>{
    setcar(c=>({...c,make:event.target.value}))
  }
  const handleModel=(event)=>{
    setcar(c=>({...c,model:event.target.value}))
  }
  return (
    <div> 
         <p>Your Favorite car is: {car.year} {car.make} {car.model}</p>
         <input type="number" value={car.year} onChange={handleYear}></input><br/>
         <input type="text"  value={car.make} onChange={handleMake}></input><br/>
         <input type="text" value={car.model} onChange={handleModel}></input>
    </div>
  )
}

export default MyComponent3;