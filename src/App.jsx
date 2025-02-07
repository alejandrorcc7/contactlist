import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ShoppingCart from './pages/ShoppingCart'
import Menu from './components/Menu'
import ShoppingCartProvider from './context/ShoppingCartProvider'
import injectContext from './store/AppContext'

const App = () => {
    return (
        <ShoppingCartProvider>
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path='/cart' element={<ShoppingCart />} />
                    <Route path='/' element={<Home />} />
                </Routes>
            </BrowserRouter>
        </ShoppingCartProvider>
    )
}

export default injectContext(App)