import {GiScrollQuill, GiDeathSkull, GiDoubleDragon , GiMedievalPavilion , GiMonsterGrasp, GiDungeonGate, GiSwordsEmblem, GiDiceFire, GiBeerStein, GiPrayer, GiCampfire, GiForest } from "react-icons/gi";

const IconList = [
    {id: "Aléatoire", icon: <GiDiceFire size={30} className="m-auto" />}, 
    {id: "Camp", icon: <GiCampfire size={30} className="m-auto" />}, 
    {id: "Combat", icon: <GiSwordsEmblem size={30} className="m-auto" />},
    {id: "Donjon", icon: <GiDungeonGate size={30} className="m-auto" />},
    {id: "Dragon", icon: <GiDoubleDragon size={30} className="m-auto" />},
    {id: "Forêt", icon: <GiForest size={30} className="m-auto" />}, 
    {id: "Quête", icon: <GiScrollQuill size={30} className="m-auto" />}, 
    {id: "Monstre", icon: <GiMonsterGrasp size={30} className="m-auto" />}, 
    {id: "Mort", icon: <GiDeathSkull size={30} className="m-auto" />}, 
    {id: "Player", icon: <GiPrayer size={30} className="m-auto" />},  
    {id: "Taverne", icon: <GiBeerStein size={30} className="m-auto" />},    
    {id: "Urbain", icon: <GiMedievalPavilion size={30} className="m-auto" />},  
];

export default IconList;