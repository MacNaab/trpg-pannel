import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main_form';
import Formik from '../components/form/formik';

const Index = (props:any) => {  
  return (
    <Main
      meta={
        <Meta
          title="Connection"
          description="Connectez-vous pour profiter des fonctions !"
        />
      }
    >
      <Formik setLogged={props.setLogged} />
    </Main>
  );
};

export default Index;