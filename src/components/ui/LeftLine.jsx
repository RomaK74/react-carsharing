import React from 'react';
import {BurgerMenu} from './BurgerMenu';
import {Language} from './Language';
import styles from '../../pages/index.module.scss';

export const LeftLine = ({isMenu, setMenu}) => {
    return (
        <div className={styles['left-line']}>
            <BurgerMenu setMenu={setMenu} isMenu={isMenu}/>
            {!isMenu && <Language/>}
        </div>
    );
}