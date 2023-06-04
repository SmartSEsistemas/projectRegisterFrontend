import { ChangeEvent, useContext, useRef, useState } from 'react';
import { ThemeContext } from '@/contexts/ThemeContext';
import { useToast } from '@/hooks/useToast';
import 'react-toastify/dist/ReactToastify.css';
import { z } from 'zod';
import Navbar from '@/components/Navbar/Navbar';
import { TabInfo } from '@/components/FormsWithTabs/FormsWithTabs';
import {
  Alert,
  Container,
  MainContent,
  ModulosContainer,
} from '../../styles/home/styles';
import Form, { Field } from '@/components/Forms/Form';
import Modulos from '@/components/Modulos';
import { Sidebar } from '@/components/Sidebar/SiderBar';
import { ICONS } from '@/utils/Icons';
import { MainContainer } from '@/styles/global';

export interface FieldArray extends Array<Field> {}

const validationSchema = z.object({
  nome: z.string().min(1, 'Nome é obrigatório.'),
  email: z.string().email('Email inválido.'),
});

const validationoOutherSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório.'),
  sobrenome: z.string().min(1, 'Email inválido.'),
  teste: z.string().min(1, 'Email inválido.'),
  test1: z.string().min(1, 'Email inválido.'),
});

const Home = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const { showToast } = useToast();
  const [formValues, setFormValues] = useState({ nome: '', email: '' });

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleMenuClick = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const fields: FieldArray = [
    {
      name: 'nome',
      label: 'Nome',
      type: 'text',
      placeholder: 'Digite seu nome',
      required: true,
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Digite seu email',
      required: true,
    },
  ];

  const tabs: TabInfo[] = [
    {
      label: 'Dados Pessoais',
      fields: [
        {
          name: 'name',
          label: 'Current Password',
          type: 'text',
          required: true,
        },
        {
          name: 'sobrenome',
          label: 'New Password',
          type: 'text',
          required: true,
        }, // ...
      ],
    },
    {
      label: 'Dados Pessoais',
      fields: [
        {
          name: 'teste',
          label: 'Current Passwordadasdas',
          type: 'text',
          required: true,
        },
        {
          name: 'test1',
          label: 'New Passwordasdasdasd',
          type: 'text',
          required: true,
        }, // ...
      ],
    },
  ];

  const modulosData = [
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
  ];

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    console.log(event.target);
    setFormValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (data: Record<string, unknown>) => {
    console.log(data);
  };

  const handleClick = () => {
    toggleTheme();
  };

  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const handlePageClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    // console.log(sidebarRef);
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      setIsSidebarVisible(false);
    }
  };

  return (
    <div onClick={handlePageClick}>
      <MainContainer>
        <Sidebar modulosData={modulosData} />
        <MainContent>
          <Navbar onMenuClick={handleMenuClick} />
          <Container>
            <ModulosContainer>
              {modulosData.map((modulo, index) => {
                const IconeComponent =
                  ICONS[modulo.icone as keyof typeof ICONS];
                return (
                  <Modulos
                    key={index}
                    nomeModulo={modulo.nomeModulo}
                    submodulos={modulo.submodulos}
                    Icone={IconeComponent}
                    theme={theme}
                  />
                );
              })}
            </ModulosContainer>
          </Container>

          <Alert limit={5} />
        </MainContent>
      </MainContainer>
    </div>
  );
};

export default Home;
