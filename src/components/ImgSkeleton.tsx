import React from 'react';

const temp = { className: "", onClick:undefined, alt:""};

export default function ImgSkeleton({src, className=temp.className, onClick=temp.onClick, alt=temp.alt }:any){
    const [load,setLoad] = React.useState(false);
    const imgRef = React.createRef<any>();
    React.useEffect( () => {
        const img = imgRef.current;
        if( img && img.complete){
            load ? null : setLoad(true);
        }
    },[imgRef]);
    
    return (
        <img 
            src={src} ref={imgRef} onLoad={function(){setLoad(true)}}
            className={ load ? className : className+" animate-pulse bg-gray-400" }
            alt={alt} onClick={onClick}
        />
    )
}