import React from 'react';
import { Marker } from 'react-leaflet';
import MarkerIcon from './newMarkerIcon';

export default function Mark(props:any){
    const { position } = props;
    const findMaker = MarkerIcon({ color: undefined, e: undefined });

    return (
        <Marker
            position={position}
            icon = { findMaker.marker }
        >
        </Marker>
    )
}