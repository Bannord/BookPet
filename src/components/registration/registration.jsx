import React from 'react'
import { registration } from '../../actions/user';
import { Input } from '../utilits/InputFormAuth/input';
import './registration.css';


export const Registration = () => {
    const [email, setEmail] = React.useState()
    const [password, setPassword] = React.useState()
  return (
    <div className="registration">
        <div className="registration_header">Регистрация</div>
        <Input value={email} setValue={setEmail} type='text' placeholder='Введите email....' />
        <Input value={password} setValue={setPassword} type='password' placeholder='Введите пароль....' />
        <button className="btn_registration" onClick={() => registration(email, password)}>Войти</button>
    </div>
  )
}
