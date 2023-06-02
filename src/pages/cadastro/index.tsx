import Layout from '@/components/Layout';

const ModuloCadastro = () => {
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
  return (
    <Layout modulosDataArray={modulosData}>
      <h1>Cadastro</h1>
    </Layout>
  );
};

export default ModuloCadastro;
