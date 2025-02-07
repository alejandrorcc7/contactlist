import React, { useContext } from 'react'
import { FaShoppingBasket } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import CartContext from '../context/CartContext'

const Menu = () => {

    const { cart } = useContext(CartContext)

    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/cart">Cart</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/cart">
                    <FaShoppingBasket /> ({cart.length || 0 })
                </Link>
            </li>
        </ul>
    )
}

export default Menu