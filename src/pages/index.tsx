// pages/index.tsx
import { GetServerSideProps } from 'next';
import HomeContainer from '@/Containers/HomeContainer';
import Layout from '@/components/Layout';

const HomePage = () => {
  return (
    <Layout>
      <HomeContainer />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const isAuthenticated = true;

  // Você deve substituir esta função de acordo com a sua lógica de autenticação.

  if (!isAuthenticated) {
    context.res.writeHead(302, { Location: '/login' });
    context.res.end();
  }

  return { props: {} };
};

export default HomePage;
