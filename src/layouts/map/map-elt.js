import React, { useRef, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


import { drawRoute } from './draw-route';
import {getRoute} from '../../modules/route'

const styles = {
    width: '100vw',
    height: 'calc(100vh - 66.39px)',
    position: 'absolute',
};

const MapElt = ({ route }) => {
    const [map, setMap] = useState(null);
    const mapContainerRef = useRef(null);

    useEffect(() => {
        mapboxgl.accessToken =
            'pk.eyJ1Ijoic2F0YW5zZGVlciIsImEiOiJjanAwOGxqYnAyc3J4M3hucmJzaWh4OTg0In0.LSKzagFIJqivwgf4VFjC4Q';
        const initializeMap = ({ setMap, mapContainerRef }) => {
            const map = new mapboxgl.Map({
                container: mapContainerRef.current,
                // See style options here: https://docs.mapbox.com/api/maps/#styles
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [30.2656504, 59.8029126],
                zoom: 15,
            });
            // add navigation control (zoom buttons)
            map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

            map.on('load', () => {
                setMap(map);
                map.resize();
            });
        };

        if (!map) initializeMap({ setMap, mapContainerRef });

    }, [map,]);

    const clearDawRoute = () => {
        if (map.getLayer('route')){
            map.removeLayer('route');
            map.removeSource('route');
        }
    };

    if (map && route) {
        clearDawRoute()
        console.log(route[0])
        drawRoute(map, route)
    }

    if (map && !route) clearDawRoute();

    return (
            <div style={{ position: 'relative', zIndex: -10 }}>
                <div
                    data-testid="page-map"
                    ref={(el) => (mapContainerRef.current = el)}
                    style={styles}
                />
            </div>
    );
};


const mapStateToProps = state => ({
    route: getRoute(state)
});

export default connect(mapStateToProps, null)(MapElt);