import { z } from 'zod';
import { cpf as validateCPF, cnpj as validateCNPJ } from 'cpf-cnpj-validator';
import {
  Container,
  FormContainer,
  FormContainerWidth,
  ImageContainer,
  ImageLogin,
  ImageWrapper,
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
  BottomButtonContainer,
  CheckboxContainer,
  CheckboxInput,
  CheckboxLabel,
  ContainerDiv,
  ContainerTitle,
  CreateAccount,
  ForgotPassword,
  Form,
  FormContainerLogin,
  Input,
  Label,
  Span,
  Title,
  ErrorMessage,
} from '../../styles/login/styles';
import { Button } from '@/components/Buttons/Button';
import { useContext, useEffect, useMemo, useState } from 'react';
import { ThemeContext } from '@/contexts/ThemeContext';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formatCPFOrCNPJ } from '@/utils/Formattes';
import { Info } from '@phosphor-icons/react';
import Select from 'react-select';
import { ThemeProvider } from 'styled-components';
import useFetch from '@/hooks/useFetch';
import { GET_ENTITY_NAMES } from '@/api/entity/entity';
import { EntityNameList } from '@/@types/entity/Entity';
import { useRouter } from 'next/router';
import { UserLogin } from '@/@types/login/UserLogin';
import { GET_TOKEN } from '@/api/login/login';
import { setLocalStorage } from '@/utils/localStorage';
import { useToast } from '@/hooks/useToast';

export interface FieldArray extends Array<Field> {}
interface Field {
  name: string;
  label: string;
  placeholder?: string;
  type: string;
  required: boolean;
  options?: { label: string; value: string }[]; // para dropdown
}

interface ListSelect {
  label: string;
  value: string;
}

const Login = () => {
  const { showToast } = useToast();
  const { theme } = useContext(ThemeContext);
  const [isClient, setIsClient] = useState(false);
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
      showToast('Erro ao pegar dados das entidades.', 'error');
    }
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const validationSchema = z.object({
    document: z.string().refine((value) => isCPForCNPJ(value), {
      message: 'CPF ou CNPJ inválido',
    }),
    password: z
      .string()
      .min(6, { message: 'Senha deve ter no mínimo 6 caracteres' }),
    entity: z.string().min(1, { message: 'Selecione uma opção' }),
    year: z.string().min(1, { message: 'Selecione uma opção' }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    trigger,
  } = useForm({
    mode: 'onChange',
    resolver: zodResolver(validationSchema),
  });

  const handleInputChangeCPForCNPJ = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = event.target;
    if (name === 'document') {
      const formattedValue = formatCPFOrCNPJ(value);
      setValue(name, formattedValue, {
        shouldValidate: true,
        shouldDirty: true,
      });
    } else {
      setValue(name, value, { shouldValidate: true, shouldDirty: true });
    }
  };

  const isCPForCNPJ = (value: string): boolean => {
    return validateCPF.isValid(value) || validateCNPJ.isValid(value);
  };

  const handleSubmitData = async (data: Record<string, unknown>) => {
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
    if (error.value) showToast(error.Message, 'error');
  };

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
      name: 'entity',
      label: 'Unidade Gestora',
      type: 'select',
      placeholder: 'Selecione a unidade gestora',
      required: true,
      options: [...entityNameList],
    },
    {
      name: 'year',
      label: 'Selecione o ano desejado',
      type: 'select',
      placeholder: 'Selecione o ano desejado',
      required: true,
      options: [
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
  ];

  return (
    <Container>
      <FormContainer>
        <FormContainerWidth>
          <Form onSubmit={handleSubmit(handleSubmitData)} theme={theme}>
            <AvatarRoot>
              <AvatarImage
                src='https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
                alt='Colm Tuite'
              />
              <AvatarFallback delayMs={600}>CT</AvatarFallback>
            </AvatarRoot>

            <ContainerTitle>
              <Title>Olá, bem-vindo de volta</Title>
            </ContainerTitle>

            {fields.map((field, index) => {
              const isLast = index === fields.length - 1;
              const hasError = !!errors[field.name];

              return (
                <ContainerDiv key={field.name} isLast={isLast}>
                  <Label htmlFor={field.name}>{field.label}:</Label>

                  {field.type === 'select' && isClient ? (
                    <ThemeProvider theme={theme}>
                      <Select
                        {...register(field.name)}
                        options={field.options?.map((option) => ({
                          value: option.value,
                          label: option.label,
                        }))}
                        isSearchable={true}
                        name={field.name}
                        placeholder={field.placeholder}
                        onChange={(option) =>
                          setValue(field.name, option ? option.value : '')
                        }
                        onBlur={() => trigger(field.name)}
                        styles={{
                          control: (provided, state) => {
                            return {
                              ...provided,
                              height: '48px',
                              borderColor: state.isFocused
                                ? theme.primary
                                : theme.borderColor,
                              boxShadow: state.isFocused
                                ? `0 0 5px ${theme.primary}`
                                : 'none',
                              '&:hover': {
                                borderColor: 'none',
                              },
                              backgroundColor:
                                theme.theme === 'dark'
                                  ? '#2A3042'
                                  : theme.light,
                              color: 'red',
                              marginBottom: '8px',
                            };
                          },
                          container: (provided, state) => ({
                            ...provided,
                            width: '100%',
                          }),
                          menu: (provided, state) => ({
                            ...provided,
                            boxShadow: 'none',
                            width: '100%',
                            marginTop: 0,
                          }),
                          option: (provided, state) => ({
                            ...provided,
                            backgroundColor: state.isSelected
                              ? theme.primary
                              : 'transparent',
                            color: state.isSelected ? '#fff' : '#000',
                            '&:hover': {
                              backgroundColor: theme.secondary,
                              color: '#fff',
                            },
                          }),
                          placeholder: (provided, state) => ({
                            ...provided,
                            color:
                              theme.theme === 'dark' ? '#A6B0CF' : '#495057',
                            opacity: 0.5,
                            fontWeight: 400,
                          }),
                          singleValue: (provided, state) => ({
                            ...provided,
                            color: theme.theme === 'dark' ? '#fff' : '#000',
                            fontWeight: 400,
                          }),
                        }}
                      />
                    </ThemeProvider>
                  ) : (
                    <Input
                      {...register(field.name)}
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      required={field.required}
                      placeholder={field.placeholder}
                      hasError={hasError}
                      onChange={handleInputChangeCPForCNPJ}
                    />
                  )}

                  {/* Aqui estamos exibindo a mensagem de erro quando existir */}
                  {hasError && (
                    <ErrorMessage>
                      {' '}
                      <Info color='red' size={14} />{' '}
                      {errors[field.name]?.message as string}
                    </ErrorMessage>
                  )}
                </ContainerDiv>
              );
            })}

            <FormContainerLogin
              style={{
                display: 'flex',
                width: '100%',
                marginBottom: 9,
                justifyContent: 'space-around',
              }}
            >
              <CheckboxContainer>
                <CheckboxInput type='checkbox' />
                <CheckboxLabel>Me manter logado</CheckboxLabel>
              </CheckboxContainer>
              <ForgotPassword href={'/home'}>
                Esqueci minha senha?
              </ForgotPassword>
            </FormContainerLogin>

            <BottomButtonContainer>
              <Button
                styles={{ width: '100%' }}
                variant={'primary'}
                type='submit'
                disabled={!isValid}
              >
                Enviar
              </Button>
            </BottomButtonContainer>

            <div>
              <CreateAccount href={'/cadastro'}>
                Ainda não tem conta?
              </CreateAccount>
            </div>
          </Form>
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
