import React from 'react'
import cl from './Card.module.css'

export default function CardPC() {
    return (
        <div className={cl.card}>
            <img className={cl.card_image} src="https://boiling-machine.ru/wp-content/uploads/frontpage-computer.webp" alt="ПК" />
            <div className={cl.card_content}>
                <h2 className={cl.card_title}>Серия white</h2>
                <span className={cl.pc_type}>Игровой</span>
                <ul className={cl.pc_specs}>
                    <li><strong>Процессор:</strong> Intel Core i7-12700K</li>
                    <li><strong>Видеокарта:</strong> NVIDIA GeForce RTX 3080</li>
                    <li><strong>Оперативная память:</strong> 32GB DDR4</li>
                    <li><strong>Жесткий диск:</strong> 1TB SSD</li>
                    <li><strong>Охлаждение:</strong> Жидкостное охлаждение</li>
                </ul>
                <button className={cl.buy_button}>В корзину</button>
            </div>
        </div>
    )
}
