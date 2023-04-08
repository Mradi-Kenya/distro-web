import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import SidebarLayout from '../components/layouts/navigation/NavbarLayout';
import { NextPageWithLayout } from './page';

const About: NextPageWithLayout = () => {
  return (
    <section>
      <h1>About</h1>
    </section>
  );
};

export default About;

About.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};