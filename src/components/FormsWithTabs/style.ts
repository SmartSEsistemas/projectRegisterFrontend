import styled from 'styled-components';
import * as Tabs from '@radix-ui/react-tabs';
import { StatusColor } from '@/styles/global';
import * as Select  from '@radix-ui/react-select';



interface ContainerDivProps {
  isLast?: boolean;
}

interface InputProps {
  hasError?: boolean;
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
    /* margin-top: 100px; */
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
  margin-bottom: ${({ isLast }) => (isLast ? '24px' : '1rem')};
  gap: 8px;
  
`;

export const Input = styled.input<InputProps>`
  width: 100%;
  height: 48px;
  border: 1px solid;
  border-radius: 5px;
  padding: 0 10px;
  background-color: ${({ theme }) => (theme.theme === 'dark' ? "#2A3042" : theme.light)};
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
`

export const TabsContainer = styled(Tabs.Root)`
  width: 100%;
  background-color: transparent;
`

export const TabsButtonTrigger = styled(Tabs.Trigger)`
  font-size: 1rem;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
`
export const TabsContainerDiv = styled(Tabs.List)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: transparent;
  gap: 10px;
`

export const TabsButton = styled(TabsButtonTrigger)`
  background-color: ${({ theme }) => theme.primary};
  border: none;
  color: ${({ theme }) => theme.light};
`;

export const TabsContent= styled(Tabs.Content)`
background-color: transparent;
`

export const StyledSelectTrigger = styled(Select.Trigger)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background: white;
  border-radius: 4px;
  border: 1px solid #ccc;
  cursor: pointer;
`;

export const StyledSelectContent = styled(Select.Content)`
  width: 200px;
  background: white;
  border-radius: 4px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin-top: 10px;
`;

export const StyledSelectItem = styled(Select.Item)`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background: #f5f5f5;
  }
`;