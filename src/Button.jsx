function button()
{   let count=0;
    // const handleClick=(name)=>{
    //    if(count<3)
    //    {
    //     count++;
    //     console.log(`${name} you clicked ${count} times`);
    //    }
    //    else{
    //     console.log(`${name} stop clicking me`);
    //    }
    // }
    // const handleClick2=(name)=>console.log(`${name} the button is clicked`)
    const handleClick3=(e)=>e.target.textContent="Clicked";
    return (<button className="button" onClick={(e)=>handleClick3(e)}>Click me</button>)
}
export default button;