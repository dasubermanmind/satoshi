import React from 'react';
import {Route, Router as BrowserRouter ,Switch } from 'react-router-dom';
import sort from '../components/Sort/Sort';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
const MainRoutes = ()=>{
    return(
        <BrowserRouter history={history}>
            <Switch>
                <Route path="/sort" component={sort}/>
            </Switch>
        </BrowserRouter>
    );
}

export default MainRoutes;