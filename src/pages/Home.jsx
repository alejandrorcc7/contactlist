import React, { useContext, useState } from 'react'
import CartContext from '../context/CartContext'
import { Context } from '../store/AppContext'

const Home = () => {

    const { store } = useContext(Context)
    const { addCart } = useContext(CartContext)

    const [products, setProducts] = useState([
        { id: 1, nombre: 'Item 1', precio: 100 },
        { id: 2, nombre: 'Item 2', precio: 50 },
        { id: 3, nombre: 'Item 3', precio: 20 },
        { id: 4, nombre: 'Item 4', precio: 80 },
        { id: 5, nombre: 'Item 5', precio: 100 },
        { id: 6, nombre: 'Item 6', precio: 90 },
        { id: 7, nombre: 'Item 7', precio: 10 },
        { id: 8, nombre: 'Item 8', precio: 60 },
        { id: 9, nombre: 'Item 9', precio: 40 },
    ])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <p>Bienvenido {store?.currentUser?.email}</p>
                </div>
            </div>
            <div className="row">
                {
                    products.map((p) => {
                        return (
                            <div className="col-md-4" key={p.id}>
                                <div className="card my-2">
                                    <div className="card-body">
                                        <h4 className="card-title">{p.nombre}</h4>
                                        <p className='card-text'>${p.precio}</p>
                                        <button className="btn btn-primary" onClick={() => addCart({ id: p.id, cantidad: 1, precio: p.precio })}>
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home