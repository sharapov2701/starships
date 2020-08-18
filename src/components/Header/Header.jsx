import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import style from './Header.module.css'
import Button from '../Button/Button'

const Header = props => {
    return (
        <header className={style.header}>
            <NavLink className={style.title} to='/'>
                <h1>Starships</h1>
            </NavLink>
            {props.location.pathname === '/compare/' ? (
                <NavLink to='/'>
                    <Button text='Catalog' />
                </NavLink>
            ) : (
                <NavLink to='/compare/'>
                    <Button text='Compare' />
                </NavLink>
            )}
        </header>
    )
}

export default withRouter(Header)
