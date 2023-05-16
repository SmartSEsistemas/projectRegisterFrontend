import { z } from "zod";
import { cpf as validateCPF, cnpj as validateCNPJ } from 'cpf-cnpj-validator';
import FormularioLogin, { Field } from "@/components/FormLogin/FormLogin";
import { Container, FormContainer, FormContainerWidth, ImageContainer, ImageLogin, ImageWrapper } from "./styles";
export interface FieldArray extends Array<Field> { }



const Login = () => {

    const isCPForCNPJ = (value: string): boolean => {
        return validateCPF.isValid(value) || validateCNPJ.isValid(value);
    };

    const handleSubmit = (data: Record<string, unknown>) => {
        console.log(data);
    };

    const validationSchema = z.object({
        cpfCnpj: z.string().refine((value) => isCPForCNPJ(value), {
            message: 'CPF ou CNPJ inválido',
        }),
        passwordLogin: z.string().min(6, { message: 'Senha deve ter no mínimo 6 caracteres' }),
        dropdown: z.string().min(1, { message: 'Selecione uma opção' })    });

    const fields: FieldArray = [
        {
            name: 'cpfCnpj',
            label: 'CPF ou CNPJ',
            type: 'text',
            placeholder: 'Digite seu CPF ou CNPJ',
            required: true,
        },
        {
            name: 'passwordLogin',
            label: 'Senha',
            type: 'password',
            placeholder: 'Digite sua senha',
            required: true,
        }, 
        {
            name: 'dropdown',
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
          }
    ];


    return (
        <Container>
            <FormContainer>
                <FormContainerWidth>
                    <FormularioLogin
                        fields={fields}
                        buttonVariant="primary"
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}
                    />
                </FormContainerWidth>
            </FormContainer>
            <ImageContainer>
                <ImageWrapper>
                    <ImageLogin src="/loginT.svg" alt="Imagem 1" />
                </ImageWrapper>
            </ImageContainer>
        </Container>

    )
}

export default Login;