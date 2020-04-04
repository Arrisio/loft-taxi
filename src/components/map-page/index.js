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

        return(
            <div>
                <Header/>
                <Map/>
            </div>)
    };
}
