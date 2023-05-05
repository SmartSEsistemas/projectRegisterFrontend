import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/Buttons/Button';
import { ContainerDiv, Form, Input, Label, TabsButton, TabsContainer, TabsContainerDiv, TabsContent } from './style';
import { ThemeContext } from '@/contexts/ThemeContext';
import { StatusColor } from '@/styles/global';

export interface Field {
  name: string;
  label: string;
  placeholder?: string;
  type: string;
  required: boolean;
  autocomplete?: string;
}

export interface TabInfo {
  label: string;
  fields: Field[];
}

interface FormWithTabsProps {
  tabs: TabInfo[];
  onSubmit: (data: Record<string, unknown>) => void;
  buttonVariant: StatusColor;
  validationSchema: z.ZodType<Record<string, unknown>>;
}

export const FormWithTabs: React.FC<FormWithTabsProps> = ({ tabs, onSubmit, buttonVariant, validationSchema }) => {
  const { theme } = useContext(ThemeContext);

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
      <TabsContainer defaultValue="tab1">
        <TabsContainerDiv aria-label="Form tabs">
          {tabs.map((tab, index) => (
            <TabsButton key={index} value={`tab${index + 1}`} className="TabsTrigger">
              {tab.label}
            </TabsButton>
          ))}
        </TabsContainerDiv>

        {tabs.map((tab, index) => (
          <TabsContent key={index} value={`tab${index + 1}`} className="TabsContent">
            {tab.fields.map((field, fieldIndex) => {
              const hasError = !!errors[field.name];
              const isLast = fieldIndex === tab.fields.length - 1;

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
                    autoComplete={field.autocomplete}
                  />
                </ContainerDiv>
              );
            })}
          </TabsContent>
        ))}
      </TabsContainer>
      <Button variant={buttonVariant} type="submit" disabled={!isValid}>
        Enviar
      </Button>
    </Form>
  );
};
