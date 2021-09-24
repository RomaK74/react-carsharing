import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Main} from './pages/Main';
import {useSelector} from 'react-redux';
import {Menu} from './components/Menu/Menu';
import {LeftLine} from './components/LeftLine';

function App() {
    const isMenu = useSelector(state => state.main.isMenu);

    return (
        <div className="App">
            <LeftLine />
            {isMenu && <Menu/>}
            <Switch>
                <Route exact path="/react-carsharing" render={() => <Main/>}/>
            </Switch>
        </div>
    );
}

export default App;
