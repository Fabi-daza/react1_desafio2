import React from 'react'
import "./Alert.css"

const Alert = ({mensaje, color}) => {
  return (
    <div className= {color}>
        {mensaje}
    </div>
  )
}

export default Alert