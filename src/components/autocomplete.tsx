import React, { useState } from "react";

const uuid = require('react-uuid');

/*
API:
  [input,setInput]
  suggestions
  placeholder: <string>
  type: icon || color
*/

const Autocomplete = (props:any) => {
  const { input, setInput } = props;
  const [active, setActive] = useState(0);
  const [filtered, setFiltered] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [value, setValue] = useState<any>({
    icon: false,
    color: 'black'
  });
  
  const onChange = (e:any) => {
    const { suggestions } = props;
    const input2 = e.currentTarget.value;
    const newFilteredSuggestions = suggestions.filter(
      (suggestion:any) =>
        suggestion.name.toLowerCase().indexOf(input2.toLowerCase()) > -1
    );
    setActive(0);
    setFiltered(newFilteredSuggestions);
    setIsShow(true);
    setInput(e.currentTarget.value)
  };
const onClick = (e:any) => {
    setActive(0);
    setFiltered([]);
    setIsShow(false);
    setInput(e.currentTarget.innerText)
    const findItem = props.suggestions.find( (f:any) => f.name === e.currentTarget.innerText);
    setValue(findItem);
  };
const onKeyDown = (e:any) => {
    if (e.keyCode === 13) { // enter key
      setActive(0);
      setIsShow(false);
      setInput(filtered[active])
    }
    else if (e.keyCode === 38) { // up arrow
      return (active === 0) ? null : setActive(active - 1);
    }
    else if (e.keyCode === 40) { // down arrow
      return (active - 1 === filtered.length) ? null : setActive(active + 1);
    }
    return null;
  };
const renderAutocomplete = () => {
    if (isShow && input) {
      if (filtered.length) {
        return (
          <ul
           className="absolute z-10 mt-2 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
          >
            {filtered.map((suggestion:any) => {
              return (
                <li 
                className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9"
                key={uuid()} onClick={onClick}>
                  <div className="flex items-center">
                    {
                      suggestion.icon ? ( 
                        <suggestion.icon size={25} /> 
                      ) : ( 
                        <span className="flex-shrink-0 h-6 w-6 rounded-full"
                        style={{backgroundColor: suggestion.color }} /> 
                      )
                    }
                    <span className="font-normal ml-3 block truncate">
                      {suggestion.name}
                    </span>
                  </div>
                  
                </li>
              );
            })}
          </ul>
        );
      } else {
        return (
          <div className="no-autocomplete">
            <em>Aucun rÃ©sultat</em>
          </div>
        );
      }
    }
    return <></>;
  }
return (
    <div className="mt-1 relative">
      <button type="button" className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
      <span className="flex items-center">
        {
          value.icon ? ( 
            <value.icon  size={25} /> 
          ) : ( 
            <span className="flex-shrink-0 h-6 w-6 rounded-full"
              style={{backgroundColor: value.color }} 
            /> 
          )
        }
        <input 
          type="text"
          className="ml-3 block truncate ml-3 block truncate relative w-full rounded-md pl-3 pr-10 py-2 text-left focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder={props.placeholder}
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={input}
        />
      </span>
      <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </span>
    </button>
      {renderAutocomplete()}
    </div>
  );
}
export default Autocomplete;