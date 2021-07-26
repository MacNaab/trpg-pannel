import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import Admin from '../components/admin/index';

const Index = () => {  
  return (
    <Main
      meta={
        <Meta
          title="Admin"
          description="Menu d'administrateur pour la gestion des bases de données."
        />
      }
    >
      <Admin />
    </Main>
  );
};

export default Index;