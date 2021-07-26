import React from 'react';
import { URL } from '../../../utils/AppConfig';

export default function Row(props:any){
    const { e } = props;
    const [ form,setForm ] = React.useState(e);
    const [ saveForm, setSaveForm ] = React.useState(e);
    const [ isEdit,setEdit ] = React.useState(false);

    const handleChange = (event:any) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]:value});
    }

    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-bold text-gray-900">
                    {
                        isEdit ? (
                            <input className="border rounded p-1" value={form.nc} name='nc' onChange={handleChange} />
                        ):(
                            saveForm.nc
                        )
                    }
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                    {
                        isEdit ? (
                            <input className="border rounded p-1" value={form.mdp} name='mdp' onChange={handleChange} />
                        ):(
                            saveForm.mdp
                        )
                    }
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap font-bold">
                {
                    isEdit ? (
                        <input className="border rounded" value={form.role} name='role' onChange={handleChange} />
                    ):(
                        saveForm.role === "MJ" ? (
                            <span className="text-purple-800">MJ</span>
                        ) : (
                            <span className="text-green-600">PJ</span>
                        )
                    )
                }
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                {
                    isEdit ? (
                        <span
                            className="text-green-600 hover:text-green-900 cursor-pointer"
                            onClick={function(){ 
                                setSaveForm(form);
                                isEdit ? setEdit(false) : setEdit(true);
                                const dataSend = {
                                    data: form,
                                    id: e.nc
                                };
                                fetch(URL+"user/update.php", {
                                    method: "POST",
                                    body: JSON.stringify(dataSend)
                                  })
                                    .then(data => data.json())
                                    .then(
                                        (result) => {console.log(result); alert('Nouvel Utilisateur Ajouté dans la Base de donnée !') ; },
                                        (error) => { console.log(error); alert ("Une erreur c'est produite durant l'envoie des données, plus d'information dans la console."); }
                                    );
                            }}
                        >Valider</span>
                    ) : ( 
                        <span
                            className="text-indigo-600 hover:text-indigo-900 cursor-pointer"
                            onClick={function(){ isEdit ? setEdit(false) : setEdit(true) }}
                        >Editer</span>
                    )
                }
            </td>
        </tr>
    )
}