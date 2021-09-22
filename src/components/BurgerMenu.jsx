import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setMenu} from '../redux/actions/main';

export const BurgerMenu = ({toggleBM, lineMenu}) => {
    const dispatch = useDispatch();
    let isMenu = useSelector(state => state.main.isMenu);
    const handleBM = () => {
        !isMenu ?
            dispatch(setMenu(true)) :
            dispatch(setMenu(false));
    }

    return <div className="burger-menu" onClick={handleBM}>
        <div
            className={!isMenu ? "burger-menu__line burger-menu_first-line" : "burger-menu__line burger-menu_first-line active"}/>
        <div
            className={!isMenu ? "burger-menu__line burger-menu_second-line" : "burger-menu__line burger-menu_second-line active"}/>
        <div
            className={!isMenu ? "burger-menu__line burger-menu_third-line" : "burger-menu__line burger-menu_third-line active"}/>
        <div
            className={!isMenu ? "burger-menu__line burger-menu_forth-line" : "burger-menu__line burger-menu_forth-line active"}/>
    </div>
}
