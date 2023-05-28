import styled from "styled-components";
import Link from 'next/link';
import * as Avatar from '@radix-ui/react-avatar';



interface ContainerDivProps {
  isLast: boolean;
}

interface InputProps {
  hasError?: boolean;
  value?: string; // Defina o tipo do value como string
}


export const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const ImageContainer = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  background-color: #EFF3F7 ;


  @media (max-width: 900px) {
    display: none;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('./background.svg');
    background-size: cover; /* Valor de tamanho ajustável */
    background-position: bottom;
    opacity: 0.1; /* Valor de opacidade ajustável */
  }
`;




export const ImageWrapper = styled.div`
  max-width: 100%;
  max-height: 100%;
`;

export const FormContainer = styled.div`
  flex: 1.5;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  overflow: auto; // adiciona a possibilidade de rolagem quando o conteúdo é maior que a altura do container
`;

export const ImageLogin = styled.img`
    max-width: 100%;
    margin: 0px auto;
    display: block;
    width: 300px;
    position: relative;
    z-index: 5;
`;

export const FormContainerWidth = styled.div`
    max-width: 600px;
    width: 100%;

    @media (max-width: 768px) {
        max-width: 90%;
    }

`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    max-width: 900px;
    max-height: 900px;
    background-color: ${({ theme }) => (theme.theme === 'dark' ? "#2A3042" : theme.light)};
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
    margin: 0 auto;
    padding: 24px;
    box-sizing: border-box;

    @media (max-width: 900px) {
      gap: 2px;
    }

    @media (max-width: 768px) {
      gap: 1px;
    }
`

export const ContainerDiv = styled.div<ContainerDivProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  background: transparent;
  margin-bottom: ${({ isLast }) => (isLast ? '0' : '0')};

`;

export const Input = styled.input<InputProps>`
  width: 100%;
  height: 48px;
  border: 1px solid;
  border-radius: 5px;
  padding: 0 10px;
  background-color: ${({ theme }) => (theme.theme === 'dark' ? "#2A3042" : theme.light)};
  margin-bottom: 10px;
  box-sizing: border-box;
  font-size: 16px;
  outline: none;
  transition: all ease 0.3s;
  border-color: ${({ hasError, theme }) => (hasError ? 'red' : theme.borderColor)};
  color: ${({ theme }) => (theme.theme === 'dark' ? "#F6F6F6" : "#000000")};

  &::placeholder {
    color: ${({ theme }) => (theme.theme === 'dark' ? "#A6B0CF" : "#495057")};
  }

`


export const Label = styled.label`
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  background-color: transparent;
  color: ${({ theme }) => (theme.theme === 'dark' ? "#A6B0CF" : "#495057")};
  margin-bottom: 4px;
`

export const FormContainerCadastro = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 8px;
  justify-content: space-around;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;


export const BottomButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  border-bottom: 1px solid #7a7a7a70;
  padding-bottom: 16px;
`;

export const CreateAccount = styled(Link)`
  font-size: 13px;
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => (theme.theme === 'dark' ? "#A6B0CF" : "#495057")};`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  min-height: 50px; // Definir a altura mínima aqui

`;

export const Title = styled.h1`
  color: ${({ theme }) => (theme.primary)};
  font-size: 1.5rem;
`;

export const MensageStrength = styled.span`
  font-size: 10px;
  color: ${({ theme }) => (theme.theme === 'dark' ? "#A6B0CF" : "#495057")};
  margin-bottom: 5px;
`;

export const ContainerForgotPassword = styled.div`
  margin-top: 10px;
`


export const ContainerInfoHelp = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px;
`;



