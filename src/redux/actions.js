import { GET_STARSHIPS, IS_LOADING, HAS_ERRORED, TOGGLE_COMPARE } from './types'

export const getStarships = () => {
    return dispatch => {
        dispatch({ type: IS_LOADING, payload: true })
        fetch('https://swapi.dev/api/starships/')
            .then(d => d.json())
            .then(d => dispatch({ type: GET_STARSHIPS, payload: d.results }))
            .catch(() => dispatch({ type: HAS_ERRORED }))
            .finally(() => dispatch({ type: IS_LOADING, payload: false }))
    }
}

export const isLoading = bool => ({ type: IS_LOADING, payload: bool })

export const hasErrored = bool => ({ type: HAS_ERRORED, payload: bool })

export const toggleCompare = index => ({ type: TOGGLE_COMPARE, payload: index })
