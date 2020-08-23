import { GET_STARSHIPS, TOGGLE_COMPARE, ERROR } from './types'

const initialState = {
    starships: null,
    error: false
}

const getColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16)

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_STARSHIPS:
            const starships = action.payload.map((starship, id) => ({
                ...starship,
                id,
                color: getColor(),
                isCompared: false
            }))
            return { ...state, starships }

        case TOGGLE_COMPARE:
            const comparedShips = state.starships.map(starship => {
                if (starship.id === action.payload) {
                    starship.isCompared = !starship.isCompared
                }
                return starship
            })
            return { ...state, starships: comparedShips }

        case ERROR:
            return { ...state, error: true }

        default:
            return state
    }
}
