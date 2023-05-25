import React from 'react'
import './Login.css'
import { useState } from 'react'
const Login = ({setAlerta}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const getEmail = (event) =>{
        setEmail(event.target.value)
    }
    const getPassword = (event) =>{
        setPassword(event.target.value)
    }
    const validateLogin = (event) => {
        event.preventDefault()
        if (
            email === "alumno@desafiolatam.cl" &&
            password === "123456") {
            setAlerta({message: "Ingreso Exitoso, Bienvenido", color: "azul"})}
        else(
            setAlerta({message: "Email o contraseña incorrecto", color:"rojo"})
        )
    }
  return (
    <form className='Formulario' onSubmit={validateLogin}>
        <h2>Ingresa con tu email y contraseña</h2>
        <div className="inputrow">
            <img width="18" height="18" src="https://img.icons8.com/ios-filled/50/gender-neutral-user.png" alt="gender-neutral-user"/>
            <input type="email" placeholder='Ingresa tu email' name="" id="" onChange={getEmail}/></div>
        <div className="inputrow">
            <img width="18" height="18" src="https://img.icons8.com/material-rounded/24/lock--v1.png" alt="lock--v1"/>            
            <input type="password" placeholder='******' name="" id="" onChange={getPassword} /></div>
        <button type="submit" disabled={!email.trim() || !password.trim()}>Submit</button>
    </form>
  )
}

export default Login