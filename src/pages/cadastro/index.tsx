import { SidebarProps } from '@/@types/sideBar/SideBar';
import DataTable from '@/components/DataTable';
import Layout from '@/components/Layout';
import { Container, TitlePage } from '@/styles/global';

const ModuloCadastro = () => {
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

  const data = [
    {
      id: 1,
      name: 'John Doe',
      age: 25,
      email: 'john.doe@example.com',
      cpf: '000.000.000-00',
      rg: '0000000',
      endereco: 'Brasil',
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 30,
      email: 'jane.smith@example.com',
      cpf: '000.000.000-00',
      rg: '0000000',
      endereco: 'Brasil',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      age: 35,
      email: 'bob.johnson@example.com',
      cpf: '000.000.000-00',
      rg: '0000000',
      endereco: 'Brasil',
    },
    {
      id: 4,
      name: 'John Doe',
      age: 205,
      email: 'john.doe@example.com',
      cpf: '000.000.000-00',
      rg: '0000000',
      endereco: 'Brasil',
    },
    {
      id: 5,
      name: 'Jane Smith',
      age: 300,
      email: 'jane.smith@example.com',
      cpf: '000.000.000-00',
      rg: '0000000',
      endereco: 'Brasil',
    },
    {
      id: 6,
      name: 'Bob Johnson',
      age: 305,
      email: 'bob.johnson@example.com',
      cpf: '000.000.000-00',
      rg: '0000000',
      endereco: 'Brasil',
    },
    {
      id: 7,
      name: 'John Doe',
      age: 251,
      email: 'john.doe@example.com',
      cpf: '000.000.000-00',
      rg: '0000000',
      endereco: 'Brasil',
    },
    {
      id: 8,
      name: 'Jane Smith',
      age: 310,
      email: 'jane.smith@example.com',
      cpf: '000.000.000-00',
      rg: '0000000',
      endereco: 'Brasil',
    },
    {
      id: 9,
      name: 'Bob Johnson',
      age: 325,
      email: 'bob.johnson@example.com',
      cpf: '000.000.000-00',
      rg: '0000000',
      endereco: 'Brasil',
    },
    {
      id: 10,
      name: 'John Doe',
      age: 250,
      email: 'john.doe@example.com',
      cpf: '000.000.000-00',
      rg: '0000000',
      endereco: 'Brasil',
    },
    {
      id: 11,
      name: 'Jane Smith',
      age: 320,
      email: 'jane.smith@example.com',
      cpf: '000.000.000-00',
      rg: '0000000',
      endereco: 'Brasil',
    },
    {
      id: 12,
      name: 'Bob Johnson',
      age: 395,
      email: 'bob.johnson@example.com',
      cpf: '000.000.000-00',
      rg: '0000000',
      endereco: 'Brasil',
    },
    {
      id: 13,
      name: 'John Doe',
      age: 205,
      email: 'john.doe@example.com',
      cpf: '000.000.000-00',
      rg: '0000000',
      endereco: 'Brasil',
    },
    {
      id: 14,
      name: 'Jane Smith',
      age: 330,
      email: 'jane.smith@example.com',
      cpf: '000.000.000-00',
      rg: '0000000',
      endereco: 'Brasil',
    },
    {
      id: 15,
      name: 'Bob Johnson',
      age: 305,
      email: 'bob.johnson@example.com',
      cpf: '000.000.000-00',
      rg: '0000000',
      endereco: 'Brasil',
    },
    {
      id: 16,
      name: 'John Doe',
      age: 205,
      email: 'john.doe@example.com',
      cpf: '000.000.000-00',
      rg: '0000000',
      endereco: 'Brasil',
    },
    {
      id: 17,
      name: 'Jane Smith',
      age: 130,
      email: 'jane.smith@example.com',
      cpf: '000.000.000-00',
      rg: '0000000',
      endereco: 'Brasil',
    },
    {
      id: 18,
      name: 'Bob Johnson',
      age: 135,
      email: 'bob.johnson@example.com',
      cpf: '000.000.000-00',
      rg: '0000000',
      endereco: 'Brasil',
    },
    {
      id: 19,
      name: 'John Doe',
      age: 125,
      email: 'john.doe@example.com',
      cpf: '000.000.000-00',
      rg: '0000000',
      endereco: 'Brasil',
    },
    {
      id: 20,
      name: 'Jane Smith',
      age: 930,
      email: 'jane.smith@example.com',
      cpf: '000.000.000-00',
      rg: '0000000',
      endereco: 'Brasil',
    },
    {
      id: 21,
      name: 'Bob Johnson',
      age: 935,
      email: 'bob.johnson@example.comaaaaaaaaaaaaaaaaaaaaaaa',
      cpf: '000.000.000-00',
      rg: '0000000',
      endereco: 'Brasil',
    },
    {
      id: 22,
      name: 'John Doe',
      age: 925,
      email: 'john.doe@example.com',
      cpf: '000.000.000-00',
      rg: '0000000',
      endereco: 'Brasil',
    },
    {
      id: 23,
      name: 'Jane Smith',
      age: 930,
      email: 'jane.smith@example.com',
      cpf: '000.000.000-00',
      rg: '0000000',
      endereco: 'Brasil',
    },
    {
      id: 24,
      name: 'Bob Johnson',
      age: 635,
      email: 'bob.johnson@example.com',
      cpf: '000.000.000-00',
      rg: '0000000',
      endereco: 'Brasil',
    },
  ];

  const columns = [
    { name: 'id', width: '10%' },
    { name: 'name', width: '25%' },
    { name: 'age', width: '10%' },
    { name: 'email', width: '25%' },
    { name: 'cpf', width: '20%' },
    // { name: 'rg', width: '150px' },
    // { name: 'endereco', width: '200px' },
  ];

  return (
    <Layout dataSideBar={modulosData}>
      <Container>
        <TitlePage>Lista de pessoas Físicas</TitlePage>
        <DataTable data={data} columns={columns} />
      </Container>
    </Layout>
  );
};

export default ModuloCadastro;
