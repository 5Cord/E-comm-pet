import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Menu from '../components/menu/Menu'
import Cart from '../pages/Cart'
import Products from '../pages/Products'
import Product from '../pages/Product'

export default function Routing() {
    return (
        <>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </>
    )
}
