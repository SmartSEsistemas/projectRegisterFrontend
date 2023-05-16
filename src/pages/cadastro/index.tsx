import { z } from "zod";
import { cpf as validateCPF, cnpj as validateCNPJ } from 'cpf-cnpj-validator';
import { Container, FormContainer, FormContainerWidth, ImageContainer, ImageLogin, ImageWrapper } from "./styles";
import FormularioCadastro, { Field } from "@/components/FormCadastro";
import { differenceInYears } from 'date-fns'; // Adicione essa biblioteca para calcular a diferença em anos

export interface FieldArray extends Array<Field> { }


export const Cadastro = () => {


    const isCPForCNPJ = (value: string): boolean => {
        return validateCPF.isValid(value) || validateCNPJ.isValid(value);
    };

    const handleSubmit = (data: Record<string, unknown>) => {
        console.log(data);
    };

    const isOlderThan18 = (value: string): boolean => {
        const birthdate = new Date(value);
        const age = differenceInYears(new Date(), birthdate);
        return age >= 18;
    };

    const validationSchema = z.object({
        name: z.string().min(1, { message: 'Nome é obrigatório' }),
        sobrenome: z.string().min(1, { message: 'Sobrenome é obrigatório' }),
        email: z.string().email('Email inválido'),

        dataNascimento: z.string()
            .refine((value) => isOlderThan18(value), {
                message: 'Você deve ter no mínimo 18 anos',
            }),

        passwordRegister: z.string().min(6, { message: 'Senha deve ter no mínimo 6 caracteres' }),
        passwordConfirm: z.string().min(6, { message: 'Senha deve ter no mínimo 6 caracteres' }),
        // seus outros campos...
        cpfCnpj: z.string().refine((value) => isCPForCNPJ(value), {
            message: 'CPF ou CNPJ inválido',
        }),
    }).superRefine(({ passwordRegister, passwordConfirm }, ctx) => {
        if (passwordRegister !== passwordConfirm) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'Senhas não conferem',
                path: ['passwordConfirm'],
            });
        }
    })

    const fields: FieldArray = [
        {
            name: 'name',
            label: 'Nome',
            type: 'text',
            placeholder: 'Digite seu nome',
            required: true,
        },
        {
            name: 'sobrenome',
            label: 'Sobrenome',
            type: 'text',
            placeholder: 'Digite seu sobrenome',
            required: true,
        },
        {
            name: 'cpfCnpj',
            label: 'CPF ou CNPJ',
            type: 'text',
            placeholder: 'Digite seu CPF ou CNPJ',
            required: true,
        },
        {
            name: "email",
            label: "Email",
            type: "email",
            placeholder: "Digite seu email",
            required: true,
        },
        {
            name: 'dataNascimento',
            label: 'Data de Nascimento',
            type: 'date',
            placeholder: 'Digite sua data de nascimento',
            required: true,
        },
        {
            name: 'passwordRegister',
            label: 'Senha',
            type: 'password',
            placeholder: 'Digite sua senha',
            required: true,
        },
        {
            name: 'passwordConfirm',
            label: 'Confirmar Senha',
            type: 'password',
            placeholder: 'Confirme sua senha',
            required: true,
        }
    ];


    return (
        <Container>
            <FormContainer>
                <FormContainerWidth>
                    <FormularioCadastro
                        fields={fields}
                        buttonVariant="primary"
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}
                    />
                </FormContainerWidth>
            </FormContainer>
            <ImageContainer>
                <ImageWrapper>
                    <ImageLogin src="/secureLogin.svg" alt="Imagem 1" />
                </ImageWrapper>
            </ImageContainer>
        </Container>

    )

}


export default Cadastro;