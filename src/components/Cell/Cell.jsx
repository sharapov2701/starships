import React from 'react'
import style from './Cell.module.css'

const Cell = props => {
    return (
        <div
            className={`cell ${style.cell}`}
            data-row={props.row}
            style={props.style}
        >
            {props.content}
        </div>
    )
}

export default Cell
