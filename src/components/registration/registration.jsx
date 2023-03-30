import React from 'react'
import { registration } from '../../actions/user';
import { Input } from '../utilits/InputFormAuth/input';



export const Registration = () => {
  



    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [firstname, setFirstName] = React.useState('')
    const [lastname, setlastname] = React.useState('')

  return (
    <div className="registration">
        <div className="registration_header">Регистрация</div>
        <Input value={email} setValue={setEmail} type='text' placeholder='Введите email....' />
        <Input value={password} setValue={setPassword} type='password' placeholder='Введите пароль....' />
        <Input value={firstname} setValue={setFirstName} type='text' placeholder='Введите firstName....' />
        <Input value={lastname} setValue={setlastname} type='text' placeholder='Введите lastName....' />

        <button className="btn_registration" onClick={() => registration(email, password, firstname, lastname)}>Войти</button>
    </div>
  )
}