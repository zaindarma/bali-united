import React from 'react'

const Input = ({ name, type, id, placeholder}) => {
  return (
    <input
    className="text-sm border rounded py-2 px-3 text-slate-700 placeholder:text-slate-400 w-1/2"
    type={type}
    name={name}
    id={id}
    placeholder={placeholder} 
    />
  )
}

export default Input