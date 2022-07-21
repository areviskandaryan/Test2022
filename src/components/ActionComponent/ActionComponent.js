import React from 'react';
import styles from './action.module.scss'

function ActionComponent({ handleLoadMore }){
    return (
        <div className={styles.action}>
            <button onClick={handleLoadMore}>Load more ...</button>
        </div>
    )
}
export default ActionComponent