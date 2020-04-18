import React from "react";
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import createStore from './store';
import {signOut} from '../modules/auth'
import PrivateRoute from "./private-route";
import MainPage from "../layouts/main-page";
import Map from "../layouts/main-page/map";
import Profile from "../layouts/main-page/profile";
import IntroPage from "../layouts/intro-page";
import SignInForm from "../layouts/intro-page/sign-in-form";
import SignUpForm from "../layouts/intro-page/sign-up-form";


const store = createStore();

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/signin" exact>
                    <IntroPage>
                        <SignInForm/>
                    </IntroPage>
                </Route>

                <Route path="/signup" exact>
                    <IntroPage>
                        <SignUpForm/>
                    </IntroPage>
                </Route>

                <Route path="/signout" exact render={({history}) => {
                    store.dispatch(signOut());
                    history.push('/signin');
                }}>
                </Route>

                <PrivateRoute path="/(map)?" exact>
                    <MainPage>
                        <Map/>
                    </MainPage>
                </PrivateRoute>

                <PrivateRoute path="/profile" exact>
                    <MainPage>
                        <Profile/>
                    </MainPage>
                </PrivateRoute>

                <Redirect to="/"/>
            </Switch>
        </BrowserRouter>
    </Provider>
);

export default App;