import React from 'react';
import dynamic from 'next/dynamic';
import { Fold } from "react-rounder/Fold";

function HomePage(props:any){
    const Map = React.useMemo( () => 
        dynamic(
            () => import('./json'), {
                loading: () => <div className="my-10">
                    <div className="m-auto w-0" ><Fold size={50} color='brown' /></div>
                    <div className="text-center" >Chargement ...</div>
                                </div>,
                ssr: false
            }
        ),
    []);
    return <Map setMenu={props.setMenu} />;
}

export default HomePage;