import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  color: ${({ theme }) => (theme.theme === 'dark' ? theme.light : theme.dark)};
`;

export const PaginationButton = styled.button`
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.borderColor : theme.primary};
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin: 0 5px;
  font-size: 18px;
  color: #fff;
  border-radius: 3px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme, disabled }) =>
      disabled ? theme.borderColor : theme.primary};
  }
`;
export const PaginationInfo = styled.div`
  margin: 0 10px;
`;
