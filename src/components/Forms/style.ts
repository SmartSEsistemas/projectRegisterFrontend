import { Upload, UploadSimple } from '@phosphor-icons/react';
import styled from 'styled-components';

interface InputProps {
  hasError?: boolean;
  value?: string; // Defina o tipo do value como string
  layout?: 'flex' | 'grid';
}

interface LayoutProps {
  layout?: 'flex' | 'grid';
  width?: string;
}

export const Form = styled.form<LayoutProps>`
  display: ${({ layout }) => (layout === 'grid' ? 'grid' : 'flex')};
  grid-template-columns: ${({ layout }) =>
    layout === 'grid' ? 'repeat(12, 1fr)' : 'unset'};
  gap: ${({ layout }) => (layout === 'grid' ? '32px' : '16px')};
  flex-direction: ${({ layout }) => (layout === 'grid' ? 'unset' : 'column')};
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: ${({ width }) => width};
  background-color: ${({ theme }) =>
    theme.theme === 'dark' ? '#2A3042' : theme.light};
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  padding: 32px;
  box-sizing: border-box;

`;

export const ContainerDiv = styled.div<{ gridColumn?: number }>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  background: transparent;
  grid-column: ${({ gridColumn }) => gridColumn && `span ${gridColumn}`};

  @media (max-width: 979px) {
    grid-column: ${({ gridColumn }) => gridColumn && `span ${4}`};
  }

  @media (max-width: 870px) {
    grid-column: ${({ gridColumn }) => gridColumn && `span ${6}`};
  }

  @media (max-width: 600px) {
    grid-column: ${({ gridColumn }) => gridColumn && `span ${12}`};
  }
`;



export const Input = styled.input<InputProps>`
  width: 100%;
  height: 48px;
  border: 1px solid;
  border-radius: 5px;
  padding: 0 10px;
  background-color: ${({ theme }) =>
    theme.theme === 'dark' ? '#2A3042' : "#eff2f7"};

  margin-bottom: ${({ layout }) => (layout == 'grid' ? '0' : '16px')};

  box-sizing: border-box;
  font-size: 16px;
  outline: none;
  transition: all ease 0.3s;
  border-color: ${({ hasError, theme }) =>
    hasError ? 'red' : theme.borderColor};
  color: ${({ theme }) => (theme.theme === 'dark' ? '#F6F6F6' : '#000000')};

  &::placeholder {
    color: ${({ theme }) => (theme.theme === 'dark' ? '#A6B0CF' : '#495057')};
    opacity: 0.6;
    font-size: 14px;
  }

  &:focus {
    border-color: ${({ hasError, theme }) =>
      hasError ? 'red' : theme.primary};
    box-shadow: 0 0 5px
      ${({ hasError, theme }) => (hasError ? 'red' : theme.primary)};
      background-color: ${({ theme }) =>
    theme.theme === 'dark' ? '#2A3042' : theme.light};  }


  &[type='file'] {
    display: none;
  }

  &[type='date'] {
    color: ${({ theme }) => (theme.theme === 'dark' ? '#A6B0CF' : '#495057')};
  }
`;

export const Label = styled.label`
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  background-color: transparent;
  color: ${({ theme }) => (theme.theme === 'dark' ? '#A6B0CF' : '#495057')};
  margin-bottom: 8px;
`;

export const Optional = styled.span`
  font-size: 10px;
  color: ${({ theme }) => (theme.theme === 'dark' ? '#A6B0CF' : '#495057')};
`;

export const ButtonContainer = styled.div<{ layout?: 'flex' | 'grid' }>`
  grid-column: span 12;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: ${({ layout }) => (layout === 'grid' ? '0' : '16px')};
  border-top: ${({ layout, theme }) => (layout === 'grid' ? `1px solid ${theme.borderColor}` : 'none')};
  padding-top: ${({ layout, theme }) => (layout === 'grid' ? '24px' : 'none')};
`;

export const CartegoryName = styled.h2<{ layout?: 'flex' | 'grid' , index?: number}>`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
  border-top: ${({ layout, theme, index }) =>  (layout === 'grid' && index != undefined && index > 0 ? `1px solid ${theme.borderColor}` : 'none')};
  padding-top: 24px;

`;

export const FileLabel = styled.label`
  display: flex;
  width: 100%;
  height: 48px;
  padding: 0.5em 1em;
  color: black;
  cursor: pointer;
  border-radius: 0.25em;
  font-size: 1rem;
  border: 1px dashed ${({ theme }) => theme.primary};
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) =>
    theme.theme === 'dark' ? '#2A3042' : "#eff2f7"};
  
  :hover {
    background-color: ${({ theme }) =>
    theme.theme === 'dark' ? '#2A3042' : theme.light};
    transition: all ease 0.3s;
  }
`;

export const IconUpload = styled(UploadSimple)`
  color: ${({ theme }) => theme.primary};
`

export const ErrorMessage = styled.span<{ hasError?: boolean }>`
  visibility: ${({ hasError }) => (hasError ? 'visible' : 'hidden')};
  position: absolute; 
  bottom: -25px; // ajuste o valor conforme necessário
  left: 0;
  min-height: 20px;  
  color: red;
  font-size: 12px;
  padding-left: 0.5rem;
  display: flex;
  align-items: center;
  gap: 4px;
`;



