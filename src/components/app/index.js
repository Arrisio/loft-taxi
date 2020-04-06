import React, {Component} from "react";

import IntroPage from "../intro-page";
import MapPage from "../map-page";

export default class App extends Component {

    state = {
        currentPage: 'intro'
    };

    signIn = () => {
        this.setState({currentPage: 'map'});
    };

    signOut = () => {
        this.setState({currentPage: 'intro'})
    };

    render() {
        return (
            <>
                {this.state.currentPage === 'intro' ?
                    <IntroPage signInHandler={this.signIn}/> :
                    <MapPage signOutHandler={this.signOut}/>}
            </>
        )
    };
}