import React from 'react';
import { MapContainer, TileLayer, LayersControl } from 'react-leaflet';
import ButtonControl from './ButtonControl';
import LayerOverlay from './markerList';
import AlertTW from '../../alert';

export default function TheMap(props:any){
    const { err, setErr, succ, setSucc, MapID, setAdd, isAdd, ElPosition, setPosition, LocationMarker, mapData, userID } = props;

    function Alerted(){
        if(err){
            return <AlertTW type="fail" message={err} />
        }else if(succ){
            return <AlertTW message={err} />
        }
        return null
    }
    
    return (
        <>
<Alerted />
<MapContainer center={[0,0]} zoom={MapID.zoom} minZoom={MapID.minZoom} maxZoom={MapID.maxZoom} scrollWheelZoom={false} style={{height: "80vh", width: "100%"}} >
    <LayersControl position="bottomleft">
        <LayersControl.BaseLayer checked name="OpenStreetMap.Mapnik">
            <TileLayer
                url={"https://macnaab.github.io/Random-Tables/WM/"+MapID.id+"/map/{z}/{x}/{y}.png"}
            />
        </LayersControl.BaseLayer>
        <LayerOverlay setErr={setErr} setSucc={setSucc} userID={userID} mapData={mapData} />
    </LayersControl>
        <ButtonControl 
            position="topright" 
            setAdd={setAdd} isAdd={isAdd} NewPosition={ElPosition} setPosition={setPosition}
            setErr={setErr} setSucc={setSucc}
        />
        <LocationMarker />
</MapContainer>
        </>
    )
  }