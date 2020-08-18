import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Header.module.css'
import Button from '../Button/Button'

const Header = () => {
    return (
        <header className={style.header}>
            <NavLink className={style.title} to='/'>
                <h1>Starships</h1>
            </NavLink>
            <NavLink to='/compare/'>
                <Button text='Сравнить' />
            </NavLink>
        </header>
    )
}

export default Header
