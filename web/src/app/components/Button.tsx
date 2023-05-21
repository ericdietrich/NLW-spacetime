import React from 'react'

interface ButtonProps {
  title: String
}

const Button = (props: ButtonProps) => {
  return (
    <p>{props.title}</p>
  )
}

export default Button