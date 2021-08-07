/*
template_exemple = {
    "date": "string",
    "color": "string",
    "icon": "string",
    "h3": "string",
    "h4": "string",
    "p": 'string'
};
*/
import { URL } from '../../utils/AppConfig';

const ObjID = ['date','color','icon','h3','h4','p'];

export function VerifAdd(data:any,setErr:any,setSucc:any){
    let Err:any = '';
    ObjID.forEach(function(e){
        data[e] ? null : Err += e+" ";
    });
    if(Err){
        return ("Erreur: vous devez remplir tous les champs ("+Err+")")
    }else{
        fetch(URL+"timeline/add.php", {
            method: "POST",
            body: JSON.stringify(data)
          })
            .then(data2 => data2.json())
            .then(
                (result) => {console.log(result) ; setSucc("La nouvelle entrée a bien été ajoutée dans la database.") },
                (error) => { console.log(error); setErr("Une erreur c'est produite durant l'envoie des données, plus d'information dans la console."); }
            );
        return ("Ajout de la nouvelle entrée dans la database !");
    }

}

export function VerifEdit(data:any,setErr:any){
    console.log(data);
    fetch(URL+"timeline/edit.php", {
        method: "POST",
        body: JSON.stringify(data)
      })
        .then(data2 => data2.json())
        .then(
            (result) => {console.log(result) ; },
            (error) => { console.log(error); setErr("Une erreur c'est produite durant l'envoie des données, plus d'information dans la console."); }
        );
}