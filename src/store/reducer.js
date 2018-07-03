import * as actionTypes from './actions';

const initialState = {
    projectsRoutes: [],
    coverLoaded: false,
    pagerLoaded: false
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
                pagerLoaded: true
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