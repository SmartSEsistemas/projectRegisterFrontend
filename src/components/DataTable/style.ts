import styled from 'styled-components';

export const TableContainer = styled.div<{ height: string }>`
  overflow-x: auto;
  width: 100%;
  height: ${(props) => props.height};
  position: relative;
  border-radius: 5px;
  color: ${({ theme }) =>
    theme.theme === 'dark' ? theme.lightGray : theme.dark};
  table-layout: auto;
  text-align: left;

  & p,
  & span {
    font-size: 0.875rem;
    font-weight: 400;
    text-transform: capitalize;
  }

  & button {
    color: ${({ theme }) =>
      theme.theme === 'dark' ? theme.lightGray : theme.dark};
  }
`;

export const Table = styled.table`
  width: initial;
  border-collapse: collapse;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: absolute;
`;

export const TableHeader = styled.th`
  padding: 4px;
  min-width: 100px;

  & button {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 8px;
    text-align: left;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.borderColor};
    border-radius: 3px;
    border: none;
    cursor: pointer;
  }
`;

export const TableHeaderActions = styled.th`
  padding: 4px;
  min-width: 150px;
  position: sticky;
  right: 0;
  background-color: inherit;
  z-index: 1;
  width: auto;
  white-space: nowrap;

  & p {
    padding: 8px;
    text-align: left;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.borderColor};
    border-radius: 5px;
    border: none;
  }
`;

export const TableBodyActions = styled.td`
  min-width: 150px;
  position: sticky;
  right: 0;
  z-index: 1;
  padding: 8px;
  background-color: inherit;
  width: auto;
  white-space: nowrap;
`;

export const ActionIconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  transition: opacity 0.5s ease;
  border-left: 1px solid ${({ theme }) => theme.borderColor};
`;

export const TableRowHeader = styled.tr`
  background-color: ${({ theme }) => theme.background};
  width: auto;
  white-space: nowrap;
`;

export const TableRow = styled.tr`
  background-color: ${({ theme }) => theme.background};
  width: auto;
  white-space: nowrap;
  transition: all 0.5s ease;

  :not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  }

  &:hover {
    background: ${({ theme }) => theme.borderColor};

    & div {
      transition: all 0.5s ease;

      border-left: 1px solid ${({ theme }) => theme.light};

      & button {
        border: 1px solid ${({ theme }) => theme.light};
      }
    }
  }
`;

export const TableCell = styled.td`
  padding: 16px 16px 16px 4px;
  width: auto;
  white-space: nowrap;
  font-size: 0.875rem;
`;

export const FilterInput = styled.input`
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
  width: 100%;
  min-width: 100px;
`;

export const ActionButton = styled.button`
  border: 1px solid ${({ theme }) => theme.borderColor};
  height: 32px;
  width: 32px;
  background: none;
  cursor: pointer;
  margin-right: 5px;
  display: flex;
  align-items: center;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;

  &:hover {
    background: ${({ theme }) => theme.background} !important;
    border: 1px solid ${({ theme }) => theme.primary} !important;

    & svg {
      color: ${({ theme }) => theme.primary};
    }
  }

  svg {
    font-size: 1rem;
  }
`;

export const ItemsPerPageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const ItemsPerPageText = styled.span`
  margin-right: 5px;
`;
