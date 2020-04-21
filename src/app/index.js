import React from "react";
import {Provider} from 'react-redux';
import { withRouter } from 'react-router'
import {Route, Switch, Redirect } from 'react-router-dom';

import createStore from './store';
import {signOut} from '../modules/auth'
import AuthRoute from "./auth-route";
import MainPage from "../layouts/main-page";
import Map from "../layouts/main-page/map";
import Profile from "../layouts/main-page/profile";
import IntroPage from "../layouts/intro-page";
import SignInForm from "../layouts/intro-page/sign-in-form";
import SignUpForm from "../layouts/intro-page/sign-up-form";


const store = createStore();


const App = () => (
    <Provider store={store}>
            <Switch>
                <AuthRoute path="/signin" exact authType="identity-page">
                    <IntroPage>
                        <SignInForm/>
                    </IntroPage>
                </AuthRoute>

                <AuthRoute path="/signup" exact authType="identity-page">
                    <IntroPage>
                        <SignUpForm/>
                    </IntroPage>
                </AuthRoute>

                <Route path="/signout" exact render={({history}) => {
                    store.dispatch(signOut());
                    history.push('/signin');
                }}>
                </Route>

                <AuthRoute path="/(map)?" exact>
                    <MainPage>
                        <Map/>
                    </MainPage>
                </AuthRoute>

                <AuthRoute path="/profile" exact>
                    <MainPage>
                        <Profile/>
                    </MainPage>
                </AuthRoute>

                <Redirect to="/"/>
            </Switch>
    </Provider>
);

export default App;