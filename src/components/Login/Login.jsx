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
        <input type="email" placeholder='Ingresa tu email' name="" id="" onChange={getEmail}/>
        <input type="password" placeholder='******' name="" id="" onChange={getPassword} />
        <button type="submit" disabled={!email.trim() || !password.trim()}>Submit</button>
    </form>
  )
}

export default Login