import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  background: transparent;
  grid-column: span 2;
  padding: 1.5rem;
  box-sizing: border-box;

  @media (max-width: 870px) {
    padding: 1.5rem 0 1.5rem 0;
  }
`;

export const TitlePage = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 870px) {
    font-size: 1.5rem;
  }
`;
