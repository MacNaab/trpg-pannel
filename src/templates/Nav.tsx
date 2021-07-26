import React from 'react';
import Link from 'next/link';
import { Nav } from '../utils/AppConfig';

const uuid = require('react-uuid');
const NavList = Nav.map( (e) => 
    <li className="mr-6" key={uuid()}>
        <Link href={e.href} passHref>
            <a className="px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black ">
                {e.name}
            </a>
        </Link>
    </li>
);

export default function NavBar(){
  const [Logged, setLogged] = React.useState(false);
  const [isAdmin, setAdmin] = React.useState(false);
  React.useEffect( () => {
    const local = localStorage.getItem("PJ");
    if(local){
      setLogged(true);
      if(local === "admin"){setAdmin(true);}
    }
  });
  const Log = () => {
    if(localStorage.getItem("PJ")){
      // Se déconnecter
      localStorage.removeItem("PJ");
    }else{
      // Se connecter
      window.location.replace(location.origin);
    }
  }
    return (       
      <div className="container items-center ">
        <div className="text-blueGray-700 rounded-lg">
          <div className="flex flex-col flex-wrap p-5 mx-auto md:items-center md:flex-row">
            <a className="pr-2 lg:pr-8 lg:px-6 focus:outline-none">
              <div className="inline-flex items-center">
                <div className="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-purple-500 to-purple-800">
                </div>
                <h2 className="block p-2 text-xl font-medium tracking-tighter text-black transition duration-500 ease-in-out transform cursor-pointer hover:text-blueGray-500 lg:text-x lg:mr-8"> { Logged ? localStorage.getItem("PJ") : 'TRPG' } </h2>
              </div>
            </a>
            <nav className="flex flex-wrap items-center justify-center text-base md:mr-auto">
              <ul className="items-center inline-block list-none md:inline-flex">
                {NavList}
                {
                  isAdmin ? (
                    <li className="mr-6">
                      <Link href="/admin" passHref>
                        <a className="px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black ">
                          Admin
                        </a>
                      </Link>
                    </li>
                  ) : (null)
                }
              </ul>
            </nav>
            <button onClick={Log} className="w-auto px-8 py-2 my-2 text-base font-medium text-white transition duration-500 ease-in-out transform bg-blue-600 border-blue-600 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:b-gblue-700 "> { Logged ? 'Se déconnecter' : 'Se connecter' }  </button>
          </div>
        </div>
      </div>
    )
}