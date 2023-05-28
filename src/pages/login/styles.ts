import styled from "styled-components";
import Link from 'next/link';
import * as Avatar from '@radix-ui/react-avatar';
import Select from 'react-select'


interface ContainerDivProps {
  isLast: boolean;
}

interface InputProps {
  hasError?: boolean;
  value?: string;
}

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  max-width: 900px;
  max-height: 900px;
  background-color: ${({ theme }) => (theme.theme === 'dark' ? "#2A3042" : theme.light)};
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

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
  margin-bottom: 8px;
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
`;

export const SelectBox = styled(Select)`
  width: 100%;
  height: 40px;
  border: 1px solid;
  border-radius: 5px;
  padding: 0 10px;
  background-color: ${({ theme }) => (theme.theme === 'dark' ? "#2A3042" : theme.light)};
  margin-bottom: 10px;
  box-sizing: border-box;
  font-size: 16px;
  outline: none;
  transition: all ease 0.3s;
  border-color: ${({ theme }) => (theme.borderColor)};
  color: ${({ theme }) => (theme.theme === 'dark' ? "#F6F6F6" : "#000000")};

  &::placeholder {
    color: ${({ theme }) => (theme.theme === 'dark' ? "#A6B0CF" : "#495057")};
    opacity: 0.6;
  }

  &:focus {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 5px ${({ theme }) => theme.primary};
  }
`;

export const Label = styled.label<{ isOptional?: boolean; hasError?: boolean }>`
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  background-color: transparent;
  color: ${({ theme, isOptional, hasError }) => {
    if (hasError) {
      return 'red';
    } else if (isOptional) {
      return theme.secondary;
    } else {
      return theme.theme === 'dark' ? '#A6B0CF' : '#495057';
    }
  }};
  margin-bottom: 5px;
`;

export const FormContainerLogin = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 9px;
  justify-content: space-around;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const CheckboxInput = styled.input``;

export const CheckboxLabel = styled.span`
  font-size: 13px;
`;

export const ForgotPassword = styled(Link)`
  font-size: 13px;
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => (theme.theme === 'dark' ? "#A6B0CF" : "#495057")};
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
  color: ${({ theme }) => (theme.theme === 'dark' ? "#A6B0CF" : "#495057")};
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => (theme.primary)};
  font-size: 1.5rem;
`;

export const Span = styled.span`
  color: ${({ theme }) => (theme.theme === 'dark' ? "#A6B0CF" : "#495057")};
  font-size: 1rem;
`;

export const AvatarRoot = styled(Avatar.Root)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  width: 90px;
  height: 90px;
  border-radius: 100%;
`;

export const AvatarImage = styled(Avatar.Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

export const AvatarFallback = styled(Avatar.Fallback)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  font-size: 15px;
  line-height: 1;
  font-weight: 500;
  background-color: ${({ theme }) => theme.background};
`;

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const ImageContainer = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #EFF3F7;

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
    background-image: url('./teste.svg');
    background-size: cover;
    background-position: bottom;
    opacity: 0.1;
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

export const ErrorMessage = styled.span`
    color: red;
    font-size: 12px;
    padding-left: 0.5rem;
    display: flex;
    align-items: center;
    gap: 4px;
`;

