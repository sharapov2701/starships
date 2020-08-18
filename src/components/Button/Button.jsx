import React from 'react'
import style from './Button.module.css'

const Button = ({ onClick, text }) => {
    return (
        <button onClick={onClick} className={style.compare}>
            {text}
        </button>
    )
}

export default Button
