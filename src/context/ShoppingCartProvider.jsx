import React, { useState } from 'react'
import CartContext from './CartContext'

const ShoppingCartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addCart = prod => {
        /* 
        prod = {
            id: 1,
            cantidad: 1,
            precio: 100
        }
        */
        setCart((cart) => [...cart.concat(prod)])
    }

    const removeCart = prod => {
        /* 
        prod = {
            id: 1,
            cantidad: 1,
            precio: 100
        }
        */
        setCart((cart) => [...cart.filter((item) => item.id !== prod.id )])
    }

    return (
        <CartContext.Provider value={{ cart, addCart, removeCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default ShoppingCartProvider