import Link from "next/link";
import styled from "styled-components";


export const ContainerModulos = styled.div<any>`
    position: relative; // Adicione isso
    overflow: hidden; // Adicione isso
    display: flex;
    background-color: ${({ theme }) => theme.light};
    height: ${({ isOpen }) => (isOpen ? "300px" : "250px")};
    width: ${({ isOpen }) => (isOpen ? "300px" : "250px")};
    border-radius: 5px;
    margin: 10px;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    transition: all ease 0.3s;
    flex-basis: calc((100% - 200px) / 5); // For 4 modules per row in desktop view
    margin: 10px;
    &:hover {
        background-color: ${({ theme }) => theme.borderColor};
        color: ${({ theme }) => { return theme.theme === 'dark' ? "white" : theme.secondary}};
    }
    @media (max-width: 768px) { // For tablet view
        flex-basis: calc((100% - 100px) / 4);
    }
    @media (max-width: 425px) { // For mobile view
        flex-basis: 100%;
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
