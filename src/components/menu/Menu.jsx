import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cl from './Menu.module.css';

export default function Menu() {
    const [statusMenu, setstatusMenuenu] = useState(false);

    const handleMenu = () => {
        setstatusMenuenu(!statusMenu);
    };

    return (
        <>
            <button 
                onClick={handleMenu} 
                className={`${cl.burgerButton} ${statusMenu ? cl.burgerButtonActive : ''}`}
            >
                <div className={cl.burgerIcon}></div>
                <div className={cl.burgerIcon}></div>
                <div className={cl.burgerIcon}></div>
            </button>
            <nav className={`${cl.navigation} ${statusMenu ? cl.navigationActive : ''}`}>
                <Link to="/">Главная</Link>
                <Link to="/products">Продукты</Link>
                <Link to="/cart">Корзина</Link>
                <Link to="/register">Регистрация</Link>
            </nav>
        </>
    );
}
