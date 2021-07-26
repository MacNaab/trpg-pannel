import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import Frise from '../components/timeline/index';

const Index = () => {  
  return (
    <Main
      meta={
        <Meta
          title="Frise"
          description="Frise chronologique de la campagne !"
        />
      }
    >
      <Frise />
    </Main>
  );
};

export default Index;