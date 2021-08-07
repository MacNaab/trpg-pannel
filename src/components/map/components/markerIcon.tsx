import React from 'react';
import { divIcon } from "leaflet";
import * as Icons from "react-icons/gi";
import { renderToStaticMarkup } from "react-dom/server";

function customMarkerIcon(iconMarkup:any){ 
    return (
        divIcon({
            html: iconMarkup
        })
    )
}

const iconKeys = Object.keys(Icons);

// https://codesandbox.io/s/react-leaflet-fa-forked-5okvx?file=/src/index.js:76-133
const NewIconList:any = iconKeys.map( (e:any) => {
    const NGame:any = Icons;
    const GetKeyValue:any = NGame[e];
    return ({
        id: e,
        marker: customMarkerIcon(renderToStaticMarkup(<div className="border rounded-full" style={{width:60,height:60,backgroundColor:"white",marginTop:-25,marginLeft:-25}} ><div className="ml-1"><GetKeyValue size={50} /></div></div>))
    })
});

export default NewIconList;