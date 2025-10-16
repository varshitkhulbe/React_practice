import React,{useState} from 'react';
function MyComponent2(){
   const [name,setName]=useState("");
   const [quantity,setQuantity]=useState(0);
   const [comment,setComment]=useState("");
   const [paymentMethod,setpaymentMethod]=useState("");
   const [shippingMethod,setshippingMethod]=useState("");
   const handleInput=(event)=>
   {
    setName(event.target.value);
   }
   const handleQuantity=(event)=>
   {
    setQuantity(event.target.value);
   }
   const handleComment=(event)=>
   {
    setComment(event.target.value);
   }
      const handlePayment=(event)=>
   {
    setpaymentMethod(event.target.value);
   }
    const handleshippingMethod=(event)=>
    {
        setshippingMethod(event.target.value);
    }
   return(<div>
    <input value={name} onChange={handleInput}></input>
    <p>Name:{name}</p>

    <input value={quantity} onChange={handleQuantity} type='number'></input>
    <p>Quantity:{quantity}</p>

    <textarea value={comment} onChange={handleComment} placeholder='Enter the Delivery Address'></textarea>
    <p>Comment:{comment}</p>

    <select value={paymentMethod} onChange={handlePayment}>
    <option value="">Select Payment Method</option>
    <option value="visa">Visa</option>
    <option value="Mastercard">MasterCard</option>
    <option value="Giftcard">GiftCard</option>
    </select>
    <p>Payment Method:{paymentMethod}</p>

    <label>
        <input type="radio" value="pickup" checked={shippingMethod=="pickup"} onChange={handleshippingMethod}></input>
        pickup
    </label><br/>
        <label>
        <input type="radio" value="delivery" checked={shippingMethod=="delivery"} onChange={handleshippingMethod}></input>
        delivery
    </label>
    <p>shipping:{shippingMethod}</p>
   </div>)
}
export default MyComponent2;