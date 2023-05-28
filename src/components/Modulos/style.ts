import { X } from "@phosphor-icons/react";
import Link from "next/link";
import styled from "styled-components";

export const ContainerModulos = styled.div<any>`
    position: relative;
    overflow: hidden;
    display: flex;
    background-color: ${({ theme }) => theme.light};
    height: ${({ isOpen }) => (isOpen ? "300px" : "250px")};
    flex-basis: calc(25% - 24px); // 4 colunas em um sistema de grid de 12 colunas, descontando o gap
    border-radius: 5px;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    transition: all ease 0.3s;
    box-sizing: border-box;
    gap: 8px;
    @media (max-width: 992px) { // Para vistas de tablet
        flex-basis: calc(50% - 16px); // 6 colunas em um sistema de grid de 12 colunas, descontando o gap
    }

    @media (max-width: 768px) { // Para vistas mobile
        flex-basis: calc(100% - 8px); // 12 colunas em um sistema de grid de 12 colunas, descontando o gap
    }

    &:hover {
        background-color: ${({ theme }) => theme.borderColor};
        color: ${({ theme }) => theme.primary};
    }
`;




export const Title = styled.h1`
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
`


// Estilização do container dos submódulos
export const SubmoduloContainer = styled.div`
    display: flex;
    flex-direction: column;  // Organiza os submódulos verticalmente
    position: absolute;  // Posiciona o container na lateral do módulo
    right: 0;
    top: 0;
    background-color: white;  // Fundo branco para contraste
    border: 1px solid #ddd;  // Borda cinza clara
    border-radius: 5px;  // Borda arredondada
    padding: 10px;  // Espaçamento interno
    width: 200px;  // Largura fixa
`;

// Estilização de um único submódulo
export const Submodulo = styled(Link)`
    padding: 10px;  // Espaçamento interno
    color: ${({ theme }) => (theme.dark)};
    border-bottom: 1px solid #ddd;  // Linha separadora
    text-decoration: none;
    &:last-child {
        border-bottom: none;  // Remove a linha do último submódulo
    }

    &:hover {
        background-color: #f5f5f5;  // Cor de fundo ao passar o mouse
        cursor: pointer;  // Cursor de ponteiro ao passar o mouse
    }
`;

export const ContainerPortal = styled.div`
    position: relative;
    padding: 50px;
    background: ${({ theme }) => theme.background};
    border-radius: 15px;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 3rem;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
    }
`;

export const CloseIconWrapper = styled.div`
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
`;

export const TitleModal = styled.h2`
    width: 100%;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: ${({ theme }) => theme.primary};
`

export const IconX = styled(X)`

    color: ${({ theme }) => (theme.theme === 'dark' ? "#F6F6F6" : "#000000")};

    &:hover{
        color: red;
    }

`

export const ContainerModulosModal = styled.div<{ count: number }>`
    display: flex;
    background-color: ${({ theme }) => theme.light};
    height: 400px;
    width: 400px;
    border-radius: 15px;
    margin: 10px;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    transition: all ease 0.3s;
    flex-basis: ${({ count }) => `calc((100% - 200px) / ${count})`};
    margin: 10px;
    padding: 2.5rem;

    @media (max-width: 760px) {
        flex-basis: ${({ count }) => `calc((100% - 100px) / ${count})`};
        height: 500px !important; // Aumente este valor conforme necessário
    }

    @media (max-width: 425px) {
        flex-basis: 100%;
        height: 60vh; // Ajuste este valor conforme necessário
        width: 90%;
    }

    &:hover {
        background-color: ${({ theme }) => theme.borderColor};
        color: ${({ theme }) => theme.primary};
    }   
`;



