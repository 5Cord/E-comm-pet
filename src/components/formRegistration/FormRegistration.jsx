import React, { useState } from 'react'
import bcrypt from 'bcryptjs';
import cl from './Register.module.css'


export default function FormRegistration() {

    const [formData, setFormData] = useState({
        email: '',
        name: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            console.error('Пароли не совпадают');
            return;
        }

        try {
            const emailCheckResponse = await fetch(`http://localhost:3000/users?email=${formData.email}`);
            const existingUsers = await emailCheckResponse.json();

            if (existingUsers.length > 0) {
                alert('Этот email уже зарегистрирован');
                return; // Останавливаем регистрацию, если email уже существует
            }
            const hashedPassword = await bcrypt.hash(formData.password, 10);
            const response = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    name: formData.name,
                    password: hashedPassword,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                alert('Пользователь успешно зарегистрирован', data);
                setFormData({
                    email: '',
                    name: '',
                    password: '',
                    confirmPassword: '',
                });
            } else {
                console.error('Ошибка при регистрации');
            }
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
                <label htmlFor="name" className={cl.formLabel}>Имя</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={cl.formInput}
                    placeholder="Введите ваше имя"
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

            <div className={cl.formGroup}>
                <label htmlFor="confirmPassword" className={cl.formLabel}>Повторите пароль</label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={cl.formInput}
                    placeholder="Повторите пароль"
                    required
                />
            </div>

            <button type="submit" className={cl.submitButton}>Зарегистрироваться</button>
        </form>
    )
}
