import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext'


const Navbar = ({url}:any) => {
    const activestyle = 'm-2 text-black'
    const normalStyle = 'm-2 text-gray-500'
    const { openCart, cartQuantity } = useShoppingCart()
 
    return (
        <div className='bg-white sticky  mb-3 p-3 w-full drop-shadow-md xl:text-xl h-16 flex items-center justify-between'>
            <div>
                <NavLink className={url === '/' ? activestyle : normalStyle} to={'/'}>
                    Home
                </NavLink>
                <NavLink  className={url === '/store' ? activestyle : normalStyle} to={'/store'}>
                    Store
                </NavLink>
                <NavLink className={url === '/about' ? activestyle : normalStyle} to={'/about'}>
                    About
                </NavLink>
            </div>
            {cartQuantity > 0 && (
                <button onClick={openCart} className='rounded-full border relative hover:bg-cyan-500 transition-colors h-12 w-12 p-1 flex items-center justify-center'>
                    <img className='w-[90%] h-[90%]' src="https://cdn-icons-png.flaticon.com/512/891/891462.png" alt="cart-img" />
                    <div className='rounded-full flex justify-center items-center translate-x-1 -translate-y-1 bg-red-600 absolute w-5 h-5 text-white sm:right-0 sm:top-0'>
                        {cartQuantity}
                    </div>
                </button>
            )}
        </div>
    )
}

export default Navbar