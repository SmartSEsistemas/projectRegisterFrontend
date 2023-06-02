// pages/index.tsx
import { GetServerSideProps } from 'next';
import HomeContainer from '@/Containers/HomeContainer';
import Layout from '@/components/Layout';

// Conteúdo da sua antiga página home

const modulosData = [
  {
    nomeModulo: 'Planejamento',
    submodulos: ['Submodulo 1', 'Submodulo 2', 'Submodulo 3'],
    icone: 'Strategy',
  },
  {
    nomeModulo: 'Gestão Orçamentária e Financeira',
    submodulos: ['Submodulo 1', 'Submodulo 2', 'Submodulo 3'],
    icone: 'CurrencyDollar',
  },
  {
    nomeModulo: 'Materiais',
    submodulos: ['Submodulo 1', 'Submodulo 2', 'Submodulo 3'],
    icone: 'Pencil',
  },
  {
    nomeModulo: 'Recursos Humanos',
    submodulos: ['Submodulo 1', 'Submodulo 2', 'Submodulo 3'],
    icone: 'People',
  },
  {
    nomeModulo: 'Gestão Tributária',
    submodulos: ['Submodulo 1', 'Submodulo 2', 'Submodulo 3'],
    icone: 'FileText',
  },
  {
    nomeModulo: 'Controle Interno',
    submodulos: ['Submodulo 1', 'soskdaokd 2', 'Submodulo 3'],
    icone: 'ShieldCheck',
  },
  {
    nomeModulo: 'Consórcios',
    submodulos: ['Submodulo 1', 'Submodulo 2', 'Submodulo 3'],
    icone: 'Handshake',
  },
  {
    nomeModulo: 'Convênios',
    submodulos: ['Submodulo 1', 'Submodulo 2', 'Submodulo 3'],
    icone: 'Heart',
  },
  {
    nomeModulo: 'Protocolo',
    submodulos: ['Submodulo 1', 'Submodulo 2', 'Submodulo 3'],
    icone: 'Clipboard',
  },
  {
    nomeModulo: 'Cadastro',
    submodulos: ['Submodulo 1', 'Submodulo 2', 'Submodulo 3'],
    icone: 'UserCircle',
  },
];

const HomePage = () => {
  return (
    <>
      <Layout modulosDataArray={modulosData}>
        <HomeContainer />
      </Layout>
    </>
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
