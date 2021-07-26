import React from 'react';
import{ URL } from '../../utils/AppConfig';
import ReactJsonViewer from 'react-json-view';

export default function JsonView(props:any){
    const [json_object,set_json_object] = React.useState<any>(null);
    const [isLoad,setLoad] = React.useState(false);
    const [src,setSrc] = React.useState('');
    const loadJson = (event:any) => {
        const {value} = event.target;
        isLoad ? null : setLoad(true);
        setSrc(value+".json");
        fetch(URL+value+".json").then( res => res.json() ).then( (data:any) => { set_json_object(data); setLoad(false) }, (error) => { console.log(error); alert('Une erreur est survenu, consultez la console pour plus d\'informations') })
    };

    return (
        <div>
<div className="m-5 flex justify-center gap-10">
  <span 
    className="p-3 border rounded-md cursor-pointer hover:border-gray-800 hover:bg-gray-100"
    onClick={function(){props.setMenu('menu')}}
>
    Retour au Menu principal
  </span>

  <span 
    className="p-3 border rounded-md cursor-pointer bg-green-500 hover:border-green-800 hover:bg-green-600"
    onClick={function(){
      console.log(json_object,src);
      const output = {
        href: src,
        data: json_object
      };
    fetch(URL+"update.php", {
        method: "POST",
        body: JSON.stringify(output)
      })
        .then(data => data.json())
        .then(
            (result) => {console.log(result) ; },
            (error) => { console.log(error); alert ("Une erreur c'est produite durant l'envoie des données, plus d'information dans la console."); }
        );
    }}
>
  Valider les changements
  </span>
</div>
<div className="m-5">
  <select className="w-48 rounded border p-1 m-auto flex" onChange={loadJson} defaultValue="" disabled={isLoad} >
    <option value="" disabled>Sélectionnez une base de donnée</option>
    <option value="timeline/data">Timeline</option>
    <optgroup label="Cartes">
        <option value="map/c">Continent</option>
        <option value="map/k">Korath</option>
        <option value="map/s">Skellige</option>
        <option value="map/t">Toussaint</option>
        <option value="map/z">Zerrikanie</option>
    </optgroup>
  </select>
</div>
<div className="m-5">
{
    json_object ? <ReactJsonViewer 
      src={json_object} theme="google" iconStyle="square"
      onEdit={
        (e:any) => { set_json_object( e.updated_src ); }
      }
      onDelete={
        (e:any) => {  set_json_object( e.updated_src );}
      }
      onAdd={
        (e:any) => { set_json_object( e.updated_src );}
      }
    /> : null
  }
</div>

        </div>
    )
}