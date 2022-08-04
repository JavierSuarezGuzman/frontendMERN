/* Javier Suárez Guzmán
    Agosto 2022 */

import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from './components/Login';
import Admin from './components/Admin';
import Reponedor from './components/Reponedor';
import Vendedor from './components/Vendedor';


const App = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>

                    <Route exact path="/" component={Login} />
                    <Route exact path="/admin" component={Admin} />
                    <Route exact path="/reponedor" component={Reponedor} />
                    <Route exact path="/vendedor" component={Vendedor} />
                    <Redirect to="/" />

                </Switch>
            </BrowserRouter>
        </>

    )
}

export default App;