import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'

const CartTotal = () => {
    const { getCartAmount, currency, delivery_fee, navigate } = useContext(ShopContext)
    const cartAmount = getCartAmount();
    const totalAmount = cartAmount === 0 ? 0 : cartAmount + delivery_fee;

    return (
        <div className='w-full'>
            <div className='text-2xl'>
                <Title text1={'CART'} text2={'TOTALS'} />
            </div>

            <div className='flex flex-col gap-2 mt-2 text-sm'>
                <div className='flex justify-between'>
                    <p>Subtotal</p>
                    <p>{currency} {cartAmount}.00</p>
                </div>
                <hr />
                {cartAmount !== 0 && (
                    <div className="flex justify-between">
                        <p>Shipping Fee:</p>
                        <p>{currency} {delivery_fee}.00</p>
                    </div>
                )}
                <hr />
                <div className='flex justify-between'>
                    <b>Total: </b>
                    <b>{currency} {totalAmount}.00</b>
                </div>

               
            </div>
        </div>
    )
}

export default CartTotal
