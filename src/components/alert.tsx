import React from 'react';

/*
  API:
    type: fail ou null
    message: <string>
*/

function Success(props:any){
  const {message} = props;
  const [show,setShow] = React.useState(true);
  if(!show){return null}

  return (
    <div className="container items-center px-5 py-12 lg:px-20">
    <div className="w-full text-green-600 border rounded-lg shadow-xl ">
      <div className="flex items-center justify-between px-6 py-4 mx-auto ">
        <div className="flex">
          <svg xmlns="http://www.w3.org/2000/svg" className="mr-4 icon icon-tabler icon-tabler-circle-check" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="12" cy="12" r="9"></circle>
            <path d="M9 12l2 2l4 -4"></path>
          </svg>
          <p className="text-sm font-semibold tracking-wide uppercase ">
            <strong>Note:</strong> { message }
          </p>
        </div>
        <button 
          onClick={function(){ setShow(false) }}
          className="p-1 transition-colors duration-200 transform rounded-md hover:bg-opacity-25 hover:bg-blueGray-600 focus:outline-none" type="button" aria-label="Close" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-x" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="12" cy="12" r="9"></circle>
            <path d="M10 10l4 4m0 -4l-4 4"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
  )
}

function Failure(props:any){
  const {message} = props
  const [show,setShow] = React.useState(true);
  if(!show){return null}
  return (
    <div className="container items-center px-5 py-12 lg:px-20">
    <div className="w-full text-red-600 border rounded-lg shadow-xl ">
      <div className="flex items-center justify-between px-6 py-4 mx-auto ">
        <div className="flex">
          <svg xmlns="http://www.w3.org/2000/svg" className="mr-4 icon icon-tabler icon-tabler-alert-triangle" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="12" cy="12" r="9"></circle>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
            <polyline points="11 12 12 12 12 16 13 16"></polyline>
          </svg>
          <p className="text-sm font-semibold tracking-wide uppercase ">
            <strong>Erreur:</strong> { message }
          </p>
        </div>
        <button 
          onClick={function(){ setShow(false) }}
          className="p-1 transition-colors duration-200 transform rounded-md hover:bg-opacity-25 hover:bg-blueGray-600 focus:outline-none" type="button" aria-label="Close" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-x" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="12" cy="12" r="9"></circle>
            <path d="M10 10l4 4m0 -4l-4 4"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
  )
}

export default function Alert(props:any){
  const { type, message } = props;
  if(type === "fail"){
    return <Failure message={message} />
  }
  return <Success message={message} />
}