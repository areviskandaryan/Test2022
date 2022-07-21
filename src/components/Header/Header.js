import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import getCategoriesList from '../../redux/thunks/cats/getCategoriesList';
import styles from './header.module.scss';
import { Link, useNavigate } from 'react-router-dom';

function Header({ setLimit }){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { categories } = useSelector(state => state.cats);
    const [categoryId, setCategoryId] = useState(null);
    useEffect(()=>{
        dispatch(getCategoriesList());
    }, [])

    const handleCategoryClick = (id) => {
        setCategoryId(id);
        setLimit(10);
    }

    const handleClick = () => {
        setLimit(10);
        navigate('/home');
    }
    return (
        <header className={styles.header}>
            <div onClick={handleClick}>CATS PAGE</div>
            <ul>
                {categories && categories.map(({ id, name }) => {
                    return (
                        <li
                            key={id}
                            onClick={()=>handleCategoryClick(id)}
                        >
                            <Link
                                to={`/home/${id}`}
                                className={id===categoryId ? styles.selected : styles.nonSelected}
                            >
                                {name}
                            </Link>
                        </li>)
                })}
            </ul>
        </header>
    )
}
export default Header