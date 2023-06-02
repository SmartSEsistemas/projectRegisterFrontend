// components/FormularioGenerio.tsx
import React, { useContext, useEffect, useState } from 'react';
import { FieldError, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/Buttons/Button';
import { ThemeContext } from '@/contexts/ThemeContext';
import { StatusColor } from '@/styles/global';
import { ContainerDiv, Form, Input, Label, Optional } from './style';
import Select from 'react-select';

interface FieldOption {
  value: string;
  label: string;
}
export interface Field {
  name: string;
  label: string;
  placeholder?: string;
  type: string;
  required: boolean;
  formatter?: (value: string) => string;
  options?: FieldOption[]; // options for select type
}

interface FormularioGenerioProps {
  fields: Field[];
  onSubmit: (data: Record<string, unknown>) => void;
  buttonVariant: StatusColor;
  validationSchema: z.ZodType<Record<string, unknown>>;
}

const FormularioGenerio: React.FC<FormularioGenerioProps> = ({
  fields,
  onSubmit,
  buttonVariant,
  validationSchema,
}) => {
  const { theme } = useContext(ThemeContext); // Acesse o tema atual

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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

  return (
    <Form onSubmit={handleSubmit(onSubmit)} theme={theme}>
      {fields.map((field, index) => {
        const isLast = index === fields.length - 1;
        const hasError = !!errors[field.name];

        const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          let newValue = e.target.value;

          if (field.formatter) {
            newValue = field.formatter(newValue);
          }

          setValue(field.name, newValue);
        };

        return (
          <ContainerDiv key={field.name} isLast={isLast}>
            <Label htmlFor={field.name}>
              {field.label}{' '}
              {!field.required ? <Optional>(Opcional)</Optional> : true} :
            </Label>
            {field.type === 'select' && isClient ? (
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
                  control: (provided, state) => ({
                    ...provided,
                    height: '48px',
                    borderColor: state.isFocused
                      ? theme.primary
                      : theme.borderColor,
                    boxShadow: state.isFocused
                      ? `0 0 5px ${theme.primary}`
                      : 'none',
                    '&:hover': { borderColor: 'none' },
                    backgroundColor:
                      theme.theme === 'dark' ? '#2A3042' : theme.light,
                    color: 'red',
                    marginBottom: '8px',
                  }),
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
                    color: theme.theme === 'dark' ? '#A6B0CF' : '#495057',
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
            ) : (
              <Input
                {...register(field.name, { onChange: onChange })}
                type={field.type}
                id={field.name}
                name={field.name}
                required={field.required}
                placeholder={field.placeholder}
                hasError={hasError}
              />
            )}
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
