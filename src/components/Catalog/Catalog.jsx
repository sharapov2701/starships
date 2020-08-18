import React from 'react'
import { useSelector } from 'react-redux'
import style from './Catalog.module.css'
import CatalogItem from '../CatalogItem/CatalogItem'
import Loader from '../Loader/Loader'

const Catalog = () => {
    const starships = useSelector(state => state.starships)
    const items = starships.map(starship => (
        <CatalogItem starship={{ ...starship }} key={starship.id} />
    ))

    return (
        <main className={style.main}>
            {starships.length ? (
                <div className={style.catalog}>{items}</div>
            ) : (
                <Loader />
            )}
        </main>
    )
}

export default Catalog
