import React from 'react';
import { Triangle } from "react-rounder/Triangle";

export default function IsAdmin(props:any){
    const [isLoad,setLoad] = React.useState(false);
    React.useEffect( () => {
        const userID = localStorage.getItem('PJ');
        if(userID === 'admin'){
            props.setMenu('menu');
        }else{
            setLoad(true);
        }
    },[]);
    return (        
        <section className="text-blueGray-700 ">
        <div className="container flex flex-col items-center px-5 py-8 mx-auto">
          <div className="flex flex-col w-full mb-12 text-left ">
            <div className="w-full mx-auto lg:w-1/2">
              <h1 className="mx-auto mb-12 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font">
                   { isLoad ? ( "C'est bien essayé mais vous n'êtes pas admin ! ") : null } 
              </h1>
              <h2 className="mx-auto mb-4 text-xl font-semibold leading-none tracking-tighter text-black title-font"> 
                   { isLoad ? null : "Chargement ..."}
                </h2>
              <div className="m-12">
                <div className="m-auto w-0" ><Triangle size={50} color='green' /></div>
              </div>
              {
                  isLoad ? (
                    <p className="mx-auto text-base text-justify font-medium leading-relaxed text-blueGray-700 ">
                        Vous savez, moi je ne crois pas qu’il y ait de bonne ou de mauvaise situation. Moi, si je devais résumer ma vie aujourd’hui avec vous, je dirais que c’est d’abord des rencontres. Des gens qui m’ont tendu la main, peut-être à un moment où je ne pouvais pas, où j’étais seul chez moi. Et c’est assez curieux de se dire que les hasards, les rencontres forgent une destinée... Parce que quand on a le goût de la chose, quand on a le goût de la chose bien faite, le beau geste, parfois on ne trouve pas l’interlocuteur en face je dirais, le miroir qui vous aide à avancer. Alors ça n’est pas mon cas, comme je disais là, puisque moi au contraire, j’ai pu : et je dis merci à la vie, je lui dis merci, je chante la vie, je danse la vie... je ne suis qu’amour ! Et finalement, quand beaucoup de gens aujourd’hui me disent « Mais comment fais-tu pour avoir cette humanité ? », et bien je leur réponds très simplement, je leur dis que c’est ce goût de l’amour ce goût donc qui m’a poussé aujourd’hui à entreprendre une construction mécanique, mais demain qui sait ? Peut-être simplement à me mettre au service de la communauté, à faire le don, le don de soi...
                        <br />
                        - Alain Chabat
                    </p>
                  ) : null
              }
            </div>
          </div>
        </div>
      </section>
    )
}