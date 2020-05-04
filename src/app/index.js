import React from "react";
import {Provider} from 'react-redux';
import {withRouter} from 'react-router'
import {Route, Switch, Redirect} from 'react-router-dom';

import createStore from './store';
import {signOut} from '../modules/auth'
import AuthRoute from "./authRoute";
import MapArea from "../layouts/mapArea";
import Profile from "../layouts/profile";
import SignInForm from "../layouts/signInForm";
import SignUpForm from "../layouts/signUpForm";


const store = createStore();

const App = () => (
    <Provider store={store}>
        <Switch>
            <AuthRoute path="/signin" exact authType="identity-page" component={SignInForm}/>
            <AuthRoute path="/signup" exact authType="identity-page" component={SignUpForm}/>

            <AuthRoute path="/(map)?" exact component={MapArea}/>
            <AuthRoute path="/profile" exact component={Profile}/>

            <Route path="/signout" exact render={({history}) => {
                store.dispatch(signOut());
                history.push('/signin');
            }}>
            </Route>

            <Redirect to="/"/>
        </Switch>
    </Provider>
);

export default App;