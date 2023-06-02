import styled from 'styled-components';


interface ContainerDivProps {
  isLast: boolean;
}

interface InputProps {
  hasError?: boolean;
  value?: string; // Defina o tipo do value como string
}


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 900px;
    background-color: ${({ theme }) => (theme.theme === 'dark' ? "#2A3042" : theme.light)};
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
    margin: 0 auto;
    margin-top: 50px;
    padding: 20px;
    box-sizing: border-box;
`

export const ContainerDiv = styled.div<ContainerDivProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: transparent;
  margin-bottom: ${({ isLast }) => (isLast ? '20px' : '0')};

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
    opacity: 0.6;
  }

  &:focus {
    border-color: ${({ hasError, theme }) => (hasError ? 'red' : theme.primary)};
    box-shadow: 0 0 5px ${({ hasError, theme }) => (hasError ? 'red' : theme.primary)};
  }

`

export const Label = styled.label`
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  background-color: transparent;
  color: ${({ theme }) => (theme.theme === 'dark' ? "#A6B0CF" : "#495057")};
  margin-bottom: 5px;
`

export const Optional = styled.span`
  font-size: 10px;
  color: ${({ theme }) => (theme.theme === 'dark' ? "#A6B0CF" : "#495057")};
`

