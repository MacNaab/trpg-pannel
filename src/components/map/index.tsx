import React from 'react';
import Menu from './menu';
import Map from './map';

export default function Index(){
    const [etape, setEtape] = React.useState<string>('menu');

    switch(etape){
        case "menu": return <Menu setEtape={setEtape} />
        case "map": return <Map />
        default: return <Menu setEtape={setEtape} />
    }
}