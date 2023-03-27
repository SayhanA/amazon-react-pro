import React from 'react';

const Cart = (props) => {
    // console.log(props.cart)
    const {id, name, img, seller,price,ratings} = props.cart;
    return (
        <div className=' h-[560px]'>
            <div className="card bg-base-100 shadow-xl h-full relative">
                <img className='w-[100%] p-3' src={img} alt="Shoes" />
                <div className="my-5 mx-7 flex flex-col relative h-full">
                    <div>
                        <h2 className='text-xl font-semibold'>{name}</h2>
                        <p className='py-3 font-semibold'>Price : ${price}</p>
                    </div>
                    <div className='absolute bottom-11 '>
                        <p className='text-[15px]'>Manufacturer : {seller}</p>
                        <p className='text-[15px]'>Rating : {ratings}</p>
                    </div>
                </div>
                <div className="absolute bottom-0 w-full">
                    <button className="btn bg-[#FFE0B3] text-black border-[#95A0A7] w-full rounded-t-none">
                        Buy Now 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>

                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;