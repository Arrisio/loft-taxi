import React, { useRef, useEffect, useState } from 'react';
import { connect } from "react-redux";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import { drawRoute } from './draw-route';
import {getRoute} from '../../modules/route'

// const styles = {
//     width: '100vw',
//     height: 'calc(100vh - 66.39px)',
// };
    // position: 'absolute',


// const Map = ({ handlerNavigation }) => <div data-testid="map"> </div>;

mapboxgl.accessToken =
    "pk.eyJ1IjoiZXNnb2x1YiIsImEiOiJjazJicXRoN3AwN2NnM21tZjd5aWNmeHVnIn0.-V1DvjvU7qGcA9fzZIEF8g";
class MapArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lng: 30.31413,
            lat: 59.93863,
            zoom: 10
        };
        this.map = null;
        this.mapContainerRef = React.createRef();
    }

    componentDidMount() {
        this.map = new mapboxgl.Map({
            container: this.mapContainerRef.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });
    }

    componentDidUpdate(prevProps) {
        const { route } = this.props;
        if (prevProps !== this.props) {

            if (this.map.getLayer("route")) {
                this.map.flyTo({
                    center: [this.state.lng, this.state.lat],
                    zoom: this.state.zoom
                });
                this.map.removeLayer("route");
                this.map.removeSource("route");
            }
            if (route.length) {
                drawRoute(this.map, route);
            }
        }
    }

    render() {
        const style = {
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            width: "100%",
            height: window.innerHeight - 72 // TODO add header height
        };

        return (
            <div style={{ position: "relative", zIndex: -10 }}>
                <div
                    style={style}
                    ref={this.mapContainerRef}
                    className="mapContainer"
                />
            </div>
        );
    }
}
const mapStateToProps = state => ({
    route: getRoute(state)
});

export default MapArea;