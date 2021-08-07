import React from 'react';
import {AiOutlineEdit} from 'react-icons/ai';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { VerifEdit } from './export';
import MarkerIcon from './markerIcon';
import ImgSkeleton from '../../ImgSkeleton';
import { CSS_COLOR_NAMES } from '../../../utils/AppConfig';

const uuid = require('react-uuid');

const MarkerIconList = MarkerIcon.map( (e:any) => 
  <option key={uuid()} value={e.id}>
    {e.id}
  </option>
);
const MarkerIconColorList = CSS_COLOR_NAMES.map( (e:any) => 
  <option key={uuid()} value={e}>
    {e}
  </option>
);

export default function Card(props:any){
    const { setErr, setSucc, markerData } = props;
    const [isEdit,setEdit] = React.useState(false);
    const [form,setForm] = React.useState({
        position: markerData.position,
        icon: markerData.icon,
        iconColor: markerData.iconColor ? markerData.iconColor : "black",
        img: markerData.img,
        titre: markerData.titre,
        description: markerData.description
    });
    const [SaveForm,setSaveForm] = React.useState({
        position: markerData.position,
        icon: markerData.icon,
        iconColor: markerData.iconColor ? markerData.iconColor : "black",
        img: markerData.img,
        titre: markerData.titre,
        description: markerData.description
    });
    const handleChange = (event:any) => {
        if(event.target){
            const {value,name} = event.target;
            setForm({...form, [name]:value});
        }
    }
    const handleQuillChange = (value:any) => {
        setForm({...form, description:value});        
    }

    return (
<div className="w-full mx-auto">
    <div className="rounded-xl bg-blueGray-50">
        {
            props.userID === "admin" ? (
                <button type="button" onClick={function(){isEdit ? setEdit(false) : setEdit(true)}} className="float-right rounded-full hover:bg-gray-100 hover:border-gray-500 hover:p-1 ">
                    <AiOutlineEdit className="m-auto" />
                </button>
            ) : null
        }
        {
            isEdit ? (
                <>
                    <img className="object-cover object-center w-full lg:h-48 md:h-36 rounded-xl" src={form.img} alt="erreur" />
                    <input onChange={handleChange} value={form.img} name="img" className="w-full mb-4 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Image (URL)" />
                </>
            ) : (
                <ImgSkeleton
                    className="object-cover object-center w-full mb-4 lg:h-48 md:h-36 rounded-xl"
                    src={SaveForm.img}
                />
            )
        }
        <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-black title-font">
            { isEdit ? ( 
                <input onChange={handleChange} value={form.titre} name="titre" className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Titre" />
             ) : ( SaveForm.titre ) } 
        </h1>
        <div className="mx-auto text-justify text-base font-medium leading-relaxed text-blueGray-700 ">
            { isEdit ? ( 
                <ReactQuill theme="snow" 
                    onChange={handleQuillChange}
                    value={form.description}
                    placeholder="Description"
                />
             ) : ( <p dangerouslySetInnerHTML={{__html:SaveForm.description}}  ></p> ) } 
        </div>
        {
            isEdit ? (
<div className="m-2">
    <select defaultValue={form.icon} name="icon" onChange={handleChange} className="p-1 flex m-auto" >
        <option disabled>Type de Marker</option>
        {MarkerIconList}
    </select>
    <select defaultValue={form.iconColor} name="iconColor" onChange={handleChange} className="p-1 flex m-auto" >
        <option disabled>Couleur du Marker</option>
        {MarkerIconColorList}
    </select>
</div>    
            ) : ( null )
        }
        <p className="mx-auto text-justify text-base font-medium leading-relaxed text-blueGray-700 ">
            { isEdit ? ( 
                <button  type="button"
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  onClick={function(){
                      setSaveForm(form);
                      VerifEdit(localStorage.getItem("MapID"),props.bodyCard ? props.bodyCard : "Commun",form,setErr,setSucc);
                      setEdit(false);
                    }}
                >
                    Valider
                </button>
             ) : null } 
        </p>
    </div>
</div>
    )
}