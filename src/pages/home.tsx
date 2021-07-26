import React from 'react';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { Jelly } from "react-rounder/index";
import { FcTimeline } from 'react-icons/fc';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { GrUserAdmin } from 'react-icons/gr';
import Link from 'next/link';

const uuid = require('react-uuid');

const List = [
  {href: './map', bg: "bg-gradient-to-br from-blue-500 to-indigo-300", icon: <FaMapMarkedAlt size={50} className="m-auto cursor-pointer"  />, h2: "Carte interactive", p: "Cartes interactives du Monde. Vous pouvez sélectionnez un marqueur pour afficher plus de détails. "},
  {href: './frise', bg: "bg-gradient-to-br from-pink-300 to-red-500", icon: <FcTimeline size={60} className="m-auto cursor-pointer" />, h2: "Frise chronologique", p: "Remémorez les éléments marquants de votre aventure ! Code couleur et légende iconographique disponible. "}
];
const Listed = List.map( (e) =>
<div key={uuid()} className={"w-full mx-auto my-4 bg-white border rounded-lg shadow-xl lg:w-1/3 "+e.bg}>
    <div className="p-6 text-center">
      <div className="flex-shrink-0 object-cover object-center w-16 h-16 mx-auto -mt-12 rounded-full shadow-xl bg-white">
        <Link href={e.href} passHref >
          {e.icon}
        </Link>
      </div>
      <h2 className="pt-4 mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font"> {e.h2} </h2>
      <h4 className="mb-8 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font "> Note </h4>
      <p className="mb-3 text-base leading-relaxed text-blueGray-500"> {e.p} </p>
      <p></p>
  </div>
</div>
)

function About(){
  const [Logged, setLogged] = React.useState(false);
  const [isAdmin, setAdmin] = React.useState(false);

  React.useEffect( () => {
    const local = localStorage.getItem("PJ");
    if(local){
      setLogged(true);
      local === "admin" ? setAdmin(true) : null;
    }
  },[]);

  return (
    <Main meta={<Meta title="Menu principal" description="Menu principal" />}>
      <div className="pt-16 pb-8 max-w-screen-md mx-auto">
        <div className="font-bold text-3xl text-gray-900">
          Bienvenue { Logged ? localStorage.getItem("PJ") : '' }
        </div>
        <div className="text-xl">Faites votre sélection.</div>
      </div>
   
      <section className="text-blueGray-700 ">
        <div className="container items-center px-5 py-8 mx-auto">
          <div className="flex mb-12 text-center">
            {Listed}
            {
              isAdmin ? (
<div className="w-full mx-auto my-4 bg-white border rounded-lg shadow-xl lg:w-1/3 bg-gradient-to-br from-yellow-500 to-green-500">
              <div className="p-6 text-center">
                <div className="flex-shrink-0 object-cover object-center w-16 h-16 mx-auto -mt-12 rounded-full shadow-xl bg-white">
                  <Link href="./admin" passHref >
                    <GrUserAdmin size={50} className="m-auto cursor-pointer" />
                  </Link>
                </div>
                <h2 className="pt-4 mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font"> Menu Admin </h2>
                <h4 className="mb-8 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font "> Note </h4>
                <p className="mb-3 text-base leading-relaxed text-blueGray-500">
                  Menu "caché" d'administrateur du site. Permet d'afficher et d'éditer les différentes bases de données.
                </p>
                <p></p>
              </div>
            </div>
              ) : null
            }
            </div>
        </div>
      </section>
  
        <div className="m-auto w-0">
          <Jelly size={40} color="orange" />
        </div>
    </Main>
  );
}


export default About;
