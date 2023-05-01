// components/FormularioGenerio.tsx
import React, { useContext } from 'react';
import { FieldError, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod';
import { Button } from '@/components/Buttons/Button';
import { ContainerDiv, Form, Input, Label } from './style';
import { ThemeContext } from '@/contexts/ThemeContext';
import { StatusColor } from '@/styles/global';

export interface Field {
  name: string;
  label: string;
  placeholder?: string;
  type: string;
  required: boolean;
}


interface FormularioGenerioProps {
  fields: Field[];
  onSubmit: (data: Record<string, unknown>) => void;
  buttonVariant: StatusColor;
  validationSchema: z.ZodType<Record<string, unknown>>;
}

const FormularioGenerio: React.FC<FormularioGenerioProps> = ({ fields, onSubmit, buttonVariant, validationSchema }) => {
  const { theme } = useContext(ThemeContext); // Acesse o tema atual

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: zodResolver(validationSchema),
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)} theme={theme}>
    {fields.map((field, index) => {
      const isLast = index === fields.length - 1;
      const hasError = !!errors[field.name];

      return (
        <ContainerDiv key={field.name} isLast={isLast}>
          <Label htmlFor={field.name}>{field.label}:</Label>
          <Input
            {...register(field.name)}
            type={field.type}
            id={field.name}
            name={field.name}
            required={field.required}
            placeholder={field.placeholder}
            hasError={hasError}
          />

        </ContainerDiv>
      );
    })}
    <Button variant={buttonVariant} type="submit" disabled={!isValid}>
      Enviar
    </Button>
  </Form>
  );
};

export default FormularioGenerio;
