import React from 'react';
import { ColorList } from '../../utils/AppConfig';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { VerifAdd } from './export';
import AutoComplete from '../autocomplete';
import GameIconList from '../gameIconList';
import * as GameIcons from 'react-icons/gi';

const uuid = require('react-uuid');

const ColorItems = ColorList.map( (e) => <option key={uuid()} >{e.id}</option> );

export default function Modal(props:any){
    const {setAdeed, setErr, setSucc} = props;
    const [p, setP] = React.useState('');
    const [color, setColor] = React.useState<any>('white');
    const [icon, setIcon] = React.useState<any>(null);
    const [form, setForm] = React.useState<any>({h3:'',h4:'',date:'',color:'',icon:''});
    const [isAdd, setAdd] = React.useState<any>(null);

    const ChangeIcon = (value:any) => {
      setForm({ ...form, icon:value});
      const NGame:any = GameIcons;
      const GetKeyValue:any = Object.keys(GameIcons).includes(value) ? NGame[value] : NGame.GiPerspectiveDiceSixFacesRandom ;
      setIcon(<GetKeyValue size={50} />)
    };
    const ChangeColor = (event:any) => {
      const { value } = event.target;
      const find = ColorList.find( e => e.id === value);
      setForm({ ...form, color:value});
      find ? setColor(find.background) : null;
    };
    const handleChange = (event:any) => {
      const {name,value} = event.target;
      setForm({ ...form, [name]:value});
    }

    return (
    <div className="bg-gray-300 bg-opacity-80 w-screen h-screen fixed z-10 top-0">
      <div className="container items-center px-5 py-12 lg:px-20">
        <div style={{ backgroundColor: "beige", height: "80vh" }} className="w-full overflow-auto px-5 mx-auto border rounded-lg shadow-xl lg:px-0 text-blueGray-500" aria-hidden="false" aria-describedby="modalDescription" role="dialog">
          <div className="flex items-center justify-end px-6 py-4 ">
            <button onClick={function(){setAdeed(false);}} className="p-1 transition-colors duration-200 transform rounded-md hover:bg-opacity-25 hover:bg-blueGray-600 focus:outline-none" type="button" aria-label="Close" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-x" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <circle cx="12" cy="12" r="9"></circle>
                <path d="M10 10l4 4m0 -4l-4 4"></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-col w-full mb-12 text-center">
            <h2 className="mb-8 font-semibold tracking-widest text-black uppercase title-font"> nouvelle entrée </h2>
            <h4 className="text-xs font-semibold tracking-widest text-black uppercase title-font"> Description </h4>
            <div className="mx-10 text-base font-medium leading-relaxed text-blueGray-700 "> 
              <div className="grid grid-cols-3 gap-4 mt-2">
                <div>
                  <input
                    className="appearance-none rounded-md shadow-sm -space-y-px relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Date"
                    value={form.date}
                    name="date"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    className="appearance-none rounded-md shadow-sm -space-y-px relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Titre"
                    value={form.h3}
                    name="h3"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    className="appearance-none rounded-md shadow-sm -space-y-px relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Sous-titre"
                    value={form.h4}
                    name="h4"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mt-2 mb-3" >
                <ReactQuill theme="snow" value={p} onChange={setP} placeholder="Description ..." />
              </div>
            </div>
            <div className="mx-auto text-base font-medium leading-relaxed text-blueGray-700 "> 
              <div className="flex gap-5 m-auto">
                <select defaultValue="Couleur" className="w-52 rounded" onChange={ChangeColor} >
                  <option disabled>Couleur</option>
                  {ColorItems}
                </select>
                <div className="w-10 h-10 rounded-lg" style={{backgroundColor: color}} >
                </div>
              </div>
              <div className="flex gap-5 m-auto mt-3">
                <AutoComplete
                  input={form.icon} setInput={ChangeIcon}
                  suggestions={GameIconList} placeholder="Icone"
                />
                <div className="w-10 h-10 rounded-lg pl-1 pt-1" >
                  { icon }
                </div>
              </div>
            </div>
            <div className="mx-auto text-base font-medium leading-relaxed mt-3 ">
              <button type="button"
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  onClick={function(){ 
                    const r = VerifAdd({
                      date: form.date,
                      color: form.color,
                      icon: form.icon,
                      h4: form.h4,
                      h3: form.h3,
                      p: p
                    },setErr,setSucc);
                    setAdd(r);
                }}
              >
                Ajouter
              </button>
            </div>
            <div  className="mx-auto text-base font-medium leading-relaxed mt-3 ">
              {isAdd}
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}