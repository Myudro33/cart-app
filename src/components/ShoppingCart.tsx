import { useShoppingCart } from '../context/ShoppingCartContext'
import { OffCanvas, OffCanvasMenu } from "react-offcanvas";
import { BiExit } from 'react-icons/bi'
import CartItem from './CartItem';
import { formatCurrency } from '../utilities/formatCurrency';
import storeItems from '../data/items.json'

type ShoppingCartProps = {
    isOpen: boolean
    setIsOpen: Function
}



const ShoppingCart = ({ isOpen, setIsOpen }: ShoppingCartProps) => {
    const { closeCart, cartItems } = useShoppingCart()

    const size = window.innerWidth

    return (
        <OffCanvas
            width={size > 800 ? 550 : size}
            transitionDuration={300}
            isMenuOpened={isOpen || undefined}
            position={"right"}
            effect={"push"}
        >
            <OffCanvasMenu className='h-full bg-white shadow-2xl flex p-3 flex-col'>
                <div className='flex justify-between items-center h-14 w-full'>
                    <h1 className='text-4xl '>Cart</h1>
                    <BiExit onClick={() => { setIsOpen(false) }} color='black' className='text-3xl cursor-pointer hover:scale-95' />
                </div>
                <div>
                    {cartItems.map(item => (
                        <CartItem key={item.id} {...item} />
                    ))}
                </div>
                <div className='flex justify-end font-bold'>
                    Total:{' '}
                    {formatCurrency(cartItems.reduce((total, cartItem) => {
                        const item = storeItems.find((i: { id: number; }) => i.id === cartItem.id)
                        return total + (item?.price || 0) * cartItem.quantity
                    }, 0)
                    )}
                </div>
            </OffCanvasMenu>
        </OffCanvas>
    )
}

export default ShoppingCart