import React from 'react'
import style from './CompareItem.module.css'
import Titles from '../Titles/Titles'
import Fields from '../Fields/Fields'

const CompareItem = props => {
    const starship = { ...props.starship }
    const notNeededFields = [
        'created',
        'edited',
        'url',
        'id',
        'color',
        'isCompared'
    ]

    for (const title in starship) {
        if (starship.hasOwnProperty(title)) {
            if (notNeededFields.includes(title)) {
                delete starship[title]
            }
        }
    }

    return (
        <div className={style.item}>
            {props.fieldsTitles && <Titles titles={Object.keys(starship)} />}
            <Fields fields={Object.values(starship)} />
        </div>
    )
}

export default CompareItem
