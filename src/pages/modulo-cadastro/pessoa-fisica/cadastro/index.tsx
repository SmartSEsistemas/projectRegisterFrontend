import { SidebarProps } from '@/@types/sideBar/SideBar';
import CreatePessoaFisicaContainer from '@/Containers/Cadastro/PessoaFisicaCadastroContainer';
import Layout from '@/components/Layout';
import moduloCadastro from '@/components/Sidebar/dataSideBar/moduloCadastro';
import { GetServerSideProps } from 'next';

const CreatePessoaFisica = () => {
  return (
    <>
      <Layout dataSideBar={moduloCadastro}>
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
