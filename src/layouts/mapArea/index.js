import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MainPage from "../../components/mainPageWrapper";
import Map from "./map";
import OrderArea from "./order/orderArea"


const styles = {
    width: '100vw',
    height: 'calc(100vh - 66.39px)',
    // position: 'absolute',
};

const MapArea = () => (
        <MainPage data-testid="map">
            <Map/>
            <OrderArea/>
        </MainPage>
        )
;

export default MapArea;