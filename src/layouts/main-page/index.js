import React from 'react';

import Header from "./header";


const MainPage = ({children}) => {

    return (
        <div data-testid = 'mainPage'>
            <Header />
            {children}
        </div>
    );
};


export default MainPage;
