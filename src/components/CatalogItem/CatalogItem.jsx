import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleCompare } from '../../redux/actions'
import style from './CatalogItem.module.css'
import Button from '../Button/Button'

const CatalogItem = ({ starship }) => {
    const dispatch = useDispatch()
    const text = starship.isCompared
        ? 'Удалить из сранения'
        : 'Добавить к сравнению'

    return (
        <div className={style.item}>
            <div className={style.title} style={{ background: starship.color }}>
                <span className={style.name}>{starship.name}</span>
            </div>
            <div className={style.manufacturer}>{starship.manufacturer}</div>
            <div className={style.model}>{starship.model}</div>
            <div className={style.cost}>
                {formatPrice(starship.cost_in_credits)}
            </div>
            <Button
                onClick={() => dispatch(toggleCompare(starship.id))}
                text={text}
            />
        </div>
    )
}

const formatPrice = price => {
    if (isNaN(+price)) {
        return price
    }
    let result = ''
    let counter = 0
    for (let i = price.length - 1; i >= 0; i--) {
        counter++
        result += price[i]
        if (counter === 3) {
            result += ' '
            counter = 0
        }
    }
    return `${result.split('').reverse().join('')} $`
}

export default CatalogItem
