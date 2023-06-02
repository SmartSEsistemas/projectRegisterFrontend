import CreatePessoaFisicaContainer from '@/Containers/PessoaFisicaCadastroContainer';
import Layout from '@/components/Layout';
import { GetServerSideProps } from 'next';

const CreatePessoaFisica = () => {
  const modulosData = [
    {
      nomeModulo: 'Planejamento',
      submodulos: ['Submodulo 1', 'Submodulo 2', 'Submodulo 3'],
      icone: 'Strategy',
    },
  ];

  return (
    <>
      <Layout modulosDataArray={modulosData}>
        <CreatePessoaFisicaContainer />
      </Layout>
    </>
  );
};

export default CreatePessoaFisica;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const isAuthenticated = true;

  // Você deve substituir esta função de acordo com a sua lógica de autenticação.

  if (!isAuthenticated) {
    context.res.writeHead(302, { Location: '/login' });
    context.res.end();
  }

  return { props: {} };
};
