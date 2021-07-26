import React from 'react';
import Form from './form';
import Home from './home';

const Index = () => {
  const [logged,setLogged] = React.useState<boolean>(false);
  switch (logged) {
    case false:
      return <Form setLogged={setLogged} />;
    case true:
      return <Home />
    default:
      return <Form setLogged={setLogged} />;
  }
};

export default Index;