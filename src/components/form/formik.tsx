import React from 'react';
import MDP from './mdp';
import NC from './nom';
import Alert from './alert';
import {URL} from '../../utils/AppConfig';

export default function Formik(props:any) {
  const [form, setForm] = React.useState({
    nc: 'test', mdp: 'test'
  });
  const [error, setError] = React.useState(false);
  const [errList, setErrList] = React.useState<string>('');
  const [DataForm, setDataForm] = React.useState<any>([]);

  React.useEffect( () => {
    const local = localStorage.getItem("PJ");
    if(local){props.setLogged(true);}
    fetch(URL+'user/data.json').then(res => res.json()).then( (data) => { setDataForm(data); }, (err) => { console.log(err);alert("Une erreur est survenue, consultez la console pour plus d'informations.");})
  },[]);

  const verifID = () => {
    const find = DataForm.find( (e:any) => e.nc === form.nc);
    if(find){
      if(find.mdp === form.mdp){
        localStorage.setItem('PJ', form.nc);
        setError(false);
        props.setLogged(true);
      }else{
        setError(true);
        setErrList("Mauvais mot de passe.");
      }
    }else{
      setError(true);
      setErrList("Pas d'utilisateur à ce nom.");
    }
  }

  function Alerted(){
    if(error){
      return <Alert err={errList} setError={setError} />;
    }else{
      return <></>;
    }
  }
    
  return (
<div>  
  <Alerted />
  <section className="flex flex-col items-center h-screen md:flex-row">
    <div className="container mx-auto">
      <div className="flex justify-center px-2 py-6 ">
        <div className="flex w-full rounded-lg lg:shadow-xl ">
          <div className="relative hidden w-full h-auto bg-white bg-cover border-r rounded-l-lg lg:block lg:w-6/12">
            <div className="relative z-10 m-12 text-left ">
              <a className="flex items-center mb-4 font-medium text-blueGray-900 title-font md:mb-10">
                <div className="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-purple-500 to-purple-800">
                </div>
                <h2 className="text-lg font-bold tracking-tighter text-black uppercase transition duration-500 ease-in-out transform hover:text-lightBlack-500 dark:text-lightBlue-400"> TRPG-PANNEL </h2>
              </a>
              <h2 className="mt-12 mb-2 text-2xl font-semibold tracking-tighter text-black sm:text-3xl title-font"> Connexion </h2>
              <div className="w-full mt-16 mb-8 text-base leading-relaxed text-blueGray-900 sm:md:w-3/3 lg:text-1xl text-justify ">
                Site pour la gestion cartographique et chronologique de campagne The Witcher TRPG.
              </div>
            </div>
          </div>
          <div className="w-full px-8 py-24 bg-white rounded-lg border-blueGray-100 lg:w-8/12 lg:px-24 lg:py-4 lg:rounded-l-none s">
            <div className="relative z-10 text-left ">
              <div className="mt-6">
                <NC form={form} setForm={setForm} />
                <MDP form={form} setForm={setForm} />
                <button type="button" disabled={ DataForm[0] ? false : true } onClick={verifID} className="block w-full px-4 py-3 mt-6 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg bg-gradient-to-r from-black hover:from-black to-black focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 hover:to-black">
                  Se connecter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  </section>
</div>
  );
}