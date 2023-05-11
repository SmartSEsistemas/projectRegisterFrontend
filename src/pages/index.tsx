// pages/index.tsx
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const IndexPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/home');
  }, []);

  return null; // você pode retornar um elemento de carregamento aqui, se quiser
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.writeHead(302, { Location: '/home' });
  context.res.end();

  return { props: {} };
};

export default IndexPage;
