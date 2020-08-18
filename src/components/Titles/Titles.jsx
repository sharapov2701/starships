import React from 'react'
import style from './Titles.module.css'
import Cell from '../Cell/Cell'

const Titles = ({ titles }) => {
    return (
        <div className={style.titles}>
            {titles.map((title, row) => (
                <Cell row={row} content={formatTitle(title)} />
            ))}
        </div>
    )
}

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1)
const formatTitle = title => capitalize(title.replace(/_/g, ' '))

export default Titles
