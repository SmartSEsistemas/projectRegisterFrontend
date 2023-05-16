import React, { useContext } from 'react';
import { FieldError, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/Buttons/Button';
import { AvatarFallback, AvatarImage, AvatarRoot, BottomButtonContainer, CheckboxContainer, CheckboxInput, CheckboxLabel, ContainerDiv, ContainerTitle, CreateAccount, ForgotPassword, Form, FormContainer, Input, Label, SelectBox, Span, Title } from './style';
import { ThemeContext } from '@/contexts/ThemeContext';
import { StatusColor } from '@/styles/global';
import { formatCPFOrCNPJ } from '@/utils/Formattes';

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

const FormularioLogin: React.FC<FormularioLoginProps> = ({
  fields,
  onSubmit,
  buttonVariant,
  validationSchema,
}) => {
  const { theme } = useContext(ThemeContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
  } = useForm({
    mode: 'onChange',
    resolver: zodResolver(validationSchema),
  });

  const handleInputChangeCPForCNPJ = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'cpfCnpj') {
      const formattedValue = formatCPFOrCNPJ(value);
      setValue(name, formattedValue, { shouldValidate: true, shouldDirty: true });
    } else {
      setValue(name, value, { shouldValidate: true, shouldDirty: true });
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} theme={theme} > 


      <AvatarRoot>
        <AvatarImage
          src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
          alt="Colm Tuite"
        />
        <AvatarFallback delayMs={600}>
          CT
        </AvatarFallback>
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
            {field.type === "select" ? (
              <SelectBox {...register(field.name)} required={field.required} id={field.name} name={field.name}>
                {field.options?.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </SelectBox>
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
          </ContainerDiv>
        );
      })}



      <FormContainer style={{ display: "flex", width: "100%", marginBottom: 9, justifyContent: 'space-around' }}>

        <CheckboxContainer>
          <CheckboxInput type="checkbox" />
          <CheckboxLabel>Me manter logado</CheckboxLabel>
        </CheckboxContainer>
        <ForgotPassword href={"/home"} >Esqueci minha senha?</ForgotPassword>
      </FormContainer>

      <BottomButtonContainer>
        <Button styles={{ width: "100%" }} variant={buttonVariant} type="submit" disabled={!isValid}>
          Enviar
        </Button>
      </BottomButtonContainer>

      <div>
        <CreateAccount href={"/login"}>Ainda não tem conta?</CreateAccount>
      </div>
    </Form>
  );
};

export default FormularioLogin;
