import React from 'react';
import Drawer from './drawer';
import { ChakraProvider } from "@chakra-ui/react";

const POSITION_CLASSES:any = {
    bottomleft: 'leaflet-bottom leaflet-left',
    bottomright: 'leaflet-bottom leaflet-right',
    topleft: 'leaflet-top leaflet-left',
    topright: 'leaflet-top leaflet-right',
}

export default function ButtonControl(props:any) {
    const {position, setAdd, isAdd, NewPosition, setPosition } = props;
    const positionClass:any = (position && POSITION_CLASSES[position] ) || POSITION_CLASSES.topright;
      return (
        <div className={positionClass}>
          <div className="leaflet-control leaflet-bar">
            <ChakraProvider>
                <Drawer setAdd={setAdd} isAdd={isAdd} 
                  NewPosition={NewPosition} setPosition={setPosition}
                  setErr={props.setErr} setSucc={props.setSucc}
                />
            </ChakraProvider>
          </div>
        </div>
      )
}