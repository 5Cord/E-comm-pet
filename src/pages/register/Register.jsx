import React, { useState } from 'react'
import cl from './Register.module.css'
import FormRegistration from '../../components/formRegistration/FormRegistration';


export default function Register() {

  return (
    <div className={cl.registerForm}>
      <h2 className={cl.formTitle}>Регистрация</h2>
      <FormRegistration />
    </div>
  )
}
