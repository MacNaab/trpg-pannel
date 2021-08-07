import React from 'react';
import { ColorList } from '../../utils/AppConfig';

const uuid = require('react-uuid');

const ListedColor = ColorList.map ( (e) =>
<div key={uuid()} style={{background: e.background}} className="h-32 w-32 rounded-xl grid grid-cols-1" >
  <div className="place-self-center">
    <p>{e.desc}</p>
  </div>
</div>
);


export default function Modal(props:any){
    const {setModal} = props;
    return (
    <div className="bg-gray-300 bg-opacity-80 w-screen h-screen fixed z-10 top-0">
      <div className="container items-center px-5 py-12 lg:px-20">
        <div style={{ backgroundColor: "beige", height: "80vh" }} className="w-full overflow-auto px-5 mx-auto border rounded-lg shadow-xl lg:px-0 text-blueGray-500" aria-hidden="false" aria-describedby="modalDescription" role="dialog">
          <div className="flex items-center justify-end px-6 py-4 ">
            <button onClick={function(){setModal(false);}} className="p-1 transition-colors duration-200 transform rounded-md hover:bg-opacity-25 hover:bg-blueGray-600 focus:outline-none" type="button" aria-label="Close" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-x" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <circle cx="12" cy="12" r="9"></circle>
                <path d="M10 10l4 4m0 -4l-4 4"></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-col w-full mb-12 text-center">
            <h2 className="mb-8 font-semibold tracking-widest text-black uppercase title-font"> Légende </h2>
            <h4 className="text-xs font-semibold tracking-widest text-black uppercase title-font"> Couleurs </h4>
            <div className="mx-auto text-base font-medium leading-relaxed text-blueGray-700 "> 
              <div className="container items-center ">
                <div className="overflow-y-auto border-t whitespace-nowrap scroll-hidden">
                    <ul className="inline-flex items-center list-none gap-2">
                        {ListedColor}
                    </ul>
                </div>
              </div>
            </div>
            <h4 className="text-xs font-semibold tracking-widest text-black uppercase title-font"> Icones </h4>
            <div className="mx-auto text-base font-medium leading-relaxed text-blueGray-700 "> 
              <div className="container items-center ">
                <div className="overflow-y-auto border-t whitespace-nowrap scroll-hidden">
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                        Liste des icones disponible <a target="_blank" rel="noreferrer" href="https://react-icons.github.io/react-icons/icons?name=gi">ici.</a>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}