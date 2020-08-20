import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import CompareItem from '../CompareItem/CompareItem'
import style from './Compare.module.css'

const Compare = () => {
    const starships = useSelector(state => state.starships)
    const comparedShips = starships.filter(s => s.isCompared)
    const shipItems =
        comparedShips.length > 1 ? (
            comparedShips.map((s, index) => (
                <CompareItem
                    starship={s}
                    fieldsTitles={index === 0 ? true : false}
                    key={index}
                />
            ))
        ) : (
            <h1>Choose at least 2 starsheeps to compare</h1>
        )

    useEffect(resize)

    return <div className={style.items}>{shipItems}</div>
}

const resize = () => {
    const cells = document.querySelectorAll('.cell')
    let heights = {}

    cells.forEach(cell => {
        const row = cell.dataset.row
        heights[row] = heights[row] ? [...heights[row], cell.offsetHeight] : []
    })

    for (const height in heights) {
        if (heights.hasOwnProperty(height)) {
            let element = heights[height]
            heights[height] = Math.max(...element) + 'px'
        }
    }

    cells.forEach(cell => {
        cell.style.height = heights[cell.dataset.row]
    })
}

export default Compare
