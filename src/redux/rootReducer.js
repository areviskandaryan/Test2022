import { combineReducers } from 'redux';
import cats from './reducers/cats';

const appReducer = combineReducers({
    cats: cats
})

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer