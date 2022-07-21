import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import getCatsList from '../../../redux/thunks/cats/getCatsList';
import styles from './Category.module.scss';
import { useParams } from 'react-router-dom';

function Category({ limit }){
    const dispatch = useDispatch();
    const { categoryId } = useParams();
    const { cats } = useSelector(state => state.cats);

    useEffect(()=>{
        dispatch(getCatsList(categoryId, limit));
    }, [categoryId, limit])

    return (
            <div className={styles.content}>
                <div className={styles.catsList}>
                    {cats.length?cats.map(({ id, url }) =><div key={id}><img src={url} alt={'Cat Image'} /></div>): null}
                </div>
            </div>
    )
}
export default Category