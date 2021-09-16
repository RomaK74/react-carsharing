import React from "react";
import {Route, Switch} from 'react-router-dom';
import {Main} from "./pages/Main";
import {BurgerMenu} from "./components/BurgerMenu";
import {useSelector} from "react-redux";
import {Menu} from "./components/Menu/Menu";

function App() {
    const isMenu = useSelector(state => state.main.isMenu);
    const [language, setLanguage] = React.useState('Rus');

    const changeLanguage = () => {
        language === 'Eng' ? setLanguage('Rus') : setLanguage('Eng')
    }

    return (
        <div className="App">
            <div className="left-line">
                <BurgerMenu/>
                {!isMenu && <div className="left-line__language" onClick={changeLanguage}>{language}</div>}
            </div>
            {isMenu && <Menu />}
                <Switch>
                    <Route exact path="/react-carsharing" render={() => <Main/>}/>
                </Switch>
        </div>
    );
}

export default App;
