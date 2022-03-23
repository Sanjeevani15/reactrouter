import React from 'react'
import { useNavigate } from 'react-router-dom';
const OrderSum = () => {
    const navigate=useNavigate();
    return  (
    <>
    <div> Congratulations, your order is Confirmed !!</div>
    {/* <button onClick={()=>navigate('/about')}>BACK to shopping</button> */}   
    <button onClick={()=>navigate(-1)}>BACK to shopping</button>
    </>
    )
}

export default OrderSum
