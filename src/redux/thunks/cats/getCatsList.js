import { setCatsList } from '../../actions/cats/cats';

export default (id, limit=10) => (dispatch) => {
    const url = id? `https://api.thecatapi.com/v1/images/search?limit=${limit}&category_ids=${id}`:
        `https://api.thecatapi.com/v1/images/search?limit=${limit}`
    fetch(url)
        .then(res => res.json())
        .then(res => {
            dispatch(setCatsList(res))
        })
}