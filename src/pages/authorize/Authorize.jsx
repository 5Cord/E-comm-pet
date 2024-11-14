import React, { useState } from 'react';
import cl from './Authorize.module.css';
import FromAuth from '../../components/fromAuth/fromAuth';

export default function Authorize() {


    return (
        <div className={cl.registerForm}>
            <h2 className={cl.formTitle}>Авторизация</h2>
            <FromAuth />
        </div>
    );
}
