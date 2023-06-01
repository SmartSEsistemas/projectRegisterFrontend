import { z } from 'zod';
import { cpf as validateCPF, cnpj as validateCNPJ } from 'cpf-cnpj-validator';
import FormularioLogin, { Field } from '@/components/FormLogin/FormLogin';
import {
  Container,
  FormContainer,
  FormContainerWidth,
  ImageContainer,
  ImageLogin,
  ImageWrapper,
} from './styles';
import { EntityNameList } from '@/@types/entity/Entity';
import { useMemo, useState } from 'react';
import { GET_ENTITY_NAMES } from '@/api/entity/entity';
import useFetch from '@/hooks/useFetch';
import { GET_TOKEN } from '@/api/login/login';
import { UserLogin } from '@/@types/login/UserLogin';
import { setLocalStorage } from '@/utils/localStorage';
import { useRouter } from 'next/router';
export interface FieldArray extends Array<Field> {}

interface ListSelect {
  label: string;
  value: string;
}

const Login = () => {
  const { error, data, loading, request } = useFetch<{ token: string }>();
  const [err, setErr] = useState({ error: false, message: '' });
  const [entityNameList, setEntityNameList] = useState<ListSelect[]>([]);
  const router = useRouter();

  useMemo(async () => {
    try {
      const { options, url } = GET_ENTITY_NAMES('db1');
      const res = await fetch(url, options);
      const { entity_name_list }: EntityNameList = await res.json();
      setEntityNameList(
        entity_name_list.map((name) => ({ label: name, value: name })),
      );
    } catch (error) {
      setErr({ error: true, message: 'Erro ao pegar no das entidades.' });
    }
  }, []);

  const isCPForCNPJ = (value: string): boolean => {
    return validateCPF.isValid(value) || validateCNPJ.isValid(value);
  };

  const handleSubmit = async (data: Record<string, unknown>) => {
    data.year = Number(data.year);

    const userLogin: UserLogin = {
      document: data.document as string,
      password: data.password as string,
      year: data.year as number,
      entity: data.entity as string,
    };

    const { options, url } = GET_TOKEN(userLogin, 'db1');
    const { json, response } = await request(url, options);
    if (response && response.ok) {
      router.push('/');
      setLocalStorage('token', json.token);
    }
  };

  const validationSchema = z.object({
    document: z.string().refine((value) => isCPForCNPJ(value), {
      message: 'CPF ou CNPJ inválido',
    }),
    password: z
      .string()
      .min(6, { message: 'Senha deve ter no mínimo 6 caracteres' }),
    year: z.string().min(1, { message: 'Selecione uma opção' }),
    entity: z.string().min(1, { message: 'Selecione uma opção' }),
  });

  const fields: FieldArray = [
    {
      name: 'document',
      label: 'CPF ou CNPJ',
      type: 'text',
      placeholder: 'Digite seu CPF ou CNPJ',
      required: true,
    },
    {
      name: 'password',
      label: 'Senha',
      type: 'password',
      placeholder: 'Digite sua senha',
      required: true,
    },
    {
      name: 'year',
      label: 'Selecione o ano desejado',
      type: 'select',
      required: true,
      options: [
        { label: '2025', value: '2025' },
        { label: '2024', value: '2024' },
        { label: '2023', value: '2023' },
        { label: '2022', value: '2022' },
        { label: '2021', value: '2021' },
        { label: '2020', value: '2020' },
        { label: '2019', value: '2019' },
        { label: '2018', value: '2018' },
        { label: '2017', value: '2017' },
        { label: '2016', value: '2016' },
        { label: '2015', value: '2015' },
        { label: '2014', value: '2014' },
        { label: '2013', value: '2013' },
        { label: '2012', value: '2012' },
        { label: '2011', value: '2011' },
        { label: '2010', value: '2010' },

        // ...
      ],
    },
    {
      name: 'entity',
      label: 'Selecione a entidade',
      type: 'select',
      required: true,
      options: [...entityNameList],
    },
  ];

  return (
    <Container>
      <FormContainer>
        <FormContainerWidth>
          <FormularioLogin
            fields={fields}
            buttonVariant='primary'
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          />
        </FormContainerWidth>
      </FormContainer>
      <ImageContainer>
        <ImageWrapper>
          <ImageLogin src='/loginT.svg' alt='Imagem 1' />
        </ImageWrapper>
      </ImageContainer>
    </Container>
  );
};

export default Login;
