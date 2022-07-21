import { SET_CATEGORIES, SET_CATS } from '../actionTypes';

const defaultState = {
    cats: [],
    categories: null,
}
export default (state=defaultState, action={}) => {
    switch(action.type){
        case SET_CATS:
            return {
                ...state,
                cats: action.cats
            }
        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.categories
            }
        default:
            return state
    }

}