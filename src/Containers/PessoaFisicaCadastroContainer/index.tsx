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
import { Container, TitlePage } from './styles';

export type FieldArray = Array<Field>;

const validationSchema = z.object({
  nome: z.string().min(3, 'Nome deve ter no mínimo 3 caracteres'),
  rg: z
    .string()
    .min(9, 'RG deve ter no mínimo 9 caracteres')
    .refine((value) => value !== undefined && formatRG(value) === value, {
      message: 'RG inválido',
    }),
  orgao_emissor: z.string(),
  uf_rg: z.string(),
  data_emissao_rg: z
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
  data_nascimento: z.string().refine((value) => isAtLeastTenYearsAgo(value), {
    message: 'Data de nascimento inválida',
  }),
  nacionalidade: z.string(),
  cep_endereco: z
    .string()
    .min(8, 'CEP deve ter no mínimo 8 caracteres')
    .refine((value) => formatCEP(value) === value, { message: 'CEP inválido' }),
  rua: z.string(),
  numero: z.string(),
  complemento: z.string().optional(),
  bairro: z.string(),
  cidade: z.string(),
  estado: z.string(),
  telefone: z.string().refine((value) => formatCellPhone(value) === value, {
    message: 'Telefone inválido',
  }),
  email: z.string().email('Email inválido'),
  foto: z.unknown().optional(), // Tipo depende de como você está lidando com o upload de arquivos
  data_cadastro: z.string().refine((value) => isNotFutureDate(value), {
    message: 'Data de cadastro inválida',
  }),
});

const CreatePessoaFisicaContainer = () => {
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
          name: 'nome',
          label: 'Nome Completo',
          type: 'text',
          placeholder: 'Ex: João da Silva',
          required: true,
        },
        {
          name: 'data_nascimento',
          label: 'Data de Nascimento',
          type: 'date',
          placeholder: 'Ex: dd/mm/aaaa',
          required: true,
        },
        {
          name: 'rg',
          label: 'RG',
          type: 'text',
          placeholder: 'Ex: 00.000.00',
          required: true,
          formatter: formatRG,
        },
  
        {
          name: 'uf_rg',
          label: 'UF RG',
          type: 'select',
          placeholder: 'Ex: São Paulo',
          options: [ /* options are the same, not shown here for brevity */ ],
          required: true,
        },
  
        {
          name: 'orgao_emissor',
          label: 'Órgão Emissor',
          type: 'text',
          placeholder: 'Ex: SSP',
          required: true,
        },
        {
          name: 'data_emissao_rg',
          label: 'Data de Emissão do RG',
          type: 'date',
          placeholder: 'Ex: dd/mm/aaaa',
          required: true,
        },
        {
          name: 'nacionalidade',
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
          name: 'cep_endereco',
          label: 'CEP do Endereço',
          type: 'text',
          placeholder: 'Ex: 00000-000',
          required: true,
          formatter: formatCEP,
        },
        {
          name: 'rua',
          label: 'Rua',
          type: 'text',
          placeholder: 'Ex: Rua das Flores',
          required: true,
        },
        {
          name: 'numero',
          label: 'Número',
          type: 'text',
          placeholder: 'Ex: 123',
          required: true,
        },
        {
          name: 'complemento',
          label: 'Complemento',
          type: 'text',
          placeholder: 'Ex: Apartamento 45',
          required: false,
        },
        {
          name: 'bairro',
          label: 'Bairro',
          type: 'text',
          placeholder: 'Ex: Centro',
          required: true,
        },
        {
          name: 'cidade',
          label: 'Cidade',
          type: 'text',
          placeholder: 'Ex: São Paulo',
          required: true,
        },
        {
          name: 'estado',
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
          name: 'telefone',
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
          name: 'data_cadastro',
          label: 'Data de Cadastro',
          type: 'date',
          placeholder: 'Ex: dd/mm/aaaa',
          required: true,
        },
        {
          name: 'foto',
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
            nome: 8,
            data_nascimento: 2,
            rg: 3,
            uf_rg: 3,
            orgao_emissor: 3,
            data_emissao_rg: 3,
            cnh: 3,
            nacionalidade: 3,
            cep_endereco: 2,
            rua: 8,
            numero: 2,
            complemento: 3,
            bairro: 3,
            cidade: 3,
            estado: 3,
            telefone: 3,
            email: 3,
            foto: 3,
            data_cadastro: 3,
          }}
          width="100%"
          backRoute="/cadastro"
        />
      </Container>
    </>
  );
};

export default CreatePessoaFisicaContainer;
