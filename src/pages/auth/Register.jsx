import React, { useState } from 'react'
import cl from './Register.module.css'

export default function Register() {
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
    e.preventDefault(); // Предотвращаем перезагрузку страницы

    if (formData.password !== formData.confirmPassword) {
      console.error('Пароли не совпадают');
      return; // Останавливаем выполнение, если пароли не совпадают
    }

    try {
      // Отправляем POST-запрос на сервер с данными формы
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST', // Устанавливаем метод запроса как POST для создания нового пользователя
        headers: {
          'Content-Type': 'application/json' // Указываем, что данные будут в формате JSON
        },
        body: JSON.stringify({
          email: formData.email,
          name: formData.name,
          password: formData.password
        })
      })

      if (response.ok) {
        const data = await response.json() // Преобразуем ответ сервера в JSON-формат
        console.log('Пользователь успешно зарегистрирован', data)
      } else {
        console.error('Ошибка при регистрации')
      }
    } catch (error) {
      console.error('Произошла ошибка', error) // Обрабатываем возможные ошибки сети
    }
  }

  return (
    <div className={cl.registerForm}>
      <h2 className={cl.formTitle}>Регистрация</h2>
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
    </div>
  )
}
