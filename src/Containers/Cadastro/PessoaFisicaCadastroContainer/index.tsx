import Form, { Field, FieldCategory } from '@/components/Forms/Form';
import {
  formatCEP,
  formatCNH,
  formatCPF,
  formatCellPhone,
  formatRG,
} from '@/utils/Formattes';
import {
  isAtLeastTenYearsAgo,
  isCPForCNPJ,
  isNotFutureDate,
} from '@/utils/VerifyInputs';
import { z } from 'zod';
import { Container, TitlePage } from '@/styles/global';
import { useMemo, useState } from 'react';
import { GET_UFS } from '@/api/uf/login';
import { getLocalStorage } from '@/utils/localStorage';
import { IUf } from '@/@types/uf/IUf';

export type FieldArray = Array<Field>;

const validationSchema = z.object({
  name: z.string().min(3, 'Nome deve ter no mínimo 3 caracteres'),
  nb_rg: z
    .string()
    .min(9, 'RG deve ter no mínimo 9 caracteres')
    .refine((value) => value !== undefined && formatRG(value) === value, {
      message: 'RG inválido',
    }),
  organ_emission_rg: z.string(),
  register_uf_id: z.string(),
  date_emission_rg: z
    .string()
    .refine((value) => value !== undefined && isNotFutureDate(value), {
      message: 'Data de emissão do RG inválida',
    }),
  cnh: z
    .string()
    .min(11, 'CNH deve ter no mínimo 11 caracteres')
    .optional()
    .refine(
      (value) =>
        value === undefined || value === '' || formatCNH(value) === value,
      { message: 'CNH inválida' },
    ),
  cpf: z.string().refine(isCPForCNPJ, {
    message: 'CPF ou CNPJ inválido',
  }),
  date_birth: z.string().refine((value) => isAtLeastTenYearsAgo(value), {
    message: 'Data de nascimento inválida',
  }),
  nationality: z.string(),
  address_cep: z
    .string()
    .min(8, 'CEP deve ter no mínimo 8 caracteres')
    .refine((value) => formatCEP(value) === value, { message: 'CEP inválido' }),
  address_street: z.string(),
  address_nb: z.string(),
  address_district: z.string(),
  address_complement: z.string().optional(),
  register_county_id: z.string(),
  state_uf_id: z.string(),
  email: z.string().email('Email inválido'),
  phone: z.string().refine((value) => formatCellPhone(value) === value, {
    message: 'Telefone inválido',
  }),
  register_date: z.string().refine((value) => isNotFutureDate(value), {
    message: 'Data de cadastro inválida',
  }),
  photo: z.unknown().optional(), // Tipo depende de como você está lidando com o upload de arquivos
});

