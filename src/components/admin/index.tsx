import React from 'react';
import Menu from './menu';
import User from './user';
import Json from './load';
import IsAdmin from './component/isAdmin';

export default function Admin(){
    const [menu,setMenu] = React.useState('');
    switch (menu) {
        case 'menu':
            return (<Menu setMenu={setMenu} />);
        case 'json':
            return (<Json setMenu={setMenu} />);

        case 'user':
            return (<User setMenu={setMenu} />);
        default:
            return (<IsAdmin setMenu={setMenu} />);
    }
}