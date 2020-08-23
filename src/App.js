import React from 'react'
import Catalog from './components/Catalog/Catalog'
import Compare from './components/Compare/Compare'
import style from './App.module.css'
import { connect, useDispatch, useSelector } from 'react-redux'
import { getStarships } from './redux/actions'
import Header from './components/Header/Header'
import { Route } from 'react-router-dom'

function App() {
    const dispatch = useDispatch()
    const starships = useSelector(state => state.starships)
    if (starships === null) {
        dispatch(getStarships())
    }

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
