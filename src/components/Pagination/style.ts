import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const PaginationButton = styled.button`
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#00c489')};
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin: 0 5px;
  font-size: 18px;
  color: #fff;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#ccc' : '#00a97f')};
  }
`;
export const PaginationInfo = styled.div`
  margin: 0 10px;
`;
