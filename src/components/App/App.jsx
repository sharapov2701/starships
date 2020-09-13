import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'
import { getStarships } from '../../redux/actions'
import Catalog from '../Catalog/Catalog'
import Compare from '../Compare/Compare'
import Header from '../Header/Header'
import style from './App.module.css'

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getStarships())
    }, [dispatch])

    return (
        <div className={style.App}>
            <Header />
            <Route path='/' exact component={Catalog} />
            <Route path='/compare' exact component={Compare} />
        </div>
    )
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(App)
