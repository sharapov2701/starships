import React from 'react'
import { useSelector } from 'react-redux'
import CatalogItem from '../CatalogItem/CatalogItem'
import Loader from '../Loader/Loader'
import style from './Catalog.module.css'

const Catalog = () => {
    const starships = useSelector(state => state.starships)
    const isLoading = useSelector(state => state.isLoading)
    const hasErrored = useSelector(state => state.hasErrored)
    const items = starships?.map(starship => (
        <CatalogItem starship={{ ...starship }} key={starship.id} />
    ))

    return (
        <main className={style.main}>
            {starships.length > 0 ? (
                <div className={style.catalog}>{items}</div>
            ) : hasErrored ? (
                <h1>Something went wrong :(</h1>
            ) : isLoading ? (
                <Loader />
            ) : (
                <h1>There are no starships</h1>
            )}
        </main>
    )
}

export default Catalog
