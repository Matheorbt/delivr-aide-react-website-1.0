import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

//Components import for routing

import AddKit from './AddKit'
import Charte from './Charte'
import Politique from './Politique'
import PageNotFound from './PageNotFound'
import App from './App'

function Routing() {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <App />
                    </Route>
                    <Route path="/politique">
                        <Politique />
                    </Route>
                    <Route path="/charte">
                        <Charte />
                    </Route>
                    <Route path="/addkit">
                        <AddKit />
                    </Route>
                    <Route path="*">
                        <PageNotFound />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default Routing
