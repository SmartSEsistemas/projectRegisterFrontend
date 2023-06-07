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
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 30,
      email: 'jane.smith@example.com',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      age: 35,
      email: 'bob.johnson@example.com',
    },
    {
      id: 4,
      name: 'John Doe',
      age: 205,
      email: 'john.doe@example.com',
    },
    {
      id: 5,
      name: 'Jane Smith',
      age: 300,
      email: 'jane.smith@example.com',
    },
    {
      id: 6,
      name: 'Bob Johnson',
      age: 305,
      email: 'bob.johnson@example.com',
    },
    {
      id: 7,
      name: 'John Doe',
      age: 251,
      email: 'john.doe@example.com',
    },
    {
      id: 8,
      name: 'Jane Smith',
      age: 310,
      email: 'jane.smith@example.com',
    },
    {
      id: 9,
      name: 'Bob Johnson',
      age: 325,
      email: 'bob.johnson@example.com',
    },
    {
      id: 10,
      name: 'John Doe',
      age: 250,
      email: 'john.doe@example.com',
    },
    {
      id: 11,
      name: 'Jane Smith',
      age: 320,
      email: 'jane.smith@example.com',
    },
    {
      id: 12,
      name: 'Bob Johnson',
      age: 395,
      email: 'bob.johnson@example.com',
    },
    {
      id: 13,
      name: 'John Doe',
      age: 205,
      email: 'john.doe@example.com',
    },
    {
      id: 14,
      name: 'Jane Smith',
      age: 330,
      email: 'jane.smith@example.com',
    },
    {
      id: 15,
      name: 'Bob Johnson',
      age: 305,
      email: 'bob.johnson@example.com',
    },
    {
      id: 16,
      name: 'John Doe',
      age: 205,
      email: 'john.doe@example.com',
    },
    {
      id: 17,
      name: 'Jane Smith',
      age: 130,
      email: 'jane.smith@example.com',
    },
    {
      id: 18,
      name: 'Bob Johnson',
      age: 135,
      email: 'bob.johnson@example.com',
    },
    {
      id: 19,
      name: 'John Doe',
      age: 125,
      email: 'john.doe@example.com',
    },
    {
      id: 20,
      name: 'Jane Smith',
      age: 930,
      email: 'jane.smith@example.com',
    },
    {
      id: 21,
      name: 'Bob Johnson',
      age: 935,
      email: 'bob.johnson@example.comaaaaaaaaaaaaaaaaaaaaaaa',
    },
    {
      id: 22,
      name: 'John Doe',
      age: 925,
      email: 'john.doe@example.com',
    },
    {
      id: 23,
      name: 'Jane Smith',
      age: 930,
      email: 'jane.smith@example.com',
    },
    {
      id: 24,
      name: 'Bob Johnson',
      age: 635,
      email: 'bob.johnson@example.com',
    },
  ];

  const columns = ['id', 'name', 'age', 'email', 'email', 'email', 'email'];

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
