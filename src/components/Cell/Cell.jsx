import React from 'react'
import style from './Cell.module.css'

const Cell = props => {
    return (
        <div
            className={`cell ${style.cell} ${props.isTitle ? style.title : ''}`}
            data-row={props.row}
        >
            {props.content}
        </div>
    )
}

export default Cell
