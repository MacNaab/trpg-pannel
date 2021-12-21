/*
template_exemple = {
    position: [0,0],
    icon: string,
    img: string,
    titre: string,
    description: string
};
*/
import { URL } from '../../../utils/AppConfig';

const ObjID = ['icon','img','titre','description'];

export function VerifAdd(id:any,body:any,data:any,position:any,setErr:any,setSucc:any){
    let Err:any = '';
    id ? null : Err += "MapID ";
    body ? null : Err+="Layer ";
    ObjID.forEach(function(e){
        data[e] ? null : Err += e+" ";
    });
    position ? data.position = position :  Err+="position ";
    if(Err){
        setErr("vous devez remplir tous les champs ("+Err+")")
    }else{
        const output = {
            id: id,
            body: body,
            data: data
        };
        fetch(URL+"map/add.php", {
            method: "POST",
            body: JSON.stringify(output)
          })
            .then(dataload => dataload.json())
            .then(
                (result) => {console.log(result) ; setSucc("Nouveau Marker ajouté dans la base de donnée.") },
                (error) => { console.log(error); setErr("Une erreur c'est produite durant l'envoie des données, plus d'information dans la console."); }
            );
    }

}

export function VerifEdit(id:any,body:any,data:any,setErr:any,setSucc:any){
    const output = {
        id: id,
        body: body,
        data: data
    };
    fetch(URL+"map/edit.php", {
        method: "POST",
        body: JSON.stringify(output)
      })
        .then(dataload => dataload.json())
        .then(
            (result) => {console.log(result) ; setSucc("Edition du Marker réussite.") },
            (error) => { console.log(error); setErr("Une erreur c'est produite durant l'envoie des données, plus d'information dans la console."); }
        );
}