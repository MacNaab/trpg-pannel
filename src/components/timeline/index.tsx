import React from 'react';
import Timeline from './loader';
import Modal from './modal';
import { FiSettings } from "react-icons/fi";


const Example2 = () => {
    const [ismodal, setModal] = React.useState(false);
    function AffModal(){
        if(ismodal){return <Modal setModal={setModal} />;}else{return <></>}
    }
  return (
    <div>
      <div>
        <AffModal />
      </div>
      <div>
        <button type="button" onClick={function(){setModal(true);}} className="float-right">
            <FiSettings size={30} />
        </button>
      </div>
      <div className="bg-gradient-to-br from-green-500 to-purple-800">
        <Timeline />
      </div>
    </div>
    
  );
};

export default Example2;