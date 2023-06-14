import React, { useContext, useEffect, useState } from 'react';
import { FieldError, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/Buttons/Button';
import { ThemeContext } from '@/contexts/ThemeContext';
import { StatusColor } from '@/styles/global';
import {
  ButtonContainer,
  CartegoryName,
  ContainerDiv,
  ErrorMessage,
  FileLabel,
  Form,
  IconUpload,
  Input,
  Label,
  Optional,
} from './style';
import Select from 'react-select';
import { Info, Upload } from '@phosphor-icons/react';
import { useRouter } from 'next/router';
import { Dialog } from '../AlertDialog';

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
  onChange?: (value: any, formik: any) => Promise<void>; // add this line
}

export interface FieldCategory {
  categoryName: string;
  fields: Field[];
}

interface FormularioGenerioProps {
  fields?: Field[];
  categories?: FieldCategory[];
  onSubmit: (data: Record<string, unknown>) => void;
  buttonVariant: StatusColor;
  validationSchema: z.ZodType<Record<string, unknown>>;
  layout?: 'flex' | 'grid';
  width?: string;
  gridColumns?: Record<string, number>;
  backRoute?: string; // Add this line
}

const FormularioGenerio: React.FC<FormularioGenerioProps> = ({
  fields,
  categories,
  onSubmit,
  buttonVariant,
  validationSchema,
  layout = 'flex',
  width = '900px',
  gridColumns,
  backRoute = '/',
}) => {
  const { theme } = useContext(ThemeContext); // Acesse o tema atual
  const [selectOpen, setSelectOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    setValue,
    trigger,
  } = useForm({
    mode: 'onChange',
    resolver: zodResolver(validationSchema),
  });

  const fetchAddress = async (cep: any) => {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    if (!response.ok) throw new Error('CEP não encontrado');
    const address = await response.json();
    if (address.erro) throw new Error('CEP não encontrado');
    return address;
  };

  const renderFields = (fieldsArray: Field[]) =>
    fieldsArray.map((field, index) => {
      const fieldValue = watch(field.name);
      const hasError = !!errors[field.name] && fieldValue !== '';

      const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newValue = e.target.value;

        if (field.formatter) {
          newValue = field.formatter(newValue);
        }

        if (field.name === 'cep_endereco' && newValue.length == 9) {
          fetchAddress(newValue)
            .then((address) => {
              setValue('rua', address.logradouro);
              setValue('bairro', address.bairro);
              setValue('cidade', address.localidade);
              setValue('estado', address.uf);
            })
            .catch((error) => {
              console.log(error);
            });
        }

        setValue(field.name, newValue);
      };

      if (field.type === 'file') {
        return (
          <ContainerDiv
            key={`${field.name}-${index}`}
            gridColumn={gridColumns?.[field.name]}
          >
            <Label htmlFor={field.name}>
              {field.label}{' '}
              {!field.required ? <Optional>(Opcional)</Optional> : true} :
            </Label>
            <Input
              {...register(field.name)}
              type={field.type}
              id={field.name}
              name={field.name}
              required={field.required}
              placeholder={field.placeholder}
              hasError={hasError}
              layout={layout}
            />
            <FileLabel htmlFor={field.name}>
              <IconUpload size={32} weight="duotone" />
            </FileLabel>
          </ContainerDiv>
        );
      }

      return (
        <ContainerDiv
          key={`${field.name}-${index}`}
          gridColumn={gridColumns?.[field.name]}
        >
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
              isLoading={selectOpen}
              onMenuOpen={() => setSelectOpen(true)}
              onMenuClose={() => setSelectOpen(false)}
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
                  backgroundColor: state.isFocused
                    ? theme.theme === 'dark'
                      ? '#2A3042'
                      : '#fff'
                    : theme.theme === 'dark'
                    ? '#2A3042'
                    : '#FBFCFC',
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
                  color: theme.textColor,
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
              layout={layout}
            />
          )}

          {hasError && (
            <ErrorMessage hasError={hasError}>
              {' '}
              <Info color="red" size={14} />{' '}
              {errors[field.name]?.message as string}
            </ErrorMessage>
          )}
        </ContainerDiv>
      );
    });

  return (
    <>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        theme={theme}
        layout={layout}
        width={width}
      >
        {categories
          ? categories.map((category, index) => (
              <React.Fragment key={category.categoryName}>
                <div style={{ gridColumn: 'span 12', width: '100%' }}>
                  <CartegoryName layout={layout} index={index}>
                    {category.categoryName}
                  </CartegoryName>
                </div>
                {renderFields(category.fields)}
              </React.Fragment>
            ))
          : fields && renderFields(fields)}
        <ButtonContainer layout={layout}>
          <Button
            variant="gray-100"
            type="button"
            onClick={() => setOpen(true)}
          >
            Voltar
          </Button>
          <Button variant={buttonVariant} type="submit" disabled={!isValid}>
            Salvar
          </Button>
        </ButtonContainer>
      </Form>
      <Dialog
        title="Você tem certeza que deseja voltar?"
        cancelButtonContent="Cancelar"
        confirmButtonContent="Confirmar"
        description="Se você voltar, todas as informações inseridas serão perdidas."
        onOpenChange={setOpen}
        onConfirm={() => router.push(backRoute)}
        open={open}
        onCancel={() => setOpen(false)}
      />{' '}
    </>
  );
};

export default FormularioGenerio;
