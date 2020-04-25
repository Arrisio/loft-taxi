import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MainPage from "../../components/main-page-wrapper";
import MapArea from "./map-area";
import OrderArea from "./order/order-area"


const styles = {
    width: '100vw',
    height: 'calc(100vh - 66.39px)',
    // position: 'absolute',
};

// const Map = ({ handlerNavigation }) => <div data-testid="map"> </div>;

const Map = () => (
        <MainPage data-testid="map">
            <MapArea/>
            <OrderArea/>
        </MainPage>
        )
;

export default Map;