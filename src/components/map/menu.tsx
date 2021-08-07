import React from 'react';
import { MapList } from '../../utils/AppConfig';
import ImgSkeleton from '../ImgSkeleton';

const uuid = require('react-uuid');

export default function Menu(props:any){
    const Mapped = MapList.map( (e) =>
<figure key={uuid()} className="bg-gray-100 rounded-xl p-8 place-items-center w-1/4">
<ImgSkeleton 
    onClick={function(){ 
        localStorage.setItem('MapID',e.id);
        localStorage.setItem('MapTitre',e.titre);
        localStorage.setItem('MapMaxZ',(e.maxZoom).toString() );
        localStorage.setItem('MapMinZ',(e.minZoom).toString() );
        localStorage.setItem('MapZoom',(e.zoom).toString() );
        props.setEtape('map');
    }}
    className="w-32 h-32 rounded-full mx-auto cursor-pointer border-2 border-white"
    src={e.img} 
    alt="carte"
/>
<div className="pt-6 text-center space-y-4">
    <figcaption className="font-medium">
        <div className="text-cyan-600">
            {e.titre}
        </div>
    </figcaption>
    <blockquote>
        <p className="text-sm font-semibold">
            Cliquez sur l'image pour accéder à la Carte {e.desc}
        </p>
    </blockquote>
</div>
</figure>
)
    return (
    <div className="flex flex-wrap justify-center gap-3">
        {Mapped}
    </div>
    )
}