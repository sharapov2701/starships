import React from 'react'
import style from './Fields.module.css'
import Cell from '../Cell/Cell'

const Fields = ({ starship, fieldsTitles }) => {
    const titles = Object.keys(starship)
    const fields = titles.map((title, row) => {
        let field = starship[title]
        if (Array.isArray(field)) {
            field = field.length ? field.join(', ') : '-'
        }
        return (
            <div className={title === 'name' ? 'compare-header' : ''} key={row}>
                <Cell
                    content={fieldsTitles ? formatTitle(title) : ''}
                    style={{
                        fontSize: '14px',
                        color: 'rgba(0, 0, 0, 0.5)',
                        position: title === 'name' ? 'sticky' : 'static'
                    }}
                />
                <Cell row={row} content={field || '-'} />
            </div>
        )
    })

    return <div className={style.fields}>{fields}</div>
}

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1)
const formatTitle = title => capitalize(title.replace(/_/g, ' '))

export default Fields
