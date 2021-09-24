import React from 'react';
import {BurgerMenu} from "./BurgerMenu";
import {useSelector} from "react-redux";
import {Language} from "./Language";

export const LeftLine = () => {
    const isMenu = useSelector(state => state.main.isMenu);

    return (
        <div className="left-line">
            <BurgerMenu/>
            {!isMenu && <Language />}
        </div>
    );
}