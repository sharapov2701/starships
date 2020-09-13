import React from 'react'
import Cell from '../Cell/Cell'
import style from './Fields.module.css'

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1)
const formatTitle = title => capitalize(title.replace(/_/g, ' '))

const Fields = ({ starship, showTitle }) => {
    const titles = Object.keys(starship)
    const fields = titles.map((title, row) => {
        let field = starship[title]

        if (Array.isArray(field)) {
            field = field.length ? field.join(', ') : '-'
        }

        return (
            <div className={title === 'name' ? 'compare-header' : ''} key={row}>
                <Cell content={showTitle ? formatTitle(title) : ''} isTitle />
                <Cell row={row} content={field || '-'} />
            </div>
        )
    })

    return <div className={style.fields}>{fields}</div>
}

export default Fields
