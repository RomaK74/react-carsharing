import React, {useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Main} from './pages/Main/Main';
import {Menu} from './components/ui/Menu/Menu';
import {LeftLine} from './components/ui/LeftLine';
import {Order} from './pages/Order/Order';
import styles from './index.scss';

function App() {
    const [isMenu, setMenu] = useState(false);

    return (
        <div className={styles.App}>
            {isMenu && <Menu/>}
            <LeftLine setMenu={setMenu} isMenu={isMenu}/>
            <Switch>
                <Route exact path="/react-carsharing" render={() => <Main setMenu={setMenu} isMenu={isMenu}/>}/>
                <Route exact path="/react-carsharing/order" render={() => <Order/>}/>
            </Switch>
        </div>
    );
}

export default App;
