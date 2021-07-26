import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import Map from '../components/map/index';

const About = () => (
  <Main meta={<Meta title="Carte intéractive" description="Carte(s) intéractive(s) de la campagne." />}>
    <Map />
  </Main>
);

export default About;
