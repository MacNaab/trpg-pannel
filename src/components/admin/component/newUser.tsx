import React from 'react';
import { URL } from '../../../utils/AppConfig';
import AlertTW from '../../alert';

export default function NewUser(){
    const [form,setForm] = React.useState({
        nc: '',
        mdp:'',
        role:'PJ',
    });
    const handleChange = (event:any) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]:value});
    }

    const [err,setErr] = React.useState<any>(false);
    const [succ,setSucc] = React.useState<any>(false);

    function Alerted(){
      if(err){
        return <AlertTW type="fail" message={err} />
      }else if(succ){
        return <AlertTW message={err} />
      }
      return null
    }

    return (
      <>
        <Alerted />
        <section className="text-blueGray-700 ">
        <div className="container items-center px-5 lg:px-20">
          <div className="flex flex-col w-full p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-white border rounded-lg lg:w-4/6 md:w-3/4 md:mt-0">
            <div className="relative">
                <h4>Ajouter Un Nouvel Utilisateur</h4>
            </div>
            <div className="relative mt-4">
              <label className="text-base leading-7 text-blueGray-500">Nom d'utilisateur</label>
              <input
                name="nc" onChange={handleChange} value={form.nc} placeholder="Nom d'utilisateur"  
                className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
              />
            </div>
            <div className="relative mt-4">
              <label className="text-base leading-7 text-blueGray-500">Mot de passe</label>
              <input 
                name="mdp" onChange={handleChange} value={form.mdp} placeholder="Mot de passe"
                className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
              />
            </div>
            <div className="flex">
              <label className="flex m-auto">
                <select className="w-40 border rounded p-1" name="role" onChange={handleChange} value={form.role} >
                  <option>MJ</option>
                  <option>PJ</option>
                </select>
              </label>
            </div>
            <button 
                type="button"
                className="w-1/2 m-auto px-16 py-2 my-2 text-base text-white transition duration-500 ease-in-out transform bg-blue-600 border-blue-600 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800 "
                onClick={function(){
                    fetch(URL+"user/add.php", {
                        method: "POST",
                        body: JSON.stringify(form)
                      })
                        .then(data => data.json())
                        .then(
                            (result) => {console.log(result); setSucc('Nouvel Utilisateur Ajout?? dans la Base de donn??e !') ; },
                            (error) => { console.log(error); setErr("Une erreur c'est produite durant l'envoie des donn??es, plus d'information dans la console."); }
                        );
                }}
            > Ajouter </button>
          </div>
        </div>
      </section>
      </>
    )
}