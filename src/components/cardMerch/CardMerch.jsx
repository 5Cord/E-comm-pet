import React from 'react'
import cl from './CardMerch.module.css'

export default function CardMerch() {
    return (
        <>
            {/* Карточка для Мерча по играм */}
            <div className={cl.card}>
                <img className={cl.card_image} src="https://tiermaker.com/images/templates/esports-team-jerseys-358803/3588031624813415.png" alt="Мерч" />
                <div className={cl.card_content}>
                    <h2 className={cl.card_title}>Мерч</h2>
                    <span className={cl.merch_type}>Мерч</span>
                    <ul className={cl.pc_specs}>
                        <li><strong>Тип:</strong> Футболка</li>
                        <li><strong>Материал:</strong> 100% хлопок</li>
                        <li><strong>Размеры:</strong> S, M, L, XL</li>
                        <li><strong>Дизайн:</strong> Принт на тему игры</li>
                    </ul>
                    <button className={cl.buy_button}>В корзину</button>
                </div>
            </div>
        </>
    )
}
