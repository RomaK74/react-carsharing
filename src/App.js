import React, {useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Main} from './pages/Main/Main';
import {Menu} from './components/ui/Menu/Menu';
import {Navbar} from './components/ui/Navbar/Navbar';
import {Order} from './pages/Order/Order';
import styles from './index.scss';
import {ConfirmWindow} from './components/common/Order/ConfirmWindow/ConfirmWindow';

function App() {
    const [isMenu, setMenu] = useState(false);
    const [isConfirmWindow, setIsConfirmWindow] = useState(false);

    return (
        <div className={styles.App}>
            {isMenu && <Menu/>}
            {isConfirmWindow && <ConfirmWindow setIsConfirmWindow={setIsConfirmWindow}/>}
            <Navbar setMenu={setMenu} isMenu={isMenu}/>
            <Switch>
                <Route exact path="/react-carsharing/" render={() => <Main setMenu={setMenu} isMenu={isMenu}/>}/>
                <Route path="/react-carsharing/order" render={() => <Order setMenu={setMenu} isMenu={isMenu}
                                                                           setIsConfirmWindow={setIsConfirmWindow}/>}/>
            </Switch>
        </div>
    );
}

export default App;
