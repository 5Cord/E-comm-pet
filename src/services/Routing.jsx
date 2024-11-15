import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Menu from '../components/menu/Menu'
import Cart from '../pages/Cart'
import Products from '../pages/products/Products'
import Product from '../pages/Product'
import Register from '../pages/register/Register'
import Authorize from '../pages/authorize/Authorize'

export default function Routing() {
    return (
        <>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/register" element={<Register />} />
                <Route path="/authorize" element={<Authorize />} />
            </Routes>
        </>
    )
}
