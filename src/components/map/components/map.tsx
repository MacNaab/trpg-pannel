import React from 'react';
import { useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import TheMap from './themap';
import { URL } from '../../../utils/AppConfig';
import { Fold } from 'react-rounder/Fold';
import Marker from './Marker';

const Map = () => {
  const [isAdd, setAdd] = React.useState(false);
  const [ElPosition, setPosition] = React.useState<any>(null);
  const [MapID,setMapID] = React.useState<any>({id:null, zoom:3, minZoom:2, maxZoom:5});
  const [IsLoad,setLoad] = React.useState(false);
  const [mapData, setMapData] = React.useState<any>(null);
  const [userID, setUserID] = React.useState<any>(null);
  const [err,setErr] = React.useState<any>(false);
  const [succ,setSucc] = React.useState<any>(false);


  React.useEffect( () => {
    const IsMap = localStorage.getItem("MapID");
    if(IsMap){
      setMapID({
        id: IsMap,
        zoom:Number(localStorage.getItem("MapZoom")),
        minZoom:Number(localStorage.getItem("MapMinZ")),
        maxZoom:Number(localStorage.getItem("MapMaxZ"))
      });
      console.log("Paramètres de la carte:",{
        id: IsMap,
        zoom:Number(localStorage.getItem("MapZoom")),
        minZoom:Number(localStorage.getItem("MapMinZ")),
        maxZoom:Number(localStorage.getItem("MapMaxZ"))
      });
      
      document.title = "Carte interactive - " + localStorage.getItem("MapTitre");

      fetch(URL+"map/"+IsMap+".json", {cache: "no-store"})
        .then(res => res.json())
        .then(
          (result) => {
            setMapData(result);
            setLoad(true);
          },
          (error) => {
            console.log(error);
            setErr("Une erreur est survenue lors du chargement des données, consulter la console pour plus d'informations.");
          }
        );
    }else{
      setErr('Erreur: MapID est null');
    }
    const IsUser = localStorage.getItem("PJ");
    IsUser ? setUserID(IsUser) : null;

  },[]);
  function LocationMarker() {
    if(isAdd){
      useMapEvents({
        dblclick(e:any){
          setPosition([e.latlng.lat,e.latlng.lng]);
        },
      });
    }   
    
    return ElPosition === null ? null : (
      <Marker position={ElPosition} titre="Nouveau Marker" description="[...]" />
    )
  }
    return (
      <>
      {
        IsLoad ? (<TheMap err={err} setErr={setErr} succ={succ} setSucc={setSucc} MapID={MapID} setAdd={setAdd} isAdd={isAdd} ElPosition={ElPosition} setPosition={setPosition} LocationMarker={LocationMarker} userID={userID} mapData={mapData} />) : (<div className="my-10"><div className="m-auto w-0" ><Fold size={50} color='purple' /></div><div className="text-center">Chargement ...</div></div>)
         
      }
      </>
    )
}

export default Map;