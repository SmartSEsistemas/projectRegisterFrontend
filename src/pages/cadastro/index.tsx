import { z } from "zod";
import { cpf as validateCPF, cnpj as validateCNPJ } from 'cpf-cnpj-validator';
import { Container, FormContainer, FormContainerWidth, ImageContainer, ImageLogin, ImageWrapper, BottomButtonContainer, ContainerDiv, ContainerTitle, CreateAccount, Form, Input, Label, MensageStrength, ContainerForgotPassword, Title, ContainerInfoHelp } from "../../styles/cadastro/styles";
import { differenceInYears } from 'date-fns'; // Adicione essa biblioteca para calcular a diferença em anos
import { useContext, useState } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formatCPFOrCNPJ } from "@/utils/Formattes";
import { PasswordStrengthBar } from "@/components/PasswordStatus";
import { Button } from "@/components/Buttons/Button";



interface Field {
    name: string;
    label: string;
    placeholder?: string;
    type: string;
    required: boolean;
    options?: { label: string; value: string }[]; // para dropdown

}

interface FieldArray extends Array<Field> { }


export const Cadastro = () => {

    const { theme } = useContext(ThemeContext);
    const [passwordStrength, setPasswordStrength] = React.useState<{ strength: string; color: string } | null>(null);
    const [passwordFocused, setPasswordFocused] = useState(false);

    const isCPForCNPJ = (value: string): boolean => {
        return validateCPF.isValid(value) || validateCNPJ.isValid(value);
    };

    const handleSubmitCadastro = (data: Record<string, unknown>) => {
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

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isValid },
        setValue,
    } = useForm({
        mode: 'onChange',
        resolver: zodResolver(validationSchema),
    });

    const passwordRegister = watch("passwordRegister");


    const getPasswordStrength = (password: string) => {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumbers = /\d/.test(password);
        const hasNonAlphanumeric = /\W/.test(password);

        if (password.length >= 8 && hasUpperCase && hasLowerCase && hasNumbers && hasNonAlphanumeric) {
            return { strength: "Strong", color: "green" };
        }

        if (password.length >= 6 && (hasUpperCase || hasLowerCase) && hasNumbers) {
            return { strength: "Medium", color: "orange" };
        }

        return { strength: "Weak", color: "red" };
    };


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (name === 'cpfCnpj') {
            const formattedValue = formatCPFOrCNPJ(value);
            setValue(name, formattedValue, { shouldValidate: true, shouldDirty: true });
        } else if (name === 'passwordRegister') {
            setPasswordStrength(getPasswordStrength(value));
            setValue(name, value, { shouldValidate: true, shouldDirty: true });
        } else {
            setValue(name, value, { shouldValidate: true, shouldDirty: true });
        }
    };


    return (
        <Container>
            <FormContainer>
                <FormContainerWidth>
                    <Form onSubmit={handleSubmit(handleSubmitCadastro)} theme={theme} >

                        <ContainerTitle>
                            <Title>Registrar</Title>
                            <p>Digite suas credenciais para continuar</p>
                        </ContainerTitle>
                        {fields.map((field, index) => {
                            const isLast = index === fields.length - 1;
                            const hasError = !!errors[field.name];

                            return (
                                <ContainerDiv key={field.name} isLast={isLast}>
                                    <Label htmlFor={field.name}>{field.label}:</Label>

                                    {field.name === 'passwordRegister' && (
                                        <ContainerInfoHelp>
                                            <MensageStrength>Para sua segurança, crie uma senha com no mínimo 6 caracteres. Lembre-se de combinar letras maiúsculas e minúsculas, e incluir também números. Faça a sua senha forte para proteger sua conta!</MensageStrength>
                                        </ContainerInfoHelp>
                                    )}
                                    <Input
                                        {...register(field.name)}
                                        type={field.type}
                                        id={field.name}
                                        name={field.name}
                                        required={field.required}
                                        placeholder={field.placeholder}
                                        hasError={hasError}
                                        onChange={handleInputChange}
                                        onFocus={field.name === 'passwordRegister' ? () => setPasswordFocused(true) : undefined}
                                        onBlur={field.name === 'passwordRegister' ? () => setPasswordFocused(false) : undefined}
                                    />



                                    {
                                        field.name === 'passwordRegister' && passwordStrength && passwordRegister && passwordFocused && (
                                            <ContainerForgotPassword>
                                                <PasswordStrengthBar strength={passwordStrength.strength} />
                                            </ContainerForgotPassword>
                                        )
                                    }
                                </ContainerDiv>
                            );
                        })}

                        <BottomButtonContainer>
                            <Button styles={{ width: "100%" }} variant={"primary"} type="submit" disabled={!isValid}>
                                Enviar
                            </Button>
                        </BottomButtonContainer>

                        <div>
                            <CreateAccount href={"/login"}>Já possui conta?</CreateAccount>
                        </div>
                    </Form >
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