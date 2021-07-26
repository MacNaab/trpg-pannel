import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import Card from './card';

import MarkerIcon from './markerIcon';

const defaultIcon = MarkerIcon[0]?.marker;

export default function Mark(props:any){
    const findMarker = MarkerIcon.find(e => e.id === props.icon);

    return (
        <Marker
            position={props.position}
            icon={ findMarker ? findMarker.marker : defaultIcon }
        >
            <Popup>
                <Card userID={props.userID} bodyCard={props.bodyCard} img={props.img} titre={props.titre} description={props.description} position={props.position} icon={props.icon} />
            </Popup>
        </Marker>
    )
}