import React, { useContext, useState } from 'react';
import { FieldError, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/Buttons/Button';
import { AvatarFallback, AvatarImage, AvatarRoot, BottomButtonContainer, CheckboxContainer, CheckboxInput, CheckboxLabel, ContainerDiv, ContainerTitle, CreateAccount, ForgotPassword, Form, FormContainer, Input, Label, MensageStrength, SelectBox, Span, Teste, Title } from './style';
import { ThemeContext } from '@/contexts/ThemeContext';
import { StatusColor } from '@/styles/global';
import { formatCPFOrCNPJ } from '@/utils/Formattes';
import { PasswordStrengthBar } from '../PasswordStatus';

export interface Field {
  name: string;
  label: string;
  placeholder?: string;
  type: string;
  required: boolean;
  options?: { label: string; value: string }[]; // para dropdown

}

interface FormularioLoginProps {
  fields: Field[];
  onSubmit: (data: Record<string, unknown>) => void;
  buttonVariant: StatusColor;
  validationSchema: z.ZodType<Record<string, unknown>>;
}

const FormularioCadastro: React.FC<FormularioLoginProps> = ({
  fields,
  onSubmit,
  buttonVariant,
  validationSchema,
}) => {
  const { theme } = useContext(ThemeContext);
  const [passwordStrength, setPasswordStrength] = React.useState<{ strength: string; color: string } | null>(null);
  const [passwordFocused, setPasswordFocused] = useState(false);


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
    <Form onSubmit={handleSubmit(onSubmit)} theme={theme} >

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
            {field.type === "select" ? (
              <SelectBox {...register(field.name)} required={field.required} id={field.name} name={field.name}>
                {field.options?.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </SelectBox>
            ) : (
              <>
                {field.name === 'passwordRegister' && (
                  <MensageStrength>Para sua segurança, crie uma senha com no mínimo 6 caracteres. Lembre-se de combinar letras maiúsculas e minúsculas, e incluir também números. Faça a sua senha forte para proteger sua conta!</MensageStrength>
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
                  onFocus={() => setPasswordFocused(true)}
                  onBlur={() => setPasswordFocused(false)}
                />
              </>
            )
            }
            {
              field.name === 'passwordRegister' && passwordStrength && passwordRegister && passwordFocused && (
                <Teste>
                  <PasswordStrengthBar strength={passwordStrength.strength} />
                </Teste>
              )
            }
          </ContainerDiv>
        );
      })}

      <BottomButtonContainer>
        <Button styles={{ width: "100%" }} variant={buttonVariant} type="submit" disabled={!isValid}>
          Enviar
        </Button>
      </BottomButtonContainer>

      <div>
        <CreateAccount href={"/login"}>Já possui conta?</CreateAccount>
      </div>
    </Form >
  );
};

export default FormularioCadastro;
