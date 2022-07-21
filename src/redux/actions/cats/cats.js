import { SET_CATEGORIES, SET_CATS } from '../../actionTypes';

export const setCatsList = (cats)=>{
    return {
        type: SET_CATS,
        cats,
    }
}

export const setCategoriesList = (categories)=>{
    return {
        type: SET_CATEGORIES,
        categories,
    }
}
