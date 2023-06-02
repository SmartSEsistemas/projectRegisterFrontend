import { ChangeEvent, useContext, useRef, useState } from 'react';
import { ThemeContext } from '@/contexts/ThemeContext';
import { useToast } from '@/hooks/useToast';
import 'react-toastify/dist/ReactToastify.css';
import { z } from 'zod';
import {
  FormWithTabs,
  TabInfo,
} from '@/components/FormsWithTabs/FormsWithTabs';
import Form, { Field } from '@/components/Forms/Form';
import Modulos from '@/components/Modulos';
import { ICONS } from '@/utils/Icons';

import {
  Alert,
  Container,
  DivButtons,
  MainContent,
  ModulosContainer,
} from './styles';
import { Button } from '@/components/Buttons/Button';

export type FieldArray = Array<Field>;

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

function Home() {
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
      icone: 'UserCircle',
      router: '/cadastro',
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
    console.log(sidebarRef);
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      setIsSidebarVisible(false);
    }
  };

  return (
    <>
      {/* <div>
        <Navbar
          onMenuClick={handleMenuClick}
          isSidebarVisible={isSidebarVisible}
        />
        {isSidebarVisible && (
          <div ref={sidebarRef}>
            <Sidebar modulosData={modulosData} />
          </div>
        )}
      </div> */}

      <MainContent isSidebarVisible={isSidebarVisible}>
        {/* <DivButtons >
          <Button variant="primary" onClick={() => showToast("Alert Success", "success")}>
            Primary
          </Button>
          <Button variant="light" onClick={() => showToast("Alert Error", "error")}>
            Light
          </Button>
          <Button variant="lightGray" onClick={() => showToast("Alert Info", "info")}>
            LightGray
          </Button>
          <Button variant="secondary" onClick={() => showToast("Alert Aviso", "warn")}>
            Secondary
          </Button>
          <Button variant="warning" onClick={handleClick}>
            Warning
          </Button>
          <Button variant="danger" onClick={handleClick}>
            Danger
          </Button>

        </DivButtons>



        <FormWithTabs
          tabs={tabs}
          onSubmit={handleSubmit}
          buttonVariant="primary"
          validationSchema={validationoOutherSchema}
        />  */}

        {/* <Button variant="primary" onClick={handleClick}>
          Change theme
        </Button> */}

        <DivButtons>
          <Button
            variant="primary"
            onClick={() =>
              showToast('Alert sdjhausgduaydyugayudasdg', 'success')
            }
          >
            Primary
          </Button>
          <Button
            variant="light"
            onClick={() => showToast('Alert Error', 'error')}
          >
            Light
          </Button>
          <Button
            variant="lightGray"
            onClick={() => showToast('Alert Info', 'info')}
          >
            LightGray
          </Button>
          <Button
            variant="secondary"
            onClick={() => showToast('Alert Aviso', 'warn')}
          >
            Secondary
          </Button>
          <Button variant="warning" onClick={handleClick}>
            Warning
          </Button>
          <Button variant="danger" onClick={handleClick}>
            Danger
          </Button>
        </DivButtons>

        <Form
          fields={fields.map((field) => ({ ...field, onChange: handleChange }))}
          onSubmit={handleSubmit}
          buttonVariant="primary"
          validationSchema={validationSchema}
        />

        <FormWithTabs
          tabs={tabs}
          onSubmit={handleSubmit}
          buttonVariant="primary"
          validationSchema={validationoOutherSchema}
        />

        <Container>
          <ModulosContainer>
            {modulosData.map((modulo, index) => {
              const IconeComponent = ICONS[modulo.icone as keyof typeof ICONS];
              return (
                <Modulos
                  key={index}
                  nomeModulo={modulo.nomeModulo}
                  submodulos={modulo.submodulos}
                  Icone={IconeComponent}
                  theme={theme}
                  routers={modulo.router}
                />
              );
            })}
          </ModulosContainer>
        </Container>

        <Alert limit={5} />
      </MainContent>
    </>
  );
}

export default Home;
