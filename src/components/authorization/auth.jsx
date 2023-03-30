import React from 'react'
import { useDispatch } from 'react-redux';

import { Input } from '../utilits/InputFormAuth/input';
import { auth } from '../../actions/user';
import './auth.css';


export const Auth = () => {
  



    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const dispatch = useDispatch()

  return (
    <div className="registration">
        <div className="registration_header">Авторизация</div>
        <Input value={email} setValue={setEmail} type='text' placeholder='Введите email....' />
        <Input value={password} setValue={setPassword} type='password' placeholder='Введите пароль....' />

        <button className="btn_registration" onClick={() => dispatch(auth(email, password))}>Войти</button>
    </div>
  )
}