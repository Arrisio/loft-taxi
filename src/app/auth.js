import React, {createContext, useState} from 'react';
import IntroPage from "../layouts/intro-page";

const AuthCtx = createContext();

const Auth = props => {
    const [isSignedIn, setSignedin] = useState(false);

    const signIn = e => {
        e.preventDefault();
        setSignedin(true);
    };

    const signOut = e => {
        e.preventDefault();
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