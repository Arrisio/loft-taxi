import React, { useState } from 'react';

import Header from "./header";
import Map from "./map";
import Profile from "./profile";

const MainPage = () => {
    const [curentPage, setCurentpage] = useState('map');
    const showMap = e => {
        e.preventDefault();
        setCurentpage('map');
    };
    const showProfile = e => {
        e.preventDefault();
        setCurentpage('profile');
    };

    return (
        <div data-testid = 'mainPage'>
            <Header showMapHandler={showMap} showProfileHandler={showProfile} />
            {(curentPage === 'map')
                ?<Map/>
                :<Profile/>
            }
        </div>
    );
};




export default MainPage;
