import React, { useContext } from 'react'
import CartContext from '../context/CartContext'
import { FaTrash } from 'react-icons/fa'

const ShoppingCart = () => {

    const { cart, removeCart } = useContext(CartContext)

    return (
        <div>
            <ul className="list-group">
                {
                    cart.map((item) => {
                        return (
                            <li className='list-group-item d-flex justify-content-between'>
                                <span>{item.id} ${item.precio}</span>
                                <button className='btn btn-danger btn-sm' onClick={() => removeCart(item)}>
                                    <FaTrash />
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ShoppingCart