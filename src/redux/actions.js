import { GET_STARSHIPS, TOGGLE_COMPARE, ERROR } from './types'

export const getStarships = () => {
    return async dispatch => {
        const data = await fetch('https://swapi.dev/api/starships/')
            .then(d => d.json())
            .catch(() => {
                dispatch({ type: ERROR })
            })

        if (data) {
            const starships = await Promise.all(
                data.results.map(async starship => {
                    starship.films = await Promise.all(
                        starship.films.map(f =>
                            fetch(f.replace(/http:/, 'https:'))
                                .then(d => d.json())
                                .then(d => d.title)
                        )
                    )
                    starship.pilots = await Promise.all(
                        starship.pilots.map(f =>
                            fetch(f.replace(/http:/, 'https:'))
                                .then(d => d.json())
                                .then(d => d.name)
                        )
                    )
                    return starship
                })
            )

            dispatch({ type: GET_STARSHIPS, payload: starships })
        }
    }
}

export const toggleCompare = index => ({ type: TOGGLE_COMPARE, payload: index })
