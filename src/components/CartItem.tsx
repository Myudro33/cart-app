import React from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext'
import StoreItem from '../data/items.json'
import { formatCurrency } from '../utilities/formatCurrency'
import { AiOutlineDelete } from 'react-icons/ai'
type CartItemProps = {
    id: number
    quantity: number
}

const CartItem = ({ id, quantity }: CartItemProps) => {
    const { removeFromCart } = useShoppingCart()
    const item = StoreItem.find(i => i.id === id)

    if (item === null) return null

    return (
        <div className='flex shadow-md justify-between  items-center my-5 '>
            <div className='flex items-center sm:w-[70%] xl:w-[60%]  justify-between'>
                <img className='xl:w-44 sm:w-32  h-28 object-cover' src={item?.imgUrl} alt='img' />
                <div className='h-full w-24'>
                    <span className='flex text-gray-500 text-xs items-center'><p className='text-black text-xl mr-1'>{item?.name}</p>{`X${quantity}`}</span>
                    <h1 className='text-gray-500'>{`$${item?.price}`}</h1>
                </div>
            </div>
            <div className='flex items-center justify-evenly  h-full w-[30%]'>
                <div>
                    {item && (
                        <h1>{`$${item.price * quantity}`}</h1>
                    )}
                </div>
                <div>
                    {item && (
                        <AiOutlineDelete onClick={() => removeFromCart(item.id)} className='cursor-pointer text-2xl hover:scale-90' />
                    )}
                </div>
            </div>
        </div>
    )
}

export default CartItem