"use client"
import { useState } from "react";


const CounterPage = () => {
    const [number , setNumber] = useState(0)

    return (
        <div>
            <h2>increment : {number}</h2>
            <button className='btn btn-accent' onClick={()=> setNumber(number+1)}>inc +</button>
        </div>
    );
};

export default CounterPage;