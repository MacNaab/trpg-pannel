import React from 'react';
import { MapContainer, TileLayer, LayersControl } from 'react-leaflet';
import ButtonControl from './ButtonControl';
import LayerOverlay from './markerList';

export default function TheMap(props:any){
    const { MapID, setAdd, isAdd, ElPosition, setPosition, LocationMarker, mapData, userID } = props;
    return (
<MapContainer center={[0,0]} zoom={MapID.zoom} minZoom={MapID.minZoom} maxZoom={MapID.maxZoom} scrollWheelZoom={false} style={{height: "80vh", width: "100%"}} >
    <LayersControl position="bottomleft">
        <LayersControl.BaseLayer checked name="OpenStreetMap.Mapnik">
            <TileLayer
                url={"https://macnaab.github.io/Random-Tables/WM/"+MapID.id+"/map/{z}/{x}/{y}.png"}
            />
        </LayersControl.BaseLayer>
        <LayerOverlay userID={userID} mapData={mapData} />
    </LayersControl>
        <ButtonControl position="topright" setAdd={setAdd} isAdd={isAdd} NewPosition={ElPosition} setPosition={setPosition} />
        <LocationMarker />
</MapContainer>
    )
  }