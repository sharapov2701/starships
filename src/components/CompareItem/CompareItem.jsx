import React from 'react'
import style from './CompareItem.module.css'
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
            <Fields starship={starship} fieldsTitles={props.fieldsTitles} />
        </div>
    )
}

export default CompareItem
