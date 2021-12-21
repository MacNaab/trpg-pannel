import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import Card from './card';
import MarkerIcon from './newMarkerIcon';

export default function Mark(props:any){
    const { markerData } = props;
    const findMaker = MarkerIcon({ color: markerData.iconColor, e: markerData.icon });

    return (
        <Marker
            position={markerData.position}
            icon = { findMaker.marker }
        >
            <Popup minWidth={250} maxWidth={1000} >
                <Card setErr={props.setErr} setSucc={props.setSucc} userID={props.userID} bodyCard={props.bodyCard} 
                    markerData={markerData}
                />
            </Popup>
        </Marker>
    )
}