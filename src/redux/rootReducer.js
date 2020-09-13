import { GET_STARSHIPS, IS_LOADING, HAS_ERRORED, TOGGLE_COMPARE } from './types'

const initialState = {
    starships: [],
    hasErrored: false,
    isLoading: true
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_STARSHIPS:
            const starships = action.payload.map((starship, id) => ({
                ...starship,
                id,
                color: '#' + Math.ceil(Math.random() * 16777215).toString(16),
                isCompared: false
            }))
            return { ...state, starships }

        case IS_LOADING:
            return { ...state, isLoading: action.payload }

        case HAS_ERRORED:
            return { ...state, hasErrored: action.payload }

        case TOGGLE_COMPARE:
            const comparedShips = state.starships.map(starship => {
                if (starship.id === action.payload) {
                    starship.isCompared = !starship.isCompared
                }
                return starship
            })
            return { ...state, starships: comparedShips }

        default:
            return state
    }
}
