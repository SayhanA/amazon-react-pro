import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Body.css'

const Body = () => {
    const [carts, setCarts] = useState([])
    useEffect( () => {
        fetch('./file.json')
        .then(res => res.json())
        .then( data => setCarts(data))
    } ,[])
    return (
        <div className='container'>
            <div className=' grid grid-cols-3 gap-5 m-20'>
                {
                    carts.map( cart => <Cart cart={cart} key={carts.indexOf(cart)}></Cart>)
                }
            </div>
            <div className='border-2 bg-orange-300 relative'>
                <div className='fixed w-[22%]'>
                <h2 className='my-5 text-center text-2xl font-bold'>Order Summary</h2>
                </div>
            </div>
        </div>
    );
};

export default Body;