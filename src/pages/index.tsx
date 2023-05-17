import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";
import { Button } from "@/components/Buttons/Button";
import { useToast } from "@/hooks/useToast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form, { Field } from "@/components/Forms/Form";
import { z } from 'zod';
import { Teste } from "@/components/Sidebar/SiderBar";
import Navbar from "@/components/Navbar/Navbar";
import { FormWithTabs, TabInfo } from "@/components/FormsWithTabs/FormsWithTabs";
export interface FieldArray extends Array<Field> { }


const validationSchema = z.object({
  nome: z.string().min(1, 'Nome é obrigatório.'),
  email: z.string().email( 'Email inválido.'),
});

const validationoOutherSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório.'),
  sobrenome: z.string().min(1, 'Email inválido.'),
  teste: z.string().min(1, 'Email inválido.'),
  test1: z.string().min(1, 'Email inválido.'),
});


const ThemeToggleButton = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const { showToast } = useToast();
  const [formValues, setFormValues] = useState({ nome: '', email: '' });


  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleMenuClick = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };


  const fields: FieldArray = [
    { name: 'nome', label: 'Nome', type: 'text', placeholder: "Digite seu nome", required: true },
    { name: 'email', label: 'Email', type: 'email', placeholder: "Digite seu email", required: true },
  ];


  const tabs: TabInfo[] = [
    {
      label: "Dados Pessoais",
      fields: [
        { name: "name", label: "Current Password", type: "text", required: true },
        { name: "sobrenome", label: "New Password", type: "text", required: true }   // ...
      ],
    },
    {
      label: "Dados Pessoais",
      fields: [
        { name: "teste", label: "Current Passwordadasdas", type: "text", required: true },
        { name: "test1", label: "New Passwordasdasdasd", type: "text", required: true }   // ...
      ],
    },
    // ...
  ];


  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    console.log(event.target)
    setFormValues((prevState) => ({ ...prevState, [name]: value }));

  };


  const handleSubmit = (data: Record<string, unknown>) => {

    console.log(data);


    // Faça algo com os dados do formulário (formValues)
  };

  const handleClick = () => {
    toggleTheme();
  };


  return (
    <>
      <div>
        <Navbar onMenuClick={handleMenuClick} isSidebarVisible={isSidebarVisible} />
        {isSidebarVisible && <Teste />}

      </div>

      <Button variant="primary" onClick={() => showToast("Alert Success", "success")}>
        Primary
      </Button>
      <Button variant="light" onClick={() => showToast("Alert Error", "error")}>
        Light
      </Button>
      <Button variant="lightGray" onClick={() => showToast("Alert Info", "info")}>
        LightGray
      </Button>
      <Button variant="secondary" onClick={() => showToast("Alert Aviso", "warn")}>
        Secondary
      </Button>
      <Button variant="warning" onClick={handleClick}>
        Warning
      </Button>
      <Button variant="danger" onClick={handleClick}>
        Danger
      </Button>
      <Button variant="dark" onClick={handleClick}>
        Dark
      </Button>


      <Form
        fields={fields.map((field) => ({ ...field, onChange: handleChange }))}
        onSubmit={handleSubmit}
        buttonVariant="primary"
        validationSchema={validationSchema}
      />


      <FormWithTabs
        tabs={tabs}
        onSubmit={handleSubmit}
        buttonVariant="primary"
        validationSchema={validationoOutherSchema}
      />

      <ToastContainer limit={5} toastStyle={{ backgroundColor: "transparent", background: "transparent", boxShadow: "black 0px 2px 10px", fontWeight: "bold" }} />
    </>
  );
};

export default ThemeToggleButton;
