import React, { useState } from 'react'
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from '../utilities/formatCurrency'



type StoreItemProps = {
  id: number,
  name: string,
  price: number,
  imgUrl: string
}

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart
  } = useShoppingCart()
  const quantity = getItemQuantity(id)
  return (
    <div className='sm:w-[90%] md:w-80 m-5 p-2 h-[350px] rounded-md shadow-md bg-orange-600 flex flex-col justify-center items-center'>
      <img src={imgUrl} className='h-52 w-full object-cover rounded-md' alt="img not exist" />
      <span className='flex justify-between w-full'><h1 className='text-2xl'>{name}</h1><p className='text-xl font-bold text-gray-600'>{formatCurrency(price)}</p></span>
      {quantity === 0 ? (
        <div className='h-[100px] w-full'>
          <button onClick={() => increaseCartQuantity(id)} className='bg-cyan-500 rounded-sm w-full h-12 text-white md:text-2xl mt-3 mb-3'>+ Add To Cart</button>
        </div>
      ) : (
        <div className='flex flex-col h-[100px]'>
          <div className='flex items-center'>
            <button onClick={() => decreaseCartQuantity(id)} className='p-1 w-8 rounded-sm text-white font-bold bg-cyan-500'>-</button>
            <span>{quantity}</span>in cart
            <button onClick={() => increaseCartQuantity(id)} className='p-1 w-8 rounded-sm text-white font-bold bg-cyan-500'>+</button>
          </div>
          <button onClick={() => removeFromCart(id)} className='text-white mt-3 rounded-sm mb-3 bg-red-600 md:text-2xl'>Remove</button>
        </div>
      )}
    </div>
  )
}

export default StoreItem