import { SidebarProps } from '@/@types/sideBar/SideBar';
import CreatePessoaFisicaContainer from '@/Containers/Cadastro/PessoaFisicaCadastroContainer';
import Layout from '@/components/Layout';
import { GetServerSideProps } from 'next';

const CreatePessoaFisica = () => {
  const modulosData: SidebarProps = {
    data: [
      {
        nomeModulo: 'Planejamento',
        submodulos: [
          { name: 'Submodulo 1', link: '/sub1' },
          { name: 'Submodulo 2', link: '/sub2' },
          { name: 'Submodulo 3', link: '/sub3' },
          { name: 'Submodulo 4', link: '/sub4' },
          { name: 'Submodulo 5', link: '/sub5' },
          { name: 'Submodulo 6', link: '/sub6' },
        ],
        icone: 'Strategy',
      },
      {
        nomeModulo: 'Gestão Orçamentária e Financeira',
        submodulos: [
          { name: 'Submodulo 1', link: '/sub1' },
          { name: 'Submodulo 2', link: '/sub2' },
          { name: 'Submodulo 3', link: '/sub3' },
        ],
        icone: 'CurrencyDollar',
      },
      {
        nomeModulo: 'Materiais',
        submodulos: [
          { name: 'Submodulo 1', link: '/sub1' },
          { name: 'Submodulo 2', link: '/sub2' },
          { name: 'Submodulo 3', link: '/sub3' },
        ],
        icone: 'Pencil',
      },
      {
        nomeModulo: 'Recursos Humanos',
        submodulos: [
          { name: 'Submodulo 1', link: '/sub1' },
          { name: 'Submodulo 2', link: '/sub2' },
          { name: 'Submodulo 3', link: '/sub3' },
        ],
        icone: 'People',
      },
      {
        nomeModulo: 'Gestão Tributária',
        submodulos: [
          { name: 'Submodulo 1', link: '/sub1' },
          { name: 'Submodulo 2', link: '/sub2' },
          { name: 'Submodulo 3', link: '/sub3' },
        ],
        icone: 'FileText',
      },
      {
        nomeModulo: 'Controle Interno',
        submodulos: [
          { name: 'Submodulo 1', link: '/sub1' },
          { name: 'Submodulo 2', link: '/sub2' },
          { name: 'Submodulo 3', link: '/sub3' },
        ],
        icone: 'ShieldCheck',
      },
      {
        nomeModulo: 'Consórcios',
        submodulos: [
          { name: 'Submodulo 1', link: '/sub1' },
          { name: 'Submodulo 2', link: '/sub2' },
          { name: 'Submodulo 3', link: '/sub3' },
        ],
        icone: 'Handshake',
      },
      {
        nomeModulo: 'Convênios',
        submodulos: [
          { name: 'Submodulo 1', link: '/sub1' },
          { name: 'Submodulo 2', link: '/sub2' },
          { name: 'Submodulo 3', link: '/sub3' },
        ],
        icone: 'Heart',
      },
      {
        nomeModulo: 'Protocolo',
        submodulos: [
          { name: 'Submodulo 1', link: '/sub1' },
          { name: 'Submodulo 2', link: '/sub2' },
          { name: 'Submodulo 3', link: '/sub3' },
        ],
        icone: 'Clipboard',
      },
      {
        nomeModulo: 'Cadastro',
        submodulos: [
          { name: 'Submodulo 1', link: '/sub1' },
          { name: 'Submodulo 2', link: '/sub2' },
          { name: 'Submodulo 3', link: '/sub3' },
        ],
        icone: 'UserCircle',
      },
    ],
  };

  return (
    <>
      <Layout dataSideBar={modulosData}>
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
