import { setCategoriesList } from '../../actions/cats/cats';

export default () => (dispatch) => {
    fetch('https://api.thecatapi.com/v1/categories')
        .then(res => res.json())
        .then(res => {
            dispatch(setCategoriesList(res))
        })
}