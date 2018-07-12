import * as actionTypes from './actions';

const initialState = {
    projectsRoutes: [],
    coverLoaded: false,
    layoutLoaded: false,
    coverLifted: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.COVER_LOADED:
            return {
                ...state,
                coverLoaded: true
            }
        case actionTypes.PAGER_LOADED:
            return {
                ...state,
                layoutLoaded: true
            }
        case actionTypes.COVER_STATE_CHANGE:
            return {
                ...state,
                coverLifted: action.payload
            }
        case actionTypes.UPDATE_ROUTES:
            return {
                ...state,
                projectsRoutes: [...action.payload]
            }
        default:
            return state;
    }
}