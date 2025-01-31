import React from 'react'

const Button = ({btn ,className}) => {
  return (
    <>
     <button className={`rounded-br-2xl rounded-tl-2xl p-1 ${className}`}>{btn}</button> 
    </>
  )
}

export default Button
