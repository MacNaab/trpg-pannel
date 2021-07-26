import React from 'react';
import { LayerGroup, LayersControl } from 'react-leaflet';
import MarkerC from './Marker';

const uuid = require('react-uuid');

export default function Layered(props:any){
    const { userID, mapData } = props;
    const users = Object.keys(mapData.Player);
    const Cmarker = mapData.Commun.map( (e:any) => 
        <MarkerC body="Commun" key={uuid()} position={e.position} icon={e.icon} img={e.img} titre={e.titre} description={e.description}  />
    );
    if(userID === 'admin'){
        const Alayer = users.map( (f:any) =>
            <LayersControl.Overlay key={uuid()} name={f} checked >
                <LayerGroup>
                {
                mapData.Player[f].map( (e:any) => 
                    <MarkerC bodyCard={f} key={uuid()} userID={userID} position={e.position} icon={e.icon} img={e.img} titre={e.titre} description={e.description}  />
                )
                }
                </LayerGroup>
            </LayersControl.Overlay>
        )
        return (
            <>
                <LayersControl.Overlay name="Layer Commun" checked >
                    <LayerGroup>{Cmarker}</LayerGroup>
                </LayersControl.Overlay>
                {Alayer}
            </>
        );
    }else{
        return (
            <>
                <LayersControl.Overlay name="Layer Commun" checked >
                    <LayerGroup>{Cmarker}</LayerGroup>
                </LayersControl.Overlay>
                <LayersControl.Overlay name={userID} checked >
                    <LayerGroup>
                    {
                        users.includes(userID) ? (
                            mapData.Player[userID].map( (e:any) => 
                                <MarkerC bodyCard={userID} key={uuid()} position={e.position} icon={e.icon} img={e.img} titre={e.titre} description={e.description}  />
                            )
                        ) : null
                    }
                    </LayerGroup>
                </LayersControl.Overlay>
            </>
        );
    }

}