import React from 'react'
import style from './Fields.module.css'
import Cell from '../Cell/Cell'

const Fields = ({ fields }) => {
    return (
        <div className={style.fields}>
            {fields.map((field, row) => {
                if (Array.isArray(field)) {
                    field = field.length ? field.join(', ') : '-'
                }
                return <Cell row={row} content={field || '-'} />
            })}
        </div>
    )
}

export default Fields
