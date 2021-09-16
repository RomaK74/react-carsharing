import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {setMenu} from "../redux/actions/main";

export const BurgerMenu = ({toggleBM, lineMenu}) => {
    const dispatch = useDispatch();
    const [iconStatus, setIconStatus] = useState(false);
    let isMenu = useSelector(state => state.main.isMenu);
    console.log(isMenu);
    const handleBM = () => {
        !isMenu ?
            dispatch(setMenu(true)) :
            dispatch(setMenu(false));
        //toggleBM(iconStatus, lineMenu);
    }

    return <div className="burger-menu" onClick={handleBM}>
        <div className={!isMenu ? "burger-menu__line burger-menu_first-line" : "burger-menu__line burger-menu_first-line active"}/>
        <div className={!isMenu ? "burger-menu__line burger-menu_second-line" : "burger-menu__line burger-menu_second-line active"}/>
        <div className={!isMenu ? "burger-menu__line burger-menu_third-line" : "burger-menu__line burger-menu_third-line active"}/>
        <div className={!isMenu ? "burger-menu__line burger-menu_forth-line" : "burger-menu__line burger-menu_forth-line active"}/>
    </div>
}
