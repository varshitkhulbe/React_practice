import React,{useState} from 'react'

function Colorpicker() {
    const [color,setColor]=useState("#FFFFFF");
    const handlecolor=(event)=>
    {
        setColor(event.target.value);
    }
  return (
    <div className="color-picker-container">
        <h1>Color Picker</h1>
        <div className="color-display" style={{backgroundColor:color}}>
            <p>Selected color: {color}</p>
        </div>
        <label>Select a color:</label>
        <input type="color" value={color} onChange={handlecolor}></input>
    </div>
  )
}

export default Colorpicker