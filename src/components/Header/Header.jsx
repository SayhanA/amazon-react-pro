import React from 'react';

const Header = () => {
    return (
        <div className='bg-[#1C2B35] h-[80px] text-white px-24 flex justify-between items-center'>
            <img src="/public/Logo.svg" alt="" />
            <div className='flex gap-7 '>
                <a className='hover:text-yellow-500' href="/Order">Order</a>
                <a className='hover:text-yellow-500' href="/Order Review">Order Review</a>
                <a className='hover:text-yellow-500' href="/Manage Inventory">Manage Inventory</a>
                <a className='hover:text-yellow-500' href="/Login">Login</a>
            </div>
        </div>
    );
};

export default Header;