import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CompareItem from '../CompareItem/CompareItem'
import style from './Compare.module.css'

const Compare = () => {
    const ships = useSelector(state => state.starships)
    const comparedShips = ships.filter(s => s.isCompared)
    const shipItems = ships.map((s, index) => (
        <CompareItem
            starship={s}
            showTitle={index === 0 ? true : false}
            key={index}
        />
    ))

    useEffect(resize, [])

    return (
        <div className={style.items}>
            {comparedShips.length > 1 ? (
                shipItems
            ) : (
                <h1>Choose at least 2 starsheeps to compare</h1>
            )}
        </div>
    )
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
