import React from 'react';
import dynamic from 'next/dynamic';
import { Fold } from "react-rounder/Fold";

function HomePage(){
    const Timeline = React.useMemo( () => 
        dynamic(
            () => import('./timeline'), {
                loading: () => <div>
                    <span>.</span>
                    <div className="m-auto w-0 mt-48" ><Fold size={50} color='green' /></div>
                    <div className="text-center mb-48" >Chargement ...</div>
                    <span>.</span>
                                </div>,
                ssr: false
            }
        ),
    []);
    return <Timeline />;
}

export default HomePage;