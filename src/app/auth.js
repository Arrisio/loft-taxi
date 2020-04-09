import React, {createContext, useState} from 'react';

import IntroPage from "../layouts/intro-page";
const AuthCtx = createContext();

const Auth = props => {
    const [isSignedIn, setSignedin] = useState(false);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const signIn = (username, password) => {
        setUsername(username);
        setPassword(password);
        setSignedin(true);
        console.log(username)
        // console.log(e)
    };

    const signOut = () => {
        setUsername(null);
        setPassword(null);
        setSignedin(false);
    };

    return (
        <AuthCtx.Provider value={{signInHandler: signIn, signOutHandler: signOut}}>
            {
                (isSignedIn)
                    ? props.children
                    : <IntroPage/>
            }
        </AuthCtx.Provider>
    )
};

export {
    Auth,
    AuthCtx
} ;