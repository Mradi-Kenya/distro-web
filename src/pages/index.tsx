import { NextPageWithLayout } from './page';
import BaseTemplate from '@/components/templates/base/BaseTemplate';
import { mockBaseTemplateProps } from '@/components/templates/base/BaseTemplate.mocks';
import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout';
import NavbarLayout from '@/components/layouts/navigation/NavbarLayout';

const Home: NextPageWithLayout = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold text-blue-500">Home</h1>
    </section>
  );
}
export default Home;

Home.getLayout = (page) => {
  return(
    <PrimaryLayout>
      <NavbarLayout>
        {page}
      </NavbarLayout>
    </PrimaryLayout>
  );
}
