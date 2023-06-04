import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/Buttons/Button';
import {
  ContainerDiv,
  Form,
  Input,
  Label,
  StyledSelectContent,
  StyledSelectItem,
  StyledSelectTrigger,
  TabsButton,
  TabsContainer,
  TabsContainerDiv,
  TabsContent,
} from './style';
import { ThemeContext } from '@/contexts/ThemeContext';
import { StatusColor } from '@/styles/global';
import Select from 'react-select'

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
  autocomplete?: string;
  formatter?: (value: string) => string;
  options?: FieldOption[]; // options for select type
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

export const FormWithTabs: React.FC<FormWithTabsProps> = ({
  tabs,
  onSubmit,
  buttonVariant,
  validationSchema,
}) => {
  const { theme } = useContext(ThemeContext);


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
      <TabsContainer defaultValue="tab1">
        <TabsContainerDiv aria-label="Form tabs">
          {tabs.map((tab, index) => (
            <TabsButton
              key={index}
              value={`tab${index + 1}`}
              className="TabsTrigger"
            >
              {tab.label}
            </TabsButton>
          ))}
        </TabsContainerDiv>

        {tabs.map((tab, index) => (
          <TabsContent
            key={index}
            value={`tab${index + 1}`}
            className="TabsContent"
          >
            {tab.fields.map((field, fieldIndex) => {
              const hasError = !!errors[field.name];
              const isLast = fieldIndex === tab.fields.length - 1;

              const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                let newValue = e.target.value;

                if (field.formatter) {
                  newValue = field.formatter(newValue);
                }

                setValue(field.name, newValue);
              };

              return (
                <ContainerDiv key={field.name} isLast={isLast}>
                  <Label htmlFor={field.name}>{field.label}:</Label>
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
                      autoComplete={field.autocomplete}
                    />
                  )}
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

// import React, { useContext } from 'react';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { z } from 'zod';
// import { Button } from '@/components/Buttons/Button';
// import { ContainerDiv, Form, Input, Label, TabsButton, TabsContainer, TabsContainerDiv, TabsContent } from './style';
// import { ThemeContext } from '@/contexts/ThemeContext';
// import { StatusColor } from '@/styles/global';

// export interface Field {
//   name: string;
//   label: string;
//   placeholder?: string;
//   type: string;
//   required: boolean;
//   autocomplete?: string;
//   formatter?: (value: string) => string;
// }

// export interface TabInfo {
//   label: string;
//   fields: Field[];
// }

// interface FormWithTabsProps {
//   tabs: TabInfo[];
//   onSubmit: (data: Record<string, unknown>) => void;
//   buttonVariant: StatusColor;
//   validationSchema: z.ZodType<Record<string, unknown>>;
// }

// export const FormWithTabs: React.FC<FormWithTabsProps> = ({ tabs, onSubmit, buttonVariant, validationSchema }) => {
//   const { theme } = useContext(ThemeContext);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isValid },
//     setValue
//   } = useForm({
//     mode: 'onChange',
//     resolver: zodResolver(validationSchema),
//   });

//   return (
//     <Form onSubmit={handleSubmit(onSubmit)} theme={theme}>
//       <TabsContainer defaultValue="tab1">
//         <TabsContainerDiv aria-label="Form tabs">
//           {tabs.map((tab, index) => (
//             <TabsButton key={index} value={`tab${index + 1}`} className="TabsTrigger">
//               {tab.label}
//             </TabsButton>
//           ))}
//         </TabsContainerDiv>

//         {tabs.map((tab, index) => (
//           <TabsContent key={index} value={`tab${index + 1}`} className="TabsContent">
//             {tab.fields.map((field, fieldIndex) => {
//               const hasError = !!errors[field.name];
//               const isLast = fieldIndex === tab.fields.length - 1;

//               const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
//                 let newValue = e.target.value;

//                 console.log(errors)
//                 if (field.formatter) {
//                   newValue = field.formatter(newValue);
//                 }

//                 setValue(field.name, newValue);
//               };

//               return (
//                 <ContainerDiv key={field.name} isLast={isLast}>
//                   <Label htmlFor={field.name}>{field.label}:</Label>
//                   <Input
//                     {...register(field.name)}
//                     type={field.type}
//                     id={field.name}
//                     name={field.name}
//                     required={field.required}
//                     placeholder={field.placeholder}
//                     hasError={hasError}
//                     autoComplete={field.autocomplete}
//                     onChange={onChange}
//                   />
//                 </ContainerDiv>
//               );
//             })}
//           </TabsContent>
//         ))}
//       </TabsContainer>
//       <Button variant={buttonVariant} type="submit" disabled={!isValid}>
//         Enviar
//       </Button>
//     </Form>
//   );
// };
