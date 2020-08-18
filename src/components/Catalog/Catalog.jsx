import React from 'react'
import { useSelector } from 'react-redux'
import style from './Catalog.module.css'
import CatalogItem from '../CatalogItem/CatalogItem'

const Catalog = () => {
    const starships = useSelector(state => state.starships)
    const items = starships.map(starship => (
        <CatalogItem starship={{ ...starship }} key={starship.id} />
    ))

    return <div className={style.catalog}>{items}</div>
}

export default Catalog
