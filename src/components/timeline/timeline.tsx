import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GrAdd } from 'react-icons/gr';
import NewTimeline from './new';
import Card from './card';
import { URL } from '../../utils/AppConfig';
import AlertTW from '../alert';

const uuid = require('react-uuid');

const Example2 = () => {
  const [isAdmin,setAdmin] = React.useState(false);
  const [isAdded,setAdeed] = React.useState(false);
  const [List,setList] = React.useState<any>([]);
  const [err,setErr] = React.useState<any>(false);
  const [succ,setSucc] = React.useState<any>(false);

  React.useEffect( () => {
    const userID = localStorage.getItem("PJ");
    if(userID){
      if(userID==="admin"){
        setAdmin(true);
      }
    }
    // load data
    fetch(URL+"timeline/data.json", {cache: "no-store"})
      .then(res => res.json() )
      .then(
        (result) => { setList(result); },
        (error) => { console.log("Erreur lors du chargement des données:",error); setErr('Une erreur est survenu durant le chargement de la base de donnée. Consulter la console pour plus d\'informations.'); }
        )
  },[]);
  const Listed = List.map( (e:any) => {
    return (<Card key={uuid()} e={e} isAdmin={isAdmin} setErr={setErr} />);
  }
  );
  function AddTimeline(){
    if(isAdmin){
      return (
        <div
          onClick={function(){ isAdded ? setAdeed(false) : setAdeed(true) }}
          className="cursor-pointer"
          title="Ajouter une Carte"
        >
          <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(51, 255, 224)', color: '#fff' }}
          icon={<GrAdd />}
        ></VerticalTimelineElement> 
        </div>
        
      )
    }else{return null}
  }
  function IsNewTime(){
    if(isAdded){
      return <NewTimeline setAdeed={setAdeed} setErr={setErr} setSucc={setSucc} />
    }else{return null;}
  }
  
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
      <IsNewTime />
      <VerticalTimeline>
        <AddTimeline />
        {Listed}
      </VerticalTimeline>
      { List[0] ? null : "Chargement..." }
    </>
  );
};

export default Example2;