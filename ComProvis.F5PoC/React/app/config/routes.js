import React from 'react'
import Main from '../components/layouts/Main';
import Blank from '../components/layouts/Blank';
import LoginLayout from '../components/layouts/LoginLayout';

import Login from '../views/login/Login';
import Solution from '../views/solution/Solution';

import { Route, Router, IndexRedirect, browserHistory} from 'react-router';

export default (
    <Router history={browserHistory}>      
     <Route path="/" component={Main}>
            <IndexRedirect to="/solution" />
            <Route path="/solution" component={Solution}> </Route>           
        </Route>  
        <Route path='/auth' component={LoginLayout}>
        <IndexRedirect to="/auth/login" />  
            <Route path="login" component={Login}> </Route>           
        </Route >
    </Router>

);

/**
 *
 */