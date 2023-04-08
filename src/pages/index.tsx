import { NextPageWithLayout } from './page';
import Header from '@/components/header/Header';
import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout';
import NavbarLayout from '@/components/layouts/navigation/NavbarLayout';

const Home: NextPageWithLayout = () => {
  return (
   <main>
   </main>
  );
};
export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <NavbarLayout>{page}</NavbarLayout>
      <Header />
    </PrimaryLayout>
  );
};
