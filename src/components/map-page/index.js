import React, {Component} from 'react';

import './map-page.css';

import Map from "../map";
import Header from "../header";
import Profile from "../profile";

export default class MapPage extends Component {
    state = {
        currentContent: 'map'
    };

    gotoMap = () => {
        this.setState({currentContent: 'map'})
    };

    gotoProfile = () => {
        this.setState({currentContent: 'profile'})
    };

    render() {
        const gotoFunctionMapping = {
            profile: this.gotoProfile,
            map: this.gotoMap,
            signout: this.props.signOutHandler
        };

        const {currentContent} = this.state;

        return (
            <div>
                <Header gotoFunctionMapping={gotoFunctionMapping}/>
                {currentContent === 'map'
                    ? <Map/>
                    : <Profile/>
                }
            </div>
        )
    };
}
