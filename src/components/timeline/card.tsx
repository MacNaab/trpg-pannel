import React from 'react';
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { GrEdit } from 'react-icons/gr';
import 'react-quill/dist/quill.snow.css';
import { VerifEdit } from './export';
import { ColorList } from '../../utils/AppConfig';
import * as GameIcons from 'react-icons/gi';

const uuid = require('react-uuid');

const ReactQuill = typeof window === 'object' ? require('react-quill') : () => false;

const ColorItems = ColorList.map( (e) => <option key={uuid()} >{e.id}</option> );
const IconItems = Object.keys(GameIcons).map( (e) => <option key={uuid()}>{e}</option>  );

export default function Card(props:any){
    const {e, isAdmin, setErr} = props;
    const [isEdit,setEdit] = React.useState(false);
    const [data,setData] = React.useState<any>(e);
    const [SavedData,setSavedData] = React.useState<any>(e);

    function handleChange (event:any) {
        if(event.target){
            const { value } = event.target;
            let name
            if(event.target.name){
                name = event.target.name;
                setData({ ...data, [name]:value });
            }
        }
    }
    function handleQuillChange (value:any){
        setData({ ...data, p:value });
    }

    let findColor = ColorList.find( f => f.id === SavedData.color);
    if(findColor === undefined){findColor = {id: "bleu", desc: "Quête", background: "rgb(33, 150, 243)", "borderRight": "7px solid  rgb(33, 150, 243)"};}
    const StyleColor = {
      "contentStyle": { "background": findColor.background, "color": "#fff", "textAlign": "justify" as "justify" },
      "contentArrowStyle": { "borderRight": findColor.borderRight },
      "iconStyle": { "background": findColor.background, "color": "#fff" },
    };

    const NGame:any = GameIcons;
    const GetKeyValue:any = Object.keys(GameIcons).includes(SavedData.icon) ? NGame[SavedData.icon] : NGame.GiPerspectiveDiceSixFacesRandom ;

    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={StyleColor.contentStyle}
            contentArrowStyle={StyleColor.contentArrowStyle}
            date={SavedData.date}
            iconStyle={StyleColor.iconStyle}
            icon={<GetKeyValue />}
        >
            {
                isAdmin ? (
<div className="float-right cursor-pointer p-1 mb-1" title="Éditer la Carte" >
    <GrEdit onClick={function(){ isEdit ? (setEdit(false),setData(SavedData)) : setEdit(true) }} />
</div>
                ) : null
            }
<h3 className="vertical-timeline-element-title">
    {isEdit ? <input
        className="appearance-none my-1 rounded-md shadow-sm -space-y-px relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        placeholder="Titre"
        value={data.h3}
        onChange={handleChange}
        name="h3"
    /> : (SavedData.h3) }
</h3>
<h4 className="vertical-timeline-element-subtitle">
    {isEdit ? <input
        className="appearance-none my-1 rounded-md shadow-sm -space-y-px relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        placeholder="Sous-Titre"
        value={data.h4}
        onChange={handleChange}
        name="h4"
    /> : (SavedData.h4) }
</h4>
<div>
    {isEdit ? <ReactQuill theme="snow" value={data.p} onChange={handleQuillChange} placeholder="Description ..." /> : (
        <div dangerouslySetInnerHTML={{__html:SavedData.p}}></div>
    ) }
</div>
{
    isEdit ? (
        <div className="mx-auto leading-relaxed "> 
            <div className="flex gap-5 m-auto mt-3">
                <select name="color" value={data.color} className="w-52 rounded text-black" onChange={handleChange} >
                  <option disabled>Couleur</option>
                  {ColorItems}
                </select>
                <select name="icon" value={data.icon} className="w-52 rounded text-black" onChange={handleChange} >
                  <option disabled>Icon</option>
                  {IconItems}
                </select>
            </div>
        </div>
    ) : null
}
<p>
{ isEdit ? ( 
    <button type="button"
        className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        onClick={function(){
            VerifEdit(data,setErr);
            setSavedData(data);
            setEdit(false);
        }}
    >
        Valider
    </button>) : null } 
</p>
        </VerticalTimelineElement>
    )
}