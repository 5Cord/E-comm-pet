import React, { useState } from 'react'
import cl from './formAuth.module.css'
import bcrypt from 'bcryptjs'; // Если пароли хэшированы

export default function FromAuth() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Проверка email на сервере
            const response = await fetch(`http://localhost:3000/users?email=${formData.email}`);
            const users = await response.json();

            if (users.length === 0) {
                alert('Пользователь с таким email не найден');
                return;
            }

            const user = users[0]; // Получаем первого пользователя с совпадающим email

            // Проверка пароля, если пароли хранятся в хэшированном виде
            const passwordMatch = await bcrypt.compare(formData.password, user.password);
            if (!passwordMatch) {
                alert('Неверный пароль');
                return;
            }

            if (response.ok) {
                setFormData({
                    email: '',
                    name: '',
                    password: '',
                    confirmPassword: '',
                });
            } else {
                console.error('Ошибка авторизации');
            }

            // Сохранение состояния авторизации в localStorage
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('userName', user.name);
            alert(`Добро пожаловать, ${user.name}`);
        } catch (error) {
            console.error('Произошла ошибка', error);
        }
    };
    return (
        <form onSubmit={handleSubmit} className={cl.form}>
            <div className={cl.formGroup}>
                <label htmlFor="email" className={cl.formLabel}>Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={cl.formInput}
                    placeholder="Введите ваш email"
                    required
                />
            </div>

            <div className={cl.formGroup}>
                <label htmlFor="password" className={cl.formLabel}>Пароль</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={cl.formInput}
                    placeholder="Введите пароль"
                    required
                />
            </div>
            <button type="submit" className={cl.submitButton}>Войти</button>
        </form>
    )
}
