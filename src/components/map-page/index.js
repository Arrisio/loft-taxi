import React, {Component} from 'react';

import './map-page.css';

import Map from "../map";
import Header from "../header";

export default class MapPage extends Component {
    state = {
        currentContent: 'map'
    };

    gotoMap = () => {
        this.setState(() => {
            return {
                currentContent: 'map'
            }
        })
    };

    gotoProfile = () => {
        this.setState(() => {
            return {
                currentContent: 'profile'
            }
        })
    };

    render() {
        const gotoFunctionMapping = {
            profile: this.gotoProfile,
            map: this.gotoMap,
            signout: this.props.signOutHandler
        };
        console.log(gotoFunctionMapping);
        return (
            <div>
                <Header gotoFunctionMapping={gotoFunctionMapping}/>
                <Map/>
            </div>)
    };
}
