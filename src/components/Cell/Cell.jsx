import React from 'react'
import style from './Cell.module.css'

const Cell = ({ row, content }) => {
    return (
        <div className={`cell ${style.cell}`} data-row={row}>
            {content}
        </div>
    )
}

export default Cell
