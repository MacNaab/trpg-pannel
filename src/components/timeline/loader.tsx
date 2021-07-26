import React from 'react';
import dynamic from 'next/dynamic';
import { Fold } from "react-rounder/Fold";

function HomePage(){
    const Timeline = React.useMemo( () => 
        dynamic(
            () => import('./timeline'), {
                loading: () => <div>
                    <div className="m-auto w-0" ><Fold size={50} color='purple' /></div>
                    <div className="text-center" >Chargement ...</div>
                                </div>,
                ssr: false
            }
        ),
    []);
    return <Timeline />;
}

export default HomePage;