const CreatePessoaFisicaContainer = () => {
  const [ufs, setUfs] = useState<IUf[]>([]);

  useMemo(async () => {
    try {
      const token = getLocalStorage('token');
      if (!token) return;
      const { options, url } = GET_UFS(token, 'db1');
      const response = await fetch(url, options);
      const json: IUf[] = await response.json();
      setUfs(json);
    } catch (error) {}
  }, []);

  const handleSubmit = (data: Record<string, unknown>) => {
    console.log(data);
  };

  const fieldsWithCartegory: FieldCategory[] = [
    {
      categoryName: 'Dados Pessoais',
      fields: [
        {
          name: 'cpf',
          label: 'CPF',
          type: 'text',
          placeholder: 'Ex: 000.000.000-00',
          required: true,
          formatter: formatCPF,
        },
        {
          name: 'name',
          label: 'Nome Completo',
          type: 'text',
          placeholder: 'Ex: João da Silva',
          required: true,
        },
        {
          name: 'date_birth',
          label: 'Data de Nascimento',
          type: 'date',
          placeholder: 'Ex: dd/mm/aaaa',
          required: true,
        },
        {
          name: 'nb_rg',
          label: 'RG',
          type: 'text',
          placeholder: 'Ex: 00.000.00',
          required: true,
          formatter: formatRG,
        },

        {
          name: 'register_uf_id',
          label: 'UF RG',
          type: 'select',
          placeholder: 'Ex: São Paulo',
          options: ufs.map((uf) => ({
            label: uf.description,
            value: String(uf.id),
          })),
          required: true,
        },

        {
          name: 'organ_emission_rg',
          label: 'Órgão Emissor',
          type: 'text',
          placeholder: 'Ex: SSP',
          required: true,
        },
        {
          name: 'date_emission_rg',
          label: 'Data de Emissão do RG',
          type: 'date',
          placeholder: 'Ex: dd/mm/aaaa',
          required: true,
        },
        {
          name: 'nationality',
          label: 'Nacionalidade',
          type: 'text',
          placeholder: 'Ex: Brasileira',
          required: true,
        },
        {
          name: 'cnh',
          label: 'CNH',
          type: 'text',
          placeholder: 'Ex: 000 000 000 00',
          required: false,
          formatter: formatCNH,
        },
      ],
    },
    {
      categoryName: 'Endereço',
      fields: [
        {
          name: 'address_cep',
          label: 'CEP do Endereço',
          type: 'text',
          placeholder: 'Ex: 00000-000',
          required: true,
          formatter: formatCEP,
        },
        {
          name: 'address_street',
          label: 'Rua',
          type: 'text',
          placeholder: 'Ex: Rua das Flores',
          required: true,
        },
        {
          name: 'address_nb',
          label: 'Número',
          type: 'text',
          placeholder: 'Ex: 123',
          required: true,
        },
        {
          name: 'address_complement',
          label: 'Complemento',
          type: 'text',
          placeholder: 'Ex: Apartamento 45',
          required: false,
        },
        {
          name: 'address_district',
          label: 'Bairro',
          type: 'text',
          placeholder: 'Ex: Centro',
          required: true,
        },
        {
          name: 'register_county_id',
          label: 'Cidade',
          type: 'text',
          placeholder: 'Ex: São Paulo',
          required: true,
        },
        {
          name: 'state_uf_id',
          label: 'Estado',
          type: 'text',
          placeholder: 'Ex: São Paulo',
          required: true,
        },
      ],
    },
    {
      categoryName: 'Contato',
      fields: [
        {
          name: 'phone',
          label: 'Telefone',
          type: 'text',
          placeholder: 'Ex: (00) 00000-0000',
          required: true,
          formatter: formatCellPhone,
        },
        {
          name: 'email',
          label: 'Email',
          type: 'email',
          placeholder: 'Ex: email@exemplo.com',
          required: true,
        },
        {
          name: 'register_date',
          label: 'Data de Cadastro',
          type: 'date',
          placeholder: 'Ex: dd/mm/aaaa',
          required: true,
        },
        {
          name: 'photo',
          label: 'Foto',
          type: 'file',
          placeholder: 'Ex: Selecione um arquivo',
          required: false,
        },
      ],
    },
  ];

  return (
    <>
      <Container>
        <TitlePage>Cadastro de Pessoa Física</TitlePage>
        <Form
          categories={fieldsWithCartegory}
          // fields={fields}
          onSubmit={handleSubmit}
          buttonVariant="primary"
          validationSchema={validationSchema}
          layout="grid"
          gridColumns={{
            cpf: 2,
            name: 8,
            date_birth: 2,
            nb_rg: 3,
            register_uf_id: 3,
            organ_emission_rg: 3,
            date_emission_rg: 3,
            cnh: 3,
            nationality: 3,
            address_cep: 2,
            address_street: 8,
            address_nb: 2,
            address_complement: 3,
            address_district: 3,
            register_county_id: 3,
            state_uf_id: 3,
            phone: 3,
            email: 3,
            photo: 3,
            date_register: 3,
          }}
          width="100%"
          backRoute="/cadastro"
        />
      </Container>
    </>
  );
};

export default CreatePessoaFisicaContainer;
