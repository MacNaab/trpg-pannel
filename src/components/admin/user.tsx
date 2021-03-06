import React from 'react';
import Row from './component/row';
import { URL } from '../../utils/AppConfig';
import NewUser from './component/newUser';
import AlertTW from '../alert';

const uuid = require('react-uuid');

export default function User(props:any){
  const [dataBase,setDataBase] = React.useState<any>([]);
  const [err,setErr] = React.useState<any>(false);
  const [succ,setSucc] = React.useState<any>(false);

  const Rows = dataBase.map( (e:any) =>
    <>
      { dataBase[0] ? <Row e={e} key={uuid()} setSucc={setSucc} setErr={setErr} /> : null }
    </>
  );

  function Alerted(){
    if(err){
      return <AlertTW type="fail" message={err} />
    }else if(succ){
      return <AlertTW message={err} />
    }
    return null
  }

  React.useEffect( () => {
    fetch(URL+"user/data.json", {cache: "no-store"}).then( res => res.json() ).then( (data:any) => { setDataBase(data); }, (error) => { console.log(error); setErr('Une erreur est survenu, consultez la console pour plus d\'informations') })
  },[]);
    return (
<div>
<Alerted />
<div className="m-5">
  <span 
    className="p-3 border rounded-md cursor-pointer hover:border-gray-800 hover:bg-gray-100"
    onClick={function(){ props.setMenu('menu') }}
>
    Retour au Menu principal
  </span>
</div>

<NewUser />

<div className="flex flex-col m-5">
  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Utilisateur
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Mot de passe
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {Rows}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>    

</div>

    )
